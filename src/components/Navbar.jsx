import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = async () => {
        await logout();
    }
    return (
        <div className="flex justify-center bg-[#4E9F3D]">
            < div className="navbar w-3/4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to={`/`} className="btn btn-ghost text-xl">Stride</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={`/`}>Home</Link></li>
                        <li>
                            <details>
                                <summary>Category</summary>
                                <ul className="p-2">
                                    <li><a>Shirts</a></li>
                                    <li><a>Pants</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        {user && (
                            <li>
                                <Link to={"/dashboard"}>Dashboard</Link>
                            </li>
                        )}
                        {user ? <li><button onClick={handleLogout}>Logout</button></li> : <li><Link to={`/login`}>Login</Link></li>}
                        {!user && (<li><Link to={`/register`}>Regster</Link></li>)}
                    </ul>
                </div>
            </div >
        </div>
    )
}
