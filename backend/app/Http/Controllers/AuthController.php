<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    //register
    public function register(Request $request)
    {
        // Validate field
        $fields = $request->validate([
            'fullname' => 'required|string',
            'username' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed',
            'tel' => 'required',
            'role' => 'required|integer'
        ]);

        $user = User::create([
            'fullname' => $fields['fullname'],
            'username' => $fields['username'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
            'tel' => $fields['tel'],
            'role' => $fields['role']
        ]);

        //Create Token
        // $token = $user->createToken('device-name','role')->planText();
        // device-name คือ ชื่ออุปกรณ์ที่ request เข้ามา ส่วน role คือ role ที่จะกำหนดให้ (ยังไม่ต้องใส่ ไปแก้ไขทีหลังหน้า adminเอา)
        $token = $user->createToken('my-iphone')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
        ];
        return response($response, 201);
    }

    //Login
    public function login(Request $request)
    {
        // Validate field
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where([
            'email' => $fields['email'],
        ])->first();

        if (!$user) {
            return response([
                'message' => 'Invalid credential!'
            ], 401);
        } else {
            if (!Hash::check($fields['password'], $user->password)) {
                return response([
                    'message' => 'Password not match!'
                ], 401);
            }

            // ลบ token เก่าออก
            $user->tokens()->delete();

            //Create Token
            // $token = $user->createToken('device-name','role')->planText();
            // device-name คือ ชื่ออุปกรณ์ที่ request เข้ามา ส่วน role คือ role ที่จะกำหนดให้ (ยังไม่ต้องใส่ ไปแก้ไขทีหลังหน้า adminเอา)
            $token = $user->createToken('my-iphone')->plainTextToken;

            $response = [
                'user' => $user,
                'token' => $token,
            ];
            return response($response, 201);

        }
    }

    //Logout
    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return response([
            'message' => 'Logout success!'
        ], 200);
    }
}
