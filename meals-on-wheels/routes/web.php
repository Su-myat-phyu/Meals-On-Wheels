<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home'); // "Home" matches the React component name
});

