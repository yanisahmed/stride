import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import MainLayout from '../layouts/MainLayout';
import Contact from '../pages/Contact';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import Receipes from '../pages/dashboard/recepes/Recepes';
import PrivateRoutes from './PrivateRoutes';
const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '',
                element: (
                    <PrivateRoutes>
                        <Dashboard />
                    </PrivateRoutes>
                )
            },
            {
                path: 'recepes',
                element: (
                    <PrivateRoutes>
                        <Receipes />
                    </PrivateRoutes>
                )
            },
        ]
    }

])

export default routes;