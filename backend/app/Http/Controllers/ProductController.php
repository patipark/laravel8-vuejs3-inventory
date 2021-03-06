<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // GET|HEAD  | api/products                | products.index
    public function index()
    {
        //read all products
        return Product::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // POST      | api/products                | products.store
    public function store(Request $request)
    {
        // เรียก user
        $user = auth()->user();

        if(!$user->tokenCan('1')) //ถ้า role = 1 (admin)
        {
            return response([
                'message' => 'Permission denied for create!'
            ], 401);
        }

        $request->validate([
            'name' => 'required|min:5',
            'slug' => 'required',
            'price' => 'required',
        ]);

        return Product::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    //GET|HEAD  | api/products/{product}      | products.show
    public function show($id)
    {
        return Product::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    // PUT|PATCH | api/products/{product}      | products.update
    public function update(Request $request, $id)
    {
        $user = auth()->user();
        if(!$user->tokenCan('1'))
        {
            return response([
                'message' => 'Permission denied for update!'
            ], 401);
        }
        $product = Product::find($id);
        $product->update($request->all());
        return $product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    // DELETE    | api/products/{product}      | products.destroy
    public function destroy($id)
    {
        $user = auth()->user();
        if(!$user->tokenCan('1'))
        {
            return response([
                'message' => 'Permission denied for update!'
            ], 401);
        }
        return Product::destroy($id);
    }
}
