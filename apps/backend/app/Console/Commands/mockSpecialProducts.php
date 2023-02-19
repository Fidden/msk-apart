<?php

namespace App\Console\Commands;

use App\Models\Product\Product;
use App\Models\Product\ProductSpecial;
use Illuminate\Console\Command;

class mockSpecialProducts extends Command
{
    protected $signature = 'mock:special-products';

    protected $description = 'Command description';

    public function handle()
    {
        $products = Product::valid()->limit(8)->get();
        foreach ($products as $product) {
            ProductSpecial::create([
                'product_id' => $product->id
            ]);
        }
    }
}
