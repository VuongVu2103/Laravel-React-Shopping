<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\User;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;


class UserController extends Controller
{
    private $user;

    public function index()
    {
        $users = User::all();
        return response()
            ->json($users);
    }
    public function store(Request $request)
    {
        User::create($request->all());
        return response()
            ->json(['message' => 'Success: You have added an user']);
    }
    public function edit($id)
    {
        $user = User::find($id);
        if (! $user) {
            return response()
            ->json(['error' => 'The user is not exists']);
        }
        return response()
            ->json($user);
    }
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if (! $user) {
            return response()
            ->json(['error' => 'Error: User not found']);
        }
        $user->update($request->all());
        return response()
            ->json(['message' => 'Success: You have updated the user']);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        if (! $user) {
            return response()
            ->json(['error' => 'Error: User not found']);
        }
        $user->delete();
        return response()
            ->json(['message' => 'Success: You have deleted the user']);
    }

    public function __construct(User $user){
        $this->user = $user;
    }

    public function register(Request $request){
        $user = $this->user->create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password'))
        ]);

        return response()->json(['status'=>true,'message'=>'User created successfully','data'=>$user]);

    }

    public function login(Request $request){
        $credentials = $request->only('email', 'password');
        $token = null;
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['invalid_email_or_password'], 422);
            }
        } catch (JWTAuthException $e) {
            return response()->json(['failed_to_create_token'], 500);
        }
        return response()->json(compact('token'));
    }

    public function getAuthUser(Request $request){
        $user = JWTAuth::toUser($request->token);
        return response()->json(['result' => $user]);
    }
}
