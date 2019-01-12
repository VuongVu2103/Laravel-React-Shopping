<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// khai báo sử dụng loginRequest
use App\Http\Requests\LoginRequest;
use Auth;
use App\Admin;

class AdminLoginController extends Controller
{
    protected $connection = 'mongodb';

    protected $guard = 'admins';

    protected $collection = 'admins';
    protected function guard(){
        return Auth::guard('admins');
    }
    public function login(Request $request)
    {
        // grab credentials from the request
        $credentials = $request->only('email', 'password');

        try {
            // attempt to verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    "error" => "invalid_credentials",
                    "message" => "The user credentials were incorrect. "
                ], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json([
                "error" => "could_not_create_token",
                "message" => "Enable to process request."
            ], 422);
        }

        // all good so return the token
        $admin =  Admin::where('email', $request->get('email'))->get();
        return response()->json([
            'user'  => $admin,
            'token' => $token,
        ],200);

    }

}