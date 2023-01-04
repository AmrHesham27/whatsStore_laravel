<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stores_kitchens', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->foreignId('store_id')->references('id')->on('stores')
                ->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('kitchen_id')->references('id')->on('kitchens')
                ->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stores_kitchens_x_ref');
    }
};
