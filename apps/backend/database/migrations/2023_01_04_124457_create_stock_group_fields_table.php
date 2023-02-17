<?php

use App\Models\Stock\StockGroup;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('stock_group_fields', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(StockGroup::class)->constrained();
            $table->string('value');
            $table->timestamps();
        });
    }
};
