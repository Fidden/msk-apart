<?php

namespace App\Models\Product;

use App\Models\Stock\StockField;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductField extends Model
{
    use HasFactory;

    public $guarded = [];

    public function stockField(): BelongsTo
    {
        return $this->belongsTo(StockField::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
