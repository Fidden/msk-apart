<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FieldResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'stock_field' => StockFieldResource::make($this->stockField),
            'value' => $this->value
        ];
    }
}
