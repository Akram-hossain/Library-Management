import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, books }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Books</h2>}
        >
            <Head title="Books" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <Link href={route('books.create')} className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
                                Add Book
                            </Link>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left">Title</th>
                                        <th className="px-6 py-3 text-left">Author</th>
                                        <th className="px-6 py-3 text-left">ISBN</th>
                                        <th className="px-6 py-3 text-left">Quantity</th>
                                        <th className="px-6 py-3 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {books.map(book => (
                                        <tr key={book.id}>
                                            <td className="px-6 py-4">{book.title}</td>
                                            <td className="px-6 py-4">{book.author.name}</td>
                                            <td className="px-6 py-4">{book.isbn}</td>
                                            <td className="px-6 py-4">{book.quantity}</td>
                                            <td className="px-6 py-4">
                                                <Link href={route('books.edit', book.id)} className="text-blue-600 mr-2">Edit</Link>
                                                <Link href={route('books.destroy', book.id)} method="delete" as="button" className="text-red-600">Delete</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}