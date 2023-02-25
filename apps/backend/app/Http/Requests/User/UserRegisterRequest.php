<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UserRegisterRequest extends FormRequest
{
    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'patronymic' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string|max:255',
            'password' => 'required|string|max:255'
        ];
    }
}
