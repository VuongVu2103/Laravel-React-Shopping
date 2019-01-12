<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use App\Repositories\OrderRepository;

class OrderController extends Controller
{
    protected $request;

    protected $order;

    public function __construct(OrderRepository $order, Request $request)
    {
        $this->order = $order;

        $this->request = $request;

        if ($this->request->has('include')) 
        {
            $this->manager->parseIncludes($this->request->get('include'));
        }
    }

    public function store(Request $request)
    {
        $input = $this->request->all();

        $result = $this->order->store($input);

        if (!$result)
        {
            return apiFail();
        }

        return apiSuccess();
    }
}
