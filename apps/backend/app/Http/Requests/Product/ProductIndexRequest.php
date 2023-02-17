<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class ProductIndexRequest extends FormRequest
{
    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'type' => 'integer|exists:stock_types,id',
            'name' => 'string',
            'price' => 'string',
            'address' => 'string',
            'area' => 'string',
        ];
    }

    private function transformToArray(string $key, string $separator = ',')
    {
        if ($this->has($key)) {
            $this->merge([
                $key => explode($separator, $this->get($key))
            ]);
        }
    }

    public function passedValidation()
    {
        $this->transformToArray('price');
        $this->transformToArray('area');
    }
}
