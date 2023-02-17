<?php

use App\Models\Product\Product;
use App\Models\Stock\StockField;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('product_fields', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Product::class)->constrained();
            $table->foreignIdFor(StockField::class)->constrained();
            $table->text('value');
            $table->timestamps();
        });
    }
};
