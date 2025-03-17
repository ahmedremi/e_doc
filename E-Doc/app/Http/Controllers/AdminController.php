<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Auth;


class AdminController extends Controller
{

    public function getUserCounts(Request $request)
    {

        $user = $request->user(); // Get authenticated user


        if (!$user) {
            return response()->json(['message' => 'Unauthorized: No user found'], 401);
        }

        if (!$user->role || $user->role->name !== 'admin') {
            return response()->json(['message' => 'Unauthorized: You are not admin'], 403);
        }

        return response()->json([
            'students' => User::whereHas('role', function ($query) {
                $query->where('name', 'student');
            })->count(),
            'teachers' => User::whereHas('role', function ($query) {
                $query->where('name', 'teacher');
            })->count(),
            'employees' => User::whereHas('role', function ($query) {
                $query->where('name', 'employee');
            })->count(),
        ]);
    }


    public function listUsers()
    {
        return response()->json(User::with('role')->get());
    }

    public function listUsersByRole($role)
    {
        $users = User::whereHas('role', function ($query) use ($role) {
            $query->where('name', $role);
        })->get();

        return response()->json($users);
    }
}
