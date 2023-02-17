<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StockFieldResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'datatype' => $this->datatype,
            'require' => boolval($this->require),
            'variants' => StockFieldVariantResource::collection($this->variants)
        ];
    }
}
