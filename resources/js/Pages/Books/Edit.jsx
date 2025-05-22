import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Edit({ auth, book, authors }) {
    const { data, setData, put, errors } = useForm({
        title: book.title,
        author_id: book.author_id,
        isbn: book.isbn,
        quantity: book.quantity,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('books.update', book.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Book</h2>}
        >
            <Head title="Edit Book" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={submit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Title</label>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    />
                                    {errors.title && <div className="text-red-600">{errors.title}</div>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Author</label>
                                    <select
                                        value={data.author_id}
                                        onChange={(e) => setData('author_id', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    >
                                        <option value="">Select Author</option>
                                        {authors.map(author => (
                                            <option key={author.id} value={author.id}>{author.name}</option>
                                        ))}
                                    </select>
                                    {errors.author_id && <div className="text-red-600">{errors.author_id}</div>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">ISBN</label>
                                    <input
                                        type="text"
                                        value={data.isbn}
                                        onChange={(e) => setData('isbn', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    />
                                    {errors.isbn && <div className="text-red-600">{errors.isbn}</div>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Quantity</label>
                                    <input
                                        type="number"
                                        value={data.quantity}
                                        onChange={(e) => setData('quantity', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    />
                                    {errors.quantity && <div className="text-red-600">{errors.quantity}</div>}
                                </div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}