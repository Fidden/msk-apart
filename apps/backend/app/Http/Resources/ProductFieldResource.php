<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductFieldResource extends JsonResource
{
    public function toArray($request)
    {
        return $this->value;
    }
}
