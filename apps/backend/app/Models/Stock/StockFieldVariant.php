<?php

namespace App\Models\Stock;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockFieldVariant extends Model
{
    use HasFactory;

    public $guarded = [];

    public function stockField()
    {
        return $this->belongsTo(StockField::class);
    }
}
