# Library Management System
A simple web application built with Laravel, ReactJS, MySQL, and Tailwind CSS to manage a library's books, authors, and borrowing records. Users can perform CRUD operations on books and authors, borrow/return books, and access the system only after logging in.
Features

User Management: Register, login, logout, and profile editing.
Author Management: Create, read, update, and delete authors.
Book Management: Create, read, update, and delete books with title, author, ISBN, and quantity.
Borrowing System: Borrow and return books, with quantity tracking.
Responsive UI: Styled with Tailwind CSS for a clean, modern look.
Secure Access: Authentication ensures only logged-in users can access the system.

Tech Stack

Backend: Laravel (PHP)
Frontend: ReactJS with Inertia.js
Database: MySQL
Styling: Tailwind CSS
Tools: Composer, Node.js, npm

Prerequisites

PHP >= 8.1
Composer
Node.js >= 16
MySQL
Laravel CLI (optional, for ease of use)

Setup Instructions

Clone the Repository (if applicable, or create the project folder with the provided code):
git clone <repository-url>
cd library-management


Install PHP Dependencies:
composer install


Install JavaScript Dependencies:
npm install


Configure Environment:

Copy .env.example to .env:cp .env.example .env


Update .env with your MySQL database credentials:DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=library_management
DB_USERNAME=your_username
DB_PASSWORD=your_password


Generate an application key:php artisan key:generate




Set Up Database:

Create a MySQL database named library_management.
Run migrations to create tables:php artisan migrate




Build Frontend:
npm run build


Run the Application:
php artisan serve


Access the app at http://localhost:8000.



Usage

Register/Login: Create an account or log in to access the system.
Dashboard: View the welcome page after login.
Authors: Add, edit, or delete authors (name, bio).
Books: Add, edit, or delete books (title, author, ISBN, quantity).
My Borrows: Borrow available books or return borrowed ones.
Logout: Use the profile dropdown to log out.

Project Structure

Models: Author, Book, Borrow for database interactions.
Controllers: Handle CRUD operations (AuthorController, BookController, BorrowController).
Frontend: React components in resources/js/Pages for UI.
Routes: Defined in routes/web.php with authentication middleware.
Styling: Tailwind CSS for responsive design.

Notes

Ensure MySQL is running before starting the application.
The system prevents borrowing if a book's quantity is zero.
Only authenticated users can access the dashboard, authors, books, and borrowing features.

For any issues, contact the developer or refer to Laravel/React documentation.

# Video URL
https://www.loom.com/share/076e7a1b6e394b8597357b3170eb8c22?sid=9238402f-8e44-4ab3-8b07-b985df22b955