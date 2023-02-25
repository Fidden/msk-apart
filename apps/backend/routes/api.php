<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductSpecialController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('/product')->group(function () {
    Route::get('/', [ProductController::class, 'index']);
    Route::get('/{product}', [ProductController::class, 'show']);
});

Route::get('/info', [ProductController::class, 'info']);
Route::get('/special', [ProductSpecialController::class, 'index']);

Route::prefix('/user')->group(function () {
    Route::post('/register', [UserController::class, 'register']);
    Route::post('/login', [UserController::class, 'login']);
    Route::any('/logout', [UserController::class, 'logout']);
});

