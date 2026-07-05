import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import NotFound from "./pages/public/NotFound"; // ← TAMBAHKAN INI
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Users from "./pages/admin/Users";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="product" element={<Products />} />
                    <Route path="users" element={<Users />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;