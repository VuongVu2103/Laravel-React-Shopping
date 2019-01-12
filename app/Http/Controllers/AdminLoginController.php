<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// khai báo sử dụng loginRequest
use App\Http\Requests\LoginRequest;
// use Auth;
// use Illuminate\Support\Facades\Auth;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Admin;

class AdminLoginController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('auth:admin');
    // }

    public function getLogin()
    {
        // if (Auth::check()) {
        //     // nếu đăng nhập thàng công thì 
        //     return redirect('admin');
        // } else {
            return view('admin.login');
        // }

    }

    /**
     * @param LoginRequest $request
     * @return RedirectResponse
     */
    public function postLogin(LoginRequest $request)
    {
        // $login = [
        //     'email' => $request->txtEmail,
        //     'password' => $request->txtPassword,
        //     'level' => 1,
        //     // 'status' => 1
        // ];
        // if (Auth::attempt($login)) {
        //     return redirect()->route('home');
        // } 
        // else {
        //     return redirect()->back()->with('status', 'Email hoặc Password không chính xác');
        // }
        // $login = $request->only('email', 'password');

        // if (Auth::attempt( $login)) {
        //     // Authentication passed...
        //     return redirect()->intended('admin.login');
        // }
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
            'admin'  => $admin,
            'token' => $token,
        ],200);

    }

    /**
     * action admincp/logout
     * @return RedirectResponse
     */
    public function getLogout()
    {
        Auth::logout();
        return redirect()->route('getLogin');
    }

}