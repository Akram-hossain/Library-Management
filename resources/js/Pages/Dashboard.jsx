import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, totalBooks, totalAuthors, totalBorrows }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-bold text-2xl text-gray-800 leading-tight">
                    Library Management Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h3 className="text-lg font-medium text-gray-700">
                            Welcome, {auth.user.name}!
                        </h3>
                        <p className="text-sm text-gray-500">
                            Manage your library with ease. View key statistics below.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Total Books Card */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h4 className="text-sm font-semibold text-gray-600">Total Books</h4>
                            <p className="text-3xl font-bold text-blue-600 mt-2">{totalBooks}</p>
                            <p className="text-xs text-gray-500 mt-1">Books available in the library</p>
                        </div>

                        {/* Total Authors Card */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h4 className="text-sm font-semibold text-gray-600">Total Authors</h4>
                            <p className="text-3xl font-bold text-green-600 mt-2">{totalAuthors}</p>
                            <p className="text-xs text-gray-500 mt-1">Authors registered in the system</p>
                        </div>

                        {/* Total Borrowed Books Card */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h4 className="text-sm font-semibold text-gray-600">Books Borrowed</h4>
                            <p className="text-3xl font-bold text-purple-600 mt-2">{totalBorrows}</p>
                            <p className="text-xs text-gray-500 mt-1">Books you currently have borrowed</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}