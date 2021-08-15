<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/clear-cache', function() {
    $configCache = Artisan::call('config:cache');
    $clearCache = Artisan::call('cache:clear');
    return [
        'message' => 'Clear cache success!',
        'configCache' => $configCache,
        'clearCache' => $clearCache
    ];
});

Route::resource('products', ProductController::class);
