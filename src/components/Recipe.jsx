import React from 'react';
export default function Recipe({ recipe }) {
    const { name, country, ratings, description, image_url } = recipe;
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={`../../public/recepes/Sushi.jpg`} />
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-600 mb-2">Country: {country}</p>
                <p className="text-yellow-500 mb-2">Rating: {ratings}</p>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    )
}
