<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use App\Products;

class ProductsController extends Controller
{
    //
    public function index()
    {
        $products = Products::all();
        return response()->json($products);
    }

    public function show($id)
    {
        $products = Products::find($id);
        return response()->json($products);
    }
    public function destroy($id)
    {
        $products = Products::find($id);
        if (! $products) {
            return response()
            ->json(['error' => 'Error: User not found']);
        }
        $products->delete();
        return response()
            ->json(['message' => 'Success: You have deleted the user']);
    }

}
