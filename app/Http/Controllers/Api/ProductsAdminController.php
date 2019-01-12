<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Products;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;


class ProductsAdminController extends Controller
{
    private $products;

    public function index()
    {
        $products = Products::all();
        return response()
            ->json($products);
    }
    public function store(Request $request)
    {
        Products::create($request->all());
        return response()
            ->json(['message' => 'Success: You have added a product']);
    }
    public function edit($id)
    {
        $products = Products::find($id);
        if (! $products) {
            return response()
            ->json(['error' => 'The product is not exists']);
        }
        return response()
            ->json($products);
    }
    public function update(Request $request, $id)
    {
        $products = Products::find($id);
        if (! $products) {
            return response()
            ->json(['error' => 'Error: Product not found']);
        }
        $products->update($request->all());
        return response()
            ->json(['message' => 'Success: You have updated the product']);
    }

    public function destroy($id)
    {
        $products = Products::find($id);
        if (! $products) {
            return response()
            ->json(['error' => 'Error: User not found']);
        }
        $user->delete();
        return response()
            ->json(['message' => 'Success: You have deleted the user']);
    }
}
