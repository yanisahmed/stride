import React from 'react';

export default function Dashboard() {

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Total Recipes</h2>
                    <p className="text-3xl font-bold text-gray-900">150</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Number of Users</h2>
                    <p className="text-3xl font-bold text-gray-900">350</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Other Information</h2>
                    <p className="text-3xl font-bold text-gray-900">42</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
                <ul className="divide-y divide-gray-200">
                    <li className="py-2">User John added a new recipe: Spaghetti Carbonara</li>
                    <li className="py-2">User Alice updated the recipe: Chicken Curry</li>
                    <li className="py-2">User Bob commented on the recipe: Apple Pie</li>
                </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-600">Most Popular Recipe</h3>
                        <p className="text-gray-700">Spaghetti Carbonara</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-600">Highest Rated Recipe</h3>
                        <p className="text-gray-700">Beef Wellington</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
