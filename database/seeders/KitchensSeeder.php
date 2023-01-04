<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KitchensSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('kitchens')->insert([
            [
                'name' => 'البرجر'
            ],
            [
                'name' => 'الدجاج'
            ],
            [
                'name' => 'مأكولات بحرية'
            ],
            [
                'name' => 'مأكولات سريعة'
            ],
        ]);
    }
}
