import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
    const location = useLocation();
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (!token || !user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;