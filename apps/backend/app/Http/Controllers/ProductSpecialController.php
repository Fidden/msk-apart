<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product\Product;
use App\Models\Product\ProductSpecial;

class ProductSpecialController
{
    public function index()
    {
        return ProductResource::collection(
            Product::whereIn('id', ProductSpecial::limit(8)->pluck('product_id'))->get()
        );
    }
}
