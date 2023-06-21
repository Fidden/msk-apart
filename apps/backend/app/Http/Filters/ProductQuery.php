<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class ProductQuery extends QueryFilter
{
    public function type(int $type): Builder
    {
        return $this->builder->where('stock_type_id', $type);
    }

    public function name(string $name): Builder
    {
        return $this->builder->where('name', $name);
    }

    public function price(array $price)
    {
        return $this->builder->whereHas('price', function (Builder $builder) use ($price) {
            $builder->whereBetween('value', $price);
        });
    }

    public function address(string $address)
    {
        return $this->builder->whereHas('address', function (Builder $builder) use ($address) {
            $builder->where('value', 'like', '%' . $address . '%');
        });
    }

    public function area(array $area)
    {
        return $this->builder->whereHas('area', function (Builder $builder) use ($area) {
            $builder->whereBetween('value', $area);
        });
    }

    public function room(int $room)
    {
        return $this->builder->whereHas('rooms', function (Builder $builder) use ($room) {
            $builder->where('value', $room);
        });
    }
}
