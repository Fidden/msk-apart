<?php

namespace App\Api;

class Intrum
{
    private Stock $stock;

    public function __construct()
    {
        $this->stock = new Stock();
    }

    public function getStock(): Stock
    {
        return $this->stock;
    }
}
