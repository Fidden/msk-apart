<?php

namespace App\Models\Product;

use App\Http\Filters\Traits\Filterable;
use App\Models\Stock\StockType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Product extends Model
{
    use HasFactory, Filterable;

    public $guarded = [];

    public function type(): HasOne
    {
        return $this->hasOne(StockType::class, 'id', 'stock_type_id');
    }

    public function fields(): HasMany
    {
        return $this->hasMany(ProductField::class);
    }

    public function stockField(int $id)
    {
        return $this->fields()->where('stock_field_id', $id);
    }

    public function images()
    {
        return $this->stockField(474);
    }

    public function description()
    {
        return $this->stockField(624);
    }

    public function address()
    {
        return $this->stockField(1731);
    }

    public function price()
    {
        return $this->stockField(470);
    }

    public function rooms()
    {
        return $this->stockField(446);
    }

    public function floorTotal()
    {
        return $this->stockField(467);
    }

    public function floorCurrent()
    {
        return $this->stockField(448);
    }

    public function area()
    {
        return $this->stockField(447);
    }

    public function subwayName()
    {
        return $this->stockField(485);
    }

    public function subwayWalkTime()
    {
        return $this->stockField(486);
    }
}
