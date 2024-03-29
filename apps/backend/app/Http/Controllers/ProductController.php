<?php

namespace App\Http\Controllers;

use App\Http\Filters\ProductQuery;
use App\Http\Requests\Product\ProductIndexRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product\Product;
use App\Services\ResponseService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductController
{
    /**
     * @param ProductIndexRequest $request
     * @return AnonymousResourceCollection
     */
    public function index(ProductIndexRequest $request): AnonymousResourceCollection
    {
        return ProductResource::collection(
            Product::query()->valid()->filter(
                ProductQuery::make(
                    $request->only(
                        'type',
                        'name',
                        'price',
                        'address',
                        'area',
                        'room'
                    )
                )
            )->paginate()
        );
    }

    public function info()
    {
        return ResponseService::success([
            'rooms_1' => Product::oneRoom()->count(),
            'rooms_2' => Product::twoRoom()->count(),
            'rooms_3' => Product::threeRoom()->count(),
            'rooms_4' => Product::fourRoom()->count(),
            'out_city' => Product::suburban()->count(),
            'commercial' => Product::commercial()->count(),
            'rooms_mos' => Product::justRoom()->count(),
            'atelier' => Product::atelier()->count()
        ]);
    }

    public function show(Product $product): JsonResource
    {
        return ProductResource::make(
            $product
        );
    }
}
