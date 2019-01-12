<?php

use Illuminate\Database\Seeder;
use App\Admin;

class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Admin::create([
            'name' => 'Vuong Vu',
            'email' => 'admin1@gmail.com',
            'password' => Hash::make('123456'),
            'remember_token' => str_random(10),
        ]);
    }
}
