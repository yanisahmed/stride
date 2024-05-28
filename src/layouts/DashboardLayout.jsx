import { Link, Outlet } from 'react-router-dom';
const DashboardLayout = () => {
    return (
        <>
            <div className="flex h-screen">
                <aside className="w-64 bg-gray-800 text-white flex flex-col">
                    <div className="p-4 text-2xl font-semibold">
                        Admin
                    </div>
                    <nav className="flex-grow">
                        <ul>
                            <li className="p-4 hover:bg-gray-700">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="p-4 hover:bg-gray-700">
                                <Link to="/dashboard/recepes">Recepes</Link>
                            </li>
                            <li className="p-4 hover:bg-gray-700">
                                <a href="#">Users</a>
                            </li>
                            <li className="p-4 hover:bg-gray-700">
                                <a href="#">Settings</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="p-4">
                        <button className="w-full py-2 bg-red-500 hover:bg-red-700 text-white rounded">Logout</button>
                    </div>
                </aside>

                <div className="flex flex-col flex-grow">
                    <header className="bg-white shadow p-4">
                        <div className="container mx-auto flex justify-between items-center">
                            <h1 className="text-xl font-semibold">Dashboard</h1>
                            <div>
                                <input type="text" placeholder="Search..." className="p-2 border border-gray-300 rounded" />
                            </div>
                        </div>
                    </header>

                    <main className="flex-grow p-6">
                        <div className="container mx-auto">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>

        </>
    );
};

export default DashboardLayout;