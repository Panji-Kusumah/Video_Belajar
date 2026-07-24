import { Navigate, Outlet } from 'react-router-dom';
const useAuth = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return !!token && !!user;
};
const ProtectedRoute = () => {
    const isAuthenticated = useAuth();
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
};

export default ProtectedRoute;