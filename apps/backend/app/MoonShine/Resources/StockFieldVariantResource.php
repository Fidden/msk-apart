<?php

namespace App\MoonShine\Resources;

use App\Models\Stock\StockFieldVariant;
use Illuminate\Database\Eloquent\Model;
use MoonShine\Actions\FiltersAction;
use MoonShine\Fields\BelongsTo;
use MoonShine\Fields\Date;
use MoonShine\Fields\ID;
use MoonShine\Fields\SwitchBoolean;
use MoonShine\Fields\Text;
use MoonShine\Resources\Resource;

class StockFieldVariantResource extends Resource
{
    public static string $model = StockFieldVariant::class;

    public static string $title = 'StockFieldVariants';

    public function fields(): array
    {
        return [
            ID::make()->sortable(),
            BelongsTo::make('Поле', 'stockField', 'name'),
            Text::make('Значение', 'value'),
            SwitchBoolean::make('bind'),
            Text::make('По умолчанию', 'default'),
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
