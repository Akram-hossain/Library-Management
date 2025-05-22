<?php

namespace App\Http\Controllers;

use App\Models\Borrow;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BorrowController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Borrows/Index', [
            'borrows' => Borrow::with(['book', 'user'])->where('user_id', Auth::id())->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Borrows/Create', [
            'books' => Book::where('quantity', '>', 0)->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'book_id' => 'required|exists:books,id',
        ]);

        $book = Book::find($request->book_id);
        if ($book->quantity > 0) {
            Borrow::create([
                'user_id' => Auth::id(),
                'book_id' => $request->book_id,
                'borrowed_at' => now(),
            ]);
            $book->decrement('quantity');
        }

        return redirect()->route('borrows.index');
    }

    public function return(Borrow $borrow)
    {
        $borrow->update(['returned_at' => now()]);
        $borrow->book->increment('quantity');
        return redirect()->route('borrows.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
