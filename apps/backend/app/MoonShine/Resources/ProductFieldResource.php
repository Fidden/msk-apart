<?php

namespace App\MoonShine\Resources;

use App\Models\Product\ProductField;
use Illuminate\Database\Eloquent\Model;
use MoonShine\Actions\FiltersAction;
use MoonShine\Fields\BelongsTo;
use MoonShine\Fields\Date;
use MoonShine\Fields\ID;
use MoonShine\Fields\Text;
use MoonShine\Resources\Resource;

class ProductFieldResource extends Resource
{
    public static string $model = ProductField::class;

    public static string $title = 'ProductFields';

    public function fields(): array
    {
        return [
            ID::make()->sortable(),
            BelongsTo::make('Недвижимость', 'product', 'name'),
            BelongsTo::make('Поле', 'stockField', 'name'),
            Text::make('Значение', 'value'),
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
