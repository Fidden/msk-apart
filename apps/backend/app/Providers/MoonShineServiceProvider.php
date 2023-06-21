<?php

namespace App\Providers;

use App\MoonShine\Resources\ProductFieldResource;
use App\MoonShine\Resources\ProductResource;
use App\MoonShine\Resources\ProductSpecialResource;
use App\MoonShine\Resources\StockFieldResource;
use App\MoonShine\Resources\StockFieldVariantResource;
use App\MoonShine\Resources\StockTypeResource;
use Illuminate\Support\ServiceProvider;
use MoonShine\Menu\MenuGroup;
use MoonShine\Menu\MenuItem;
use MoonShine\MoonShine;
use MoonShine\Resources\MoonShineUserResource;
use MoonShine\Resources\MoonShineUserRoleResource;

class MoonShineServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        app(MoonShine::class)->menu([
            MenuGroup::make('moonshine::ui.resource.system', [
                MenuItem::make('moonshine::ui.resource.admins_title', new MoonShineUserResource())
                    ->translatable()
                    ->icon('users'),
                MenuItem::make('moonshine::ui.resource.role_title', new MoonShineUserRoleResource())
                    ->translatable()
                    ->icon('bookmark'),
            ])->translatable(),

            MenuItem::make('Недвижимость', new ProductResource()),
            MenuItem::make('Поля недвижимости', new ProductFieldResource()),
            MenuItem::make('Спец недвижимость', new ProductSpecialResource()),
            MenuItem::make('Тип недвижимости', new StockTypeResource()),
            MenuItem::make('Поля типа недвижимости', new StockFieldResource()),
            MenuItem::make('Варианты полей', new StockFieldVariantResource()),
        ]);
    }
}
