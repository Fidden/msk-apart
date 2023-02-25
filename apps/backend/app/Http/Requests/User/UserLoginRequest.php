<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UserLoginRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'login' => 'required|string|max:255',
            'password' => 'required|string|max:255'
        ];
    }
}
