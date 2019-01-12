<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Brands extends Eloquent
{
    //
    protected $connection = 'mongodb';
    
    protected $collection = 'orders';

    protected $fillable = [
        'name',
    ];

}
