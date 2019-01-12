<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Products extends Eloquent
{
    //
    protected $connection = 'mongodb';
    
    protected $collection = 'products';

    protected $fillable = [
        'product_id','name','price','quantity','info'
    ];

}
