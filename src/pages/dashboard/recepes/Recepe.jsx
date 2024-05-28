
import React from 'react';

export default function Recepe({ recepe }) {
    const { name, country, ratings, description, image_url } = recepe;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={`../recepes/${image_url}`} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{country}</div>
                    </div>
                </div>
            </td>
            <td>
                {description}
            </td>
            <td>{ratings}</td>
            <th>
                <button className="btn btn-info">View</button>
                <button className="btn btn-warning">Edit</button>
                <button className="btn btn-error">Delete</button>
            </th>
        </tr>
    )
}
