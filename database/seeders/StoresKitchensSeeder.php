<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StoresKitchensSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('stores_kitchens')->insert([
            [
                'store_id' => 1,
                'kitchen_id' => 1
            ],
            [
                'store_id' => 1,
                'kitchen_id' => 4
            ],
        ]);
    }
}
