<?php

use App\Models\Stock\StockType;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('stock_groups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignIdFor(StockType::class)->constrained();
            $table->timestamps();
        });
    }
};
