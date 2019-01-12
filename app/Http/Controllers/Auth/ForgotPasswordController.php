<?php
namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use App\Transformers\Json;
use App\User;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
class ForgotPasswordController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }
    public function getResetToken(Request $request)
    {
        $this->validate($request, ['email' => 'required|email']);
        if ($request->wantsJson()) {
            $user = User::where('email', $request->input('email'))->first();
            if (!$user) {
                return response()->json(['status','Email with reset link sent successfully'],200);
            }
            $this->sendResetLinkEmail($request);
            return response()->json(['status','Email with reset link sent successfully'],200);
        }
    }
}