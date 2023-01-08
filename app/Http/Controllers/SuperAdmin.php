<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Models\Store;

class SuperAdmin extends Controller
{
    public function showRegisterStore()
    {
        return view();
    }

    public function registerStoreOwner(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        Store::create([
            'name' => $request['store_name'],
            'whatsapp' => $request['whatsapp'],
            'user_id' => $user['id']
        ]);
    }
}
