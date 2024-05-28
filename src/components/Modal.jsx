import React from 'react';
import { useModal } from '../AuthProvider/ModalContext';

export default function Modal() {
    const { isOpen, closeModal } = useModal();

    if (!isOpen) return null;
    return (
        <div id="addRecipeModal" className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">Add New Recipe</h3>
                                <div className="mt-2">
                                    <form>
                                        <div className="mb-4">
                                            <label htmlFor="recipeName" className="block text-sm font-medium text-gray-700">Recipe Name</label>
                                            <input type="text" id="recipeName" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="recipeImage" className="block text-sm font-medium text-gray-700">Recipe Image</label>
                                            <input type="file" id="recipeImage" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                                            <input type="text" id="country" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                                            <input type="number" id="rating" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" min="1" max="5" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                            <textarea id="description" rows="4" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" id="saveButton">Save</button>
                        <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" id="closeModalButton" onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
