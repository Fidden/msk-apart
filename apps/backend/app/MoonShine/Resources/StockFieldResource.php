<?php

namespace App\MoonShine\Resources;

use App\Models\Stock\StockField;
use Illuminate\Database\Eloquent\Model;
use MoonShine\Actions\FiltersAction;
use MoonShine\Fields\Date;
use MoonShine\Fields\ID;
use MoonShine\Fields\SwitchBoolean;
use MoonShine\Fields\Text;
use MoonShine\Resources\Resource;

class StockFieldResource extends Resource
{
    public static string $model = StockField::class;

    public static string $title = 'StockFields';

    public function fields(): array
    {
        return [
            ID::make()->sortable(),
            Text::make('Название', 'name')->sortable(),
            Text::make('Тип данных', 'datatype'),
            SwitchBoolean::make('Обязательность', 'require'),
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
