<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    //RELACIÓN UNO A MUCHOS
    public function posts(){
        return $this->hasMany(post::class);
    }
}
