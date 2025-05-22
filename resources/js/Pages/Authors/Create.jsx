import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, errors } = useForm({
        name: '',
        bio: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('authors.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Author</h2>}
        >
            <Head title="Create Author" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={submit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    />
                                    {errors.name && <div className="text-red-600">{errors.name}</div>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Bio</label>
                                    <textarea
                                        value={data.bio}
                                        onChange={(e) => setData('bio', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    ></textarea>
                                    {errors.bio && <div className="text-red-600">{errors.bio}</div>}
                                </div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}