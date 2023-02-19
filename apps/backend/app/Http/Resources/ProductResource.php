<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductResource extends JsonResource
{
    private function convertStationStringToColor(string|null $station)
    {
        if (!$station)
            return 'black';

        $json = Storage::disk('local')->get('subway.json');
        $subways = json_decode($json, true);

        foreach ($subways as $subway) {
            if (str_contains($subway['name'], $station)) {
                return $subway['hex'];
            }
        }

        return 'black';
    }

    public function toArray($request)
    {
        $subwayStation = $this->subwayName()?->value('value');
        $productImages = ProductImageResource::collection($this->images);
        $array = array_reverse($productImages->toArray($request));
        $productImage = array_pop($array);

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
            'area' => $this->area()->value('value'),
            'areaDescription' => '',
            'areaData' => [
                'living' => (int)$this->livingArea()->value('value'),
                'kitchen' => (int)$this->kitchenArea()->value('value'),
                'year' => (int)$this->buildYear()->value('value'),
            ],
            'subway' => [
                'station' => $subwayStation,
                'distance' => $this->subwayWalkTime()->value('value'),
                'color' => $this->convertStationStringToColor($subwayStation),
            ],
            'corpus' => $this->corpus()->value('value'),
            'finishing' => $this->finishing()->value('value'),
            'repair' => $this->repair()->value('value'),
            'buildType' => $this->buildType()->value('value'),
            'bathroomType' => $this->bathroomType()->value('value'),
            'balcony' => (int)$this->balcony()->value('value'),
            'roomType' => $this->roomType()->value('value'),
        ];
    }
}
