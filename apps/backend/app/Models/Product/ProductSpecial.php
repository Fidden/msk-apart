<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductSpecial extends Model
{
    use HasFactory;

    public $guarded = [];


    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
