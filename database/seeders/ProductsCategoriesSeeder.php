<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products_categories')->insert([
            [
                'name' => 'سندوتشات',
                'store_id' => 1
            ], 
            [
                'name' => 'الأكثر مبيعا',
                'store_id' => 1
            ]
        ]);
    }
}
