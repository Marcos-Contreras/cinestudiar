<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\postController;
use App\Http\Controllers\UserController;

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

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/


Route::get('/getPosts', [postController::class, 'index']);
Route::get('/getImages', [postController::class, 'index']);
Route::post('/addPost', [postController::class, 'store']);
Route::get('/getPost', [postController::class, 'show']);
Route::get('/getCategories', [postController::class, 'getCategories']);
Route::get('/getAuthors', [postController::class, 'getAuthors']);
/*Route::get('/getAuthor', [postController::class, 'getPostAuthor']);*/
Route::get('/getAuthor', [postController::class, 'getPostAuthor']);
Route::get('/postAC', [postController::class, 'postAC']);
Route::get('/deletePost', [postController::class, 'destroy']);
Route::post('/updateStatus', [postController::class, 'updateStatus']);
Route::get('/getSearch', [postController::class, 'getSearch']);
Route::post('/updatePost', [postController::class, 'update']);
Route::get('/carouselPosts', [postController::class, 'carouselPosts']);
Route::get('/login', [UserController::class, 'logear']);