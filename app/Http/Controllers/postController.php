<?php

namespace App\Http\Controllers;

use App\Models\post;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class postController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::where('status', 2)->latest('id')->get();

        return $posts->toJson();
    }

    public function postsImages(Request $request){
        $data = DB::table('posts')
        ->crossjoin('images')
        ->select('posts.id as PostID','images.id as ImageID','-Municipio.nombre as Municipio','trabajador.nombre','apellido','trabajador.nombre as trabajador','telefono','email')
        ->get()->toJson();
        return $data;
        }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function getCategories(){
        $categories = Category::all();
        return $categories;
    }

    public function getAuthors(){
        $authors = User::all();
        return $authors;
    }
    
    public function getPostAuthor(Request $request){
        $author = DB::table('users')->where('id', $request->idAuthor)->get();
        return $author;
    }

    public function postAC(Request $request){
        $data = DB::table('posts')
        ->join('users', 'posts.user_id', '=', 'users.id')
        ->join('categories', 'posts.category_id', '=', 'categories.id')
        ->select('posts.id as id', 'posts.name as name', 'users.name as userName', 'categories.name as categoryName', 'posts.status as status')
        ->latest('id')
        ->get();
 
        return $data->toJson();
    }

    public function updateStatus(Request $request){
        DB::table('posts')
                ->where('id', $request->id)
                ->update(['status'=> $request->status]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $post = new post;
        $post->name = $request->name; 
        $post->slug = $request->slug;
        $post->extract = $request->extract; 
        $post->body = $request->body;
        $post->status = $request->status;
        $post->user_id = $request->user_id;
        $post->category_id = $request->category_id;
        $post->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $selectedPost = DB::table('posts')->where('id', $request->idPost)->get();
        return $selectedPost->toJson();
        /*$selectedPost = DB::table('posts')->where('id', 3)->get();
        return $selectedPost;*/
    }


    public function carouselPosts()
    {
        $carouselPosts = DB::table('posts')->where([
            ['id', 36],
            ['id', 37],
            ['id', 38]
        ])->get();
        return $carouselPosts;
        /*$selectedPost = DB::table('posts')->where('id', 3)->get();
        return $selectedPost;*/
    }

    public function getSearch(Request $request)
    {
        $search = DB::table('posts')->where('name', 'LIKE', '%' . $request->busqueda . '%')->get();
        return $search;
        /*$selectedPost = DB::table('posts')->where('id', 3)->get();
        return $selectedPost;*/
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */


    public function edit($id)
    {
        //
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        DB::table('posts')
                ->where('id', $request->id)
                ->update(['name'=> $request->name,
                          'slug'=> $request->slug,
                          'extract'=> $request->extract,
                          'body'=> $request->body,
                          'status'=> $request->status,
                          'user_id'=> $request->user_id,
                          'category_id'=> $request->category_id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $posts = DB::table('posts')->where('id', $request->id)->delete();
    }
}
