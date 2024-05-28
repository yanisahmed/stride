import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import LoadingSpinner from '../components/LoadingSpinner';

export default function PrivateRoutes({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) return <LoadingSpinner />
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace />
}

