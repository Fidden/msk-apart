<?php

namespace App\Api;

use GuzzleHttp\Exception\GuzzleException;
use Psr\Http\Message\StreamInterface;

class Stock
{
    /**
     * @api_url https://www.intrumnet.com/api/#stock-search
     * @param array $params
     * @return mixed
     * @throws GuzzleException
     */
    public function filter(array $params = []): mixed
    {
        return Request::make('/stock/filter', $params);
    }

    /**
     * @api_url https://www.intrumnet.com/api/#stock-fields
     * @return mixed
     * @throws GuzzleException
     */
    public function fields(): mixed
    {
        return Request::make('/stock/fields');
    }

    /**
     * @api_url https://www.intrumnet.com/api/#stock-types
     * @return mixed
     * @throws GuzzleException
     */
    public function type(): mixed
    {
        return Request::make('/stock/types');
    }

    /**
     * @api_url https://www.intrumnet.com/api/#stock-group
     * @return mixed
     * @throws GuzzleException
     */
    public function groups(): mixed
    {
        return Request::make('/stock/groups');
    }

    /**
     * @api_url https://www.intrumnet.com/api/#stock-category
     * @return mixed
     * @throws GuzzleException
     */
    public function category(): mixed
    {
        return Request::make('/stock/category');
    }
}
