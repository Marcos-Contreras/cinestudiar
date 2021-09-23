<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    //RELACIÓN MUCHOS A MUCHOS
    public function posts(){
        return $this->belongsToMany(post::class);
    }
}
