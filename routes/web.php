<?php

use App\Http\Controllers\postController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function(){
    return view('posts.index');
});

Route::get('/Index', function(){
    return view('posts/index');
});

Route::get('/AboutUs', function(){
    return view('posts/index');
});

Route::get('/Home', function(){
    return view('posts/index');
});

Route::get('/ShowPosts', function(){
    return view('posts/index');
});

Route::get('/PostForm', function(){
    return view('posts/index');
});


Route::get('/Post/{id}', function(){
    return view('posts/index');
});

Route::get('/EditPost', function(){
    return view('posts/index');
});

Route::get('/Search/{busqueda}', function(){
    return view('posts/index');
});

Route::get('/ChangePost/{id}', function(){
    return view('posts/index');
});

Route::get('/Login', function(){
    return view('posts/index');
});


/*Route::get('/', function () {
    return view('welcome');
});*/

/*Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');*/

/*ROUTES USERS*/
Route::get('/getUsers', [UserController::class, 'index']);
Route::get('/getUser', [UserController::class, 'show']);
Route::post('/addUser', [UserController::class, 'store']);
Route::post('/updateUser', [UserController::class, 'update']);
Route::get('/deleteUser', [UserController::class, 'destroy']);
Route::get('/userToken', [UserController::class, 'showToken']);
/*ROUTES POST*/
