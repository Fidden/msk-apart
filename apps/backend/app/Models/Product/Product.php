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

    public function scopeValid()
    {
        return $this->whereHas('images')
            ->whereHas('address')
            ->whereHas('price')
            ->whereHas('price', fn($query) => $query->where('value', '>', 0))
            ->whereHas('rooms')
            ->whereHas('floorTotal')
            ->whereHas('floorCurrent')
            ->whereHas('area')
            ->whereHas('subwayName')
            ->whereHas('subwayWalkTime');
    }

    public function type(): HasOne
    {
        return $this->hasOne(StockType::class, 'id', 'stock_type_id');
    }

    public function fields(): HasMany
    {
        return $this->hasMany(ProductField::class);
    }

    public function stockField(int $id): HasMany
    {
        return $this->fields()->where('stock_field_id', $id);
    }

    public function scopeOneRoom()
    {
        return $this->where('name', "1-к квартира");
    }

    public function scopeTwoRoom()
    {
        return $this->where('name', "2-к квартира");
    }

    public function scopeThreeRoom()
    {
        return $this->where('name', "3-к квартира");
    }

    public function scopeFourRoom()
    {
        return $this->where('name', '4-к квартира');
    }

    public function scopeJustRoom()
    {
        return $this->where('name', 'Комната');
    }

    public function scopeSuburban()
    {
        return $this->where('stock_type_id', 3);
    }

    public function scopeAtelier()
    {
        return $this->where('name', 'Студия');
    }

    public function scopeCommercial()
    {
        return $this->where('stock_type_id', 2);
    }

    public function images(): HasMany
    {
        return $this->stockField(474);
    }

    public function description(): HasMany
    {
        return $this->stockField(624);
    }

    public function address(): HasMany
    {
        return $this->stockField(1731);
    }

    public function price(): HasMany
    {
        return $this->stockField(470);
    }

    public function rooms(): HasMany
    {
        return $this->stockField(446);
    }

    public function floorTotal(): HasMany
    {
        return $this->stockField(467);
    }

    public function floorCurrent(): HasMany
    {
        return $this->stockField(448);
    }

    public function area(): HasMany
    {
        return $this->stockField(447);
    }

    public function subwayName(): HasMany
    {
        return $this->stockField(485);
    }

    public function subwayWalkTime(): HasMany
    {
        return $this->stockField(486);
    }

    public function corpus(): HasMany
    {
        return $this->stockField(1729);
    }

    public function finishing(): HasMany
    {
        return $this->stockField(469);
    }

    public function repair(): HasMany
    {
        return $this->stockField(452);
    }

    public function buildType(): HasMany
    {
        return $this->stockField(458);
    }

    public function livingArea(): HasMany
    {
        return $this->stockField(450);
    }

    public function kitchenArea(): HasMany
    {
        return $this->stockField(451);
    }

    public function buildYear(): HasMany
    {
        return $this->stockField(456);
    }

    public function bathroomType(): HasMany
    {
        return $this->stockField(468);
    }

    public function balcony(): HasMany
    {
        return $this->stockField(455);
    }

    public function roomType(): HasMany
    {
        return $this->stockField(740);
    }
}
