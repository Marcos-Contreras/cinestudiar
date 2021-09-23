<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\post;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $posts = post::factory(15)->create();

        foreach($posts as $post){
            Image::factory(1)->create([
                'imageable_id' => $post->id,
                'imageable_type' => post::class
            ]);
            $post->tags()->attach([
                rand(1, 4),     //Selecciona un id de tag al azar
                rand(5, 8)      //Selecciona un id de tag al azar
            ]);
        }
    }
}
