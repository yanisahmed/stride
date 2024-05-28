import { Link, Outlet } from 'react-router-dom';
const DashboardLayout = () => {
    return (
        <>
            <div class="flex h-screen">
                <aside class="w-64 bg-gray-800 text-white flex flex-col">
                    <div class="p-4 text-2xl font-semibold">
                        Admin
                    </div>
                    <nav class="flex-grow">
                        <ul>
                            <li class="p-4 hover:bg-gray-700">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li class="p-4 hover:bg-gray-700">
                                <Link to="/dashboard/recepes">Recepes</Link>
                            </li>
                            <li class="p-4 hover:bg-gray-700">
                                <a href="#">Users</a>
                            </li>
                            <li class="p-4 hover:bg-gray-700">
                                <a href="#">Settings</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="p-4">
                        <button class="w-full py-2 bg-red-500 hover:bg-red-700 text-white rounded">Logout</button>
                    </div>
                </aside>

                <div class="flex flex-col flex-grow">
                    <header class="bg-white shadow p-4">
                        <div class="container mx-auto flex justify-between items-center">
                            <h1 class="text-xl font-semibold">Dashboard</h1>
                            <div>
                                <input type="text" placeholder="Search..." class="p-2 border border-gray-300 rounded" />
                            </div>
                        </div>
                    </header>

                    <main class="flex-grow p-6">
                        <div class="container mx-auto">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>

        </>
    );
};

export default DashboardLayout;