<?php

use App\Models\Stock\StockField;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('stock_field_variants', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(StockField::class)->constrained();
            $table->string('value');
            $table->string('bind');
            $table->string('default');
            $table->timestamps();
        });
    }
};
