<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            [
                'store_id' => 1,
                'name' => 'كباب',
                'desc' => 'سندوتش الكباب الجديد',
                'price' => 90,
                'image' => 'item_1.webp',
                'category_id' => 1,
                'discount' => 30,
                'sizes' => json_encode( ['s' => 50, 'm' => 70, 'l' => 90] )
            ],
            [
                'store_id' => 1,
                'name' => 'شيش طاووق',
                'desc' => 'سندوتش الشيش طاووق الرائع',
                'price' => 80,
                'image' => 'item_1.webp',
                'category_id' => 2,
                'discount' => 30,
                'sizes' => null
            ]
        ]);
    }
}
