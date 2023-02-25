<?php

namespace App\Services;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;

class ResponseService
{
    public static function error(string $message, int $code, mixed $payload = []): Response|Application|ResponseFactory
    {
        return response([
            'error' => [
                'code' => $code,
                'message' => $message,
                'payload' => $payload,
            ]
        ], $code);
    }

    public static function success(mixed $data, int $code = 200): Response|Application|ResponseFactory
    {
        return response([
            'data' => $data,
        ], $code);
    }

    public static function created(): Response|Application|ResponseFactory
    {
        return response(null, 201);
    }
}
