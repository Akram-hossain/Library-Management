import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ auth, books }) {
    const { data, setData, post, errors } = useForm({
        book_id: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('borrows.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Borrow Book</h2>}
        >
            <Head title="Borrow Book" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={submit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Book</label>
                                    <select
                                        value={data.book_id}
                                        onChange={(e) => setData('book_id', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    >
                                        <option value="">Select Book</option>
                                        {books.map(book => (
                                            <option key={book.id} value={book.id}>{book.title}</option>
                                        ))}
                                    </select>
                                    {errors.book_id && <div className="text-red-600">{errors.book_id}</div>}
                                </div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                    Borrow
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}