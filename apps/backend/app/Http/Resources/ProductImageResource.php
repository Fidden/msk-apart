<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductImageResource extends JsonResource
{
    public function toArray($request)
    {
        return "https://mskr.intrumnet.com/files/crm/product/$this->value";
    }
}
