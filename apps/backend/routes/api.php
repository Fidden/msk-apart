<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductSpecialController;
use Illuminate\Support\Facades\Route;

Route::prefix('/product')->group(function () {
    Route::get('/', [ProductController::class, 'index']);
    Route::get('/{product}', [ProductController::class, 'show']);
});

Route::get('/special', [ProductSpecialController::class, 'index']);

