import React from 'react';

import { ModalProvider, useModal } from '../../../AuthProvider/ModalContext';
import Modal from '../../../components/Modal';

export default function Recepes() {
    return (
        <ModalProvider>
            <RecepesContent />
        </ModalProvider>
    );
}

function RecepesContent() {
    const { isOpen, openModal } = useModal();
    return (
        <div className="container mx-auto p-6">
            {isOpen && <Modal />}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Recipe List</h1>
                <a href="#" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700" onClick={openModal}>Add Recipe</a>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <input type="checkbox" />
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Recipe Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Rating
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <input type="checkbox" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">Spaghetti Carbonara</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">A classNameic Italian pasta dish.</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">4.5</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <a href="#" className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 mr-3">View</a>
                                <a href="#" className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 mr-3">Edit</a>
                                <a href="#" className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
