<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\BorrowController;
use Inertia\Inertia;
use App\Models\Book;
use App\Models\Author;
use App\Models\Borrow; 


Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return inertia('Dashboard', [
            'totalBooks' => Book::count(),
            'totalAuthors' => Author::count(),
            'totalBorrows' => Borrow::where('user_id', auth()->id())
                ->whereNull('returned_at')
                ->count(),
        ]);
    })->name('dashboard');

    Route::resource('authors', AuthorController::class);
    Route::resource('books', BookController::class);
    Route::resource('borrows', BorrowController::class)->only(['index', 'create', 'store']);
    Route::post('borrows/{borrow}/return', [BorrowController::class, 'return'])->name('borrows.return');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';