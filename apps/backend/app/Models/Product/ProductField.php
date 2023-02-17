<?php

namespace App\Models\Product;

use App\Models\Stock\StockField;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

class ProductField extends Model
{
    use HasFactory;

    public $guarded = [];

    public function stockField()
    {
        return $this->belongsTo(StockField::class);
    }
}
