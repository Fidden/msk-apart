<?php

namespace App\Models\Stock;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class StockField extends Model
{
    use HasFactory;

    public $guarded = [];

    public function variants(): HasMany
    {
        return $this->hasMany(StockFieldVariant::class);
    }
}
