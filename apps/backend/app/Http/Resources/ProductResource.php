<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray($request)
    {
        $productImages = ProductFieldResource::collection($this->images);
        $productImage = $this->images->first()->value;

        return [
            'id' => $this->id,
            'image' => $productImage,
            'images' => $productImages,
            'title' => $this->name,
            'description' => $this->description()->value('value'),
            'address' => $this->address()->value('value'),
            'price' => $this->price()->value('value'),
            'rooms' => $this->rooms()->value('value'),
            'floor' => [
                'value' => $this->floorCurrent()->value('value'),
                'total' => $this->floorTotal()->value('value'),
            ],
            'area' => $this->area(),
            'areaDescription' => '',
            'subway' => [
                'station' => $this->subwayName()->value('value'),
                'distance' => $this->subwayWalkTime()->value('value'),
            ]
        ];
    }
}
