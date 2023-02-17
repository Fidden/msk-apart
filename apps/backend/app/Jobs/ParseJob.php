<?php

namespace App\Jobs;

use App\Api\Intrum;
use App\Models\Product\Product;
use App\Models\Product\ProductField;
use App\Models\Stock\StockField;
use App\Models\Stock\StockFieldVariant;
use App\Models\Stock\StockType;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ParseJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private Intrum $api;

    public function __construct()
    {
        $this->api = new Intrum();
    }

    public function handle()
    {
        $this->createStockFields();
        $this->createStockTypes();
        $this->createProduct();
    }

    private function createProduct()
    {
        $types = StockType::all();
        $page = 1;
        $total_count = 0;

        do {
            foreach ($types as $type) {
                $data = $this->api->getStock()->filter([
                    'limit' => 500,
                    'type' => $type->id,
                    'count_total' => 1,
                    'page' => $page
                ]);
                $total_count = $data['data']['count'];
                $products = $data['data']['list'];

                foreach ($products as $product) {
                    Product::firstOrCreate([
                        'id' => $product['id'],
                        'name' => $product['name'],
                        'stock_type_id' => $type->id
                    ]);

                    foreach ($product['fields'] as $field) {
                        ProductField::create([
                            'product_id' => $product['id'],
                            'stock_field_id' => $field['id'],
                            'value' => is_array($field['value'])
                                ? implode(',', $field['value'])
                                : $field['value']
                        ]);
                    }
                }
            }
            $page++;
        } while ($page * 500 < $total_count);
    }

    private function createStockFields()
    {
        $data = $this->api->getStock()->fields();
        $fields = $data['data']['1']['fields'];

        foreach ($fields as $field) {
            StockField::firstOrCreate([
                'id' => $field['id'],
                'name' => $field['name'],
                'datatype' => $field['datatype'],
                'require' => boolval($field['require'])
            ]);

            if (!array_key_exists('variants', $field))
                continue;

            foreach ($field['variants'] as $variant) {
                if (StockFieldVariant::where('id', $variant['id'])->first())
                    continue;

                StockFieldVariant::firstOrCreate([
                    'id' => $variant['id'],
                    'stock_field_id' => $field['id'],
                    'value' => $variant['value'],
                    'bind' => $variant['bind'],
                    'default' => $variant['default']
                ]);
            }
        }
    }

    private function createStockTypes()
    {
        $data = $this->api->getStock()->type();
        $types = $data['data'];

        foreach ($types as $type) {
            StockType::firstOrCreate([
                'id' => $type['id'],
                'name' => $type['name']
            ]);
        }
    }
}
