<?php

use Illuminate\Support\Facades\Route;

Route::inertia("/", "welcome")->name("home");

Route::get("/dashboard", function () {
    return inertia::render("dashboard");
});

Route::get("/weather", function () {
    return inertia::render("weather");
});

Route::get("/information", function () {
    return inertia::render("information");
});

Route::get("/contacts", function () {
    return inertia::render("contacts");
});
