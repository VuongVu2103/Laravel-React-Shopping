<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use App\Brands;

class BrandsController extends Controller
{
    //
    public function index()
    {
        $brands = Brands::all();
        return response()->json($brands);
    }

}
