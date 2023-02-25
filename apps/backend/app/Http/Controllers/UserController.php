<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\UserLoginRequest;
use App\Http\Requests\User\UserRegisterRequest;
use App\Models\User;
use App\Notifications\EmailVerificationNotification;
use App\Services\ResponseService;
use App\Services\UserTokenService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;

class UserController
{
    public function register(UserRegisterRequest $request)
    {
        $user = User::create($request->validated());
        if ($user) {
            $user->notify(new EmailVerificationNotification($user));

            return ResponseService::success([
                'token' => UserTokenService::generate($user),
            ]);
        }

        return ResponseService::error('Something went wrong.', 500);
    }

    public function login(UserLoginRequest $request)
    {
        if (auth()->attempt($request->validated())) {
            if (!auth()->user()->hasVerifiedEmail()) {
                return ResponseService::error('Please verify your email.', 403, [
                    'token' => UserTokenService::generate(),
                ]);
            }

            return ResponseService::success([
                'token' => UserTokenService::generate(),
            ]);
        }

        return ResponseService::error('Неверный логин или пароль', 401);
    }

    public function logout(): Response|Application|ResponseFactory
    {
        auth()->user()->forceFill([
            'api_token' => null,
        ])->save();

        return response(null, 200);
    }
}
