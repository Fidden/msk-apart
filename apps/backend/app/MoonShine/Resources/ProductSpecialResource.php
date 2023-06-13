<?php

namespace App\MoonShine\Resources;

use App\Models\Product\ProductSpecial;
use Illuminate\Database\Eloquent\Model;
use MoonShine\Actions\FiltersAction;
use MoonShine\Fields\BelongsTo;
use MoonShine\Fields\Date;
use MoonShine\Fields\ID;
use MoonShine\Resources\Resource;

class ProductSpecialResource extends Resource
{
    public static string $model = ProductSpecial::class;

    public static string $title = 'ProductSpecials';

    public function fields(): array
    {
        return [
            ID::make()->sortable(),
            BelongsTo::make('Недвижимость', 'product'),
            Date::make('Создан в', 'created_at'),
            Date::make('Обновлен в', 'updated_at'),
        ];
    }

    public function rules(Model $item): array
    {
        return [];
    }

    public function search(): array
    {
        return ['id'];
    }

    public function filters(): array
    {
        return [];
    }

    public function actions(): array
    {
        return [
            FiltersAction::make(trans('moonshine::ui.filters')),
        ];
    }
}
