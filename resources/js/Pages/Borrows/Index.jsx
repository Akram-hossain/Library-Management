import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, borrows }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">My Borrows</h2>}
        >
            <Head title="My Borrows" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <Link href={route('borrows.create')} className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
                                Borrow Book
                            </Link>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left">Book</th>
                                        <th className="px-6 py-3 text-left">Borrowed At</th>
                                        <th className="px-6 py-3 text-left">Returned At</th>
                                        <th className="px-6 py-3 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {borrows.map(borrow => (
                                        <tr key={borrow.id}>
                                            <td className="px-6 py-4">{borrow.book.title}</td>
                                            <td className="px-6 py-4">{new Date(borrow.borrowed_at).toLocaleDateString()}</td>
                                            <td className="px-6 py-4">{borrow.returned_at ? new Date(borrow.returned_at).toLocaleDateString() : '-'}</td>
                                            <td className="px-6 py-4">
                                                {!borrow.returned_at && (
                                                    <Link
                                                        href={route('borrows.return', borrow.id)}
                                                        method="post"
                                                        as="button"
                                                        className="text-green-600"
                                                    >
                                                        Return
                                                    </Link>
                                                )}
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