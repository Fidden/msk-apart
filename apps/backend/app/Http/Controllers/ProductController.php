<?php

namespace App\Http\Controllers;

use App\Http\Filters\ProductQuery;
use App\Http\Requests\Product\ProductIndexRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product\Product;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductController
{
    public function index(ProductIndexRequest $request)
    {
        return ProductResource::collection(
            Product::filter(
                ProductQuery::make(
                    $request->only(
                        'type',
                        'name',
                        'price',
                        'address',
                        'area'
                    )
                )
            )->paginate()
        );
    }

    public function show(Product $product): JsonResource
    {
        return ProductResource::make(
            $product
        );
    }
}
