<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'password'],function() {
	Route::post('/email', 'Auth\ForgotPasswordController@getResetToken');
	Route::post('/reset', 'Auth\ResetPasswordController@reset');
});

Route::group(['prefix'=> 'auth'],function(){
    Route::post('/register','Auth\RegisterController@register');
    Route::post("/login",'Auth\LoginController@login');
    Route::post('/login/{social}/callback','Auth\LoginController@handleProviderCallback')->where('social','facebook|google|');
    Route::post('/admin','Auth\AdminLoginController@login');

});

Route::get('/','Api\BrandsController@index');
Route::resource('products', 'Api\ProductsController'); 


Route::group(['prefix' => 'admin'],function(){
    Route::resource('/home', 'AdminController'); 
    Route::resource('users', 'Api\UserController'); 
    Route::resource('products', 'Api\ProductsAdminController'); 
});
// Route::post('/cart','Api\OrderController@store');
