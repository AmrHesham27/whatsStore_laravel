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
        Schema::create('stores', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->foreignId('user_id')->references('id')->on('users')
                ->onDelete('cascade')->onUpdate('cascade');
            $table->string('name', 60);
            $table->string('url', 60);
            $table->string('logo', 60);
            $table->string('color_1', 60)->default('rgb(246, 246, 246)');
            $table->string('color_2', 60)->default('rgb(0, 152, 0)');
            $table->integer('min_order');
            $table->time('start_time');
            $table->time('end_time');
            $table->tinyInteger('delievry_time');
            $table->tinyInteger('delivery_fees');
            $table->boolean('is_suspended')->default(false);
            $table->string('whatsapp', 11);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stores');
    }
};
