import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../components/Recipe';
import './Slider.css';

export default function Home() {
    const data = useLoaderData();
    console.log(data);
    return (
        <>
            <section className="container mx-auto py-8">
                <div className="w-5/6 mx-auto">
                    <h1 className="text-3xl font-bold mb-8 text-center">Best Recipes</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.map((recipe, index) => <Recipe key={recipe.id} recipe={recipe} />)}
                    </div>
                </div>
            </section>
        </>
    )
}
