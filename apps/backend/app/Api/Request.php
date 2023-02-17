<?php

namespace App\Api;


use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class Request
{
    private static string $baseUrl = 'https://mskr.intrumnet.com/sharedapi';
    private static string $apiKey = '3845ec623fcb437e3f9b941dfea02761';

    /**
     * Make request to intrum api
     * @param string $url
     * @param array $params
     * @return mixed
     * @throws GuzzleException
     */
    public static function make(string $url, array $params = []): mixed
    {
        $client = new Client();

        $res = $client->post(self::$baseUrl . $url, [
            'form_params' => [
                'apikey' => self::$apiKey,
                'params' => $params
            ]
        ]);

        return json_decode($res->getBody()->getContents(), true);
    }
}
