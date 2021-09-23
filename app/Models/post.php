<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class post extends Model
{
    use HasFactory;


    protected $fillable = [
        'name', 'slug', 'extract', 'body', 'status', 'user_id', 'category_id',
    ];


    //RELACIÓN UNO A MUCHOS INVERSA
    public function user(){
        return $this->belongsTo(User::class);
    }
    
    public function category(){
        return $this->belongsTo(Category::class);
    }

    //RELACIÓN MUCHOS A MUCHOS
    public function tags(){
        return $this->belongsToMany(Tag::class);
    }

    //RELACIÓN UNO A UNO POLIMÓRIFCA
    public function image(){
        return $this->morphOne(Image::class, 'imageable');
    }
}
