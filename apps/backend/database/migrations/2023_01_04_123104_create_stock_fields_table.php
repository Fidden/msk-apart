<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('stock_fields', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('datatype');
            $table->boolean('require')->default(0);
            $table->timestamps();
        });
    }
};
