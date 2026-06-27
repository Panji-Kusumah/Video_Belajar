import { useState } from "react";
import Toast from "../../components/ui/Toast";

const Products = () => {
    const [toast, setToast] = useState({ show: false, message: "", type: "success" });
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Senior Implementation Strategist",
            subtitle: "Advenio quaerat autus. Spoliatio ater calamitas utique tabgo considero cinis.",
            price: 17700,
            mentor: "Tracey Wisozk",
            role: "Direct Directives Officer",
            description: "Deskripsi lengkap produk...",
        },
        {
            id: 2,
            title: "Senior Functionality Assistant",
            subtitle: "Substantia talis illum neque. Autus tego ceno desino vorago cicuta viriliter dolor vereor.",
            price: 15000,
            mentor: "Alice Govette",
            role: "Software Engineer",
            description: "Deskripsi lengkap produk...",
        },
    ]);
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        price: "",
        mentor: "",
        role: "",
        description: "",
    });
    const [editingId, setEditingId] = useState(null);
    const showToast = (message, type = "success") => {
        setToast({ show: true, message, type });
    };
    const hideToast = () => {
        setToast({ ...toast, show: false });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleAddProduct = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.price) {
            showToast("Judul dan Harga wajib diisi!", "error");
            return;
        }
        const newProduct = {
            id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
            title: formData.title,
            subtitle: formData.subtitle,
            price: Number(formData.price),
            mentor: formData.mentor,
            role: formData.role,
            description: formData.description,
        };
        setProducts([...products, newProduct]);
        setFormData({ title: "", subtitle: "", price: "", mentor: "", role: "", description: "" });
        showToast("Course berhasil ditambahkan!", "success");
    };
    const handleEdit = (product) => {
        setFormData({
            title: product.title,
            subtitle: product.subtitle,
            price: product.price.toString(),
            mentor: product.mentor,
            role: product.role,
            description: product.description,
        });
        setEditingId(product.id);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedProducts = products.map((product) =>
            product.id === editingId
                ? { ...product, ...formData, price: Number(formData.price) }
                : product
        );
        setProducts(updatedProducts);
        setFormData({ title: "", subtitle: "", price: "", mentor: "", role: "", description: "" });
        setEditingId(null);
        showToast("Course berhasil diupdate!", "success");
    };
    const handleDelete = (id) => {
        // Konfirmasi custom bisa ditambahkan nanti, untuk sekarang kita langsung hapus
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
        showToast("Course berhasil dihapus!", "success");
    };
    const handleCancel = () => {
        setFormData({ title: "", subtitle: "", price: "", mentor: "", role: "", description: "" });
        setEditingId(null);
    };
    const formatRupiah = (angka) => {
        return "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    return (
        <div>
            <Toast 
                show={toast.show} 
                message={toast.message} 
                type={toast.type} 
                onClose={hideToast} 
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Manajemen Produk</h1>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                    {editingId ? "Edit Produk" : "Tambah Produk Baru"}
                </h2>
                <form onSubmit={editingId ? handleUpdate : handleAddProduct}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Judul Produk <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Contoh: Belajar React JS"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Sub-Judul</label>
                            <input
                                type="text"
                                name="subtitle"
                                value={formData.subtitle}
                                onChange={handleChange}
                                placeholder="Contoh: Pemula hingga Mahir"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Harga (IDR) <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="0"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Nama Mentor</label>
                            <input
                                type="text"
                                name="mentor"
                                value={formData.mentor}
                                onChange={handleChange}
                                placeholder="Nama Mentor"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Role Mentor</label>
                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                placeholder="Contoh: Software Engineer"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Deskripsi lengkap produk..."
                                rows="3"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-6 justify-end">
                        {editingId && (
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Batal
                            </button>
                        )}
                        <button
                            type="submit"
                            className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                        >
                            {editingId ? "Update Produk" : "Tambah Produk"}
                        </button>
                    </div>
                </form>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Daftar Produk ({products.length})</h2>
                
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">NO</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">PRODUK</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">HARGA</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">MENTOR</th>
                                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">AKSI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-4 px-4 text-sm text-gray-600">{index + 1}</td>
                                    <td className="py-4 px-4">
                                        <h3 className="font-semibold text-gray-800">{product.title}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{product.subtitle}</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="text-primary font-semibold">{formatRupiah(product.price)}</span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div>
                                            <p className="font-medium text-gray-800">{product.mentor}</p>
                                            <p className="text-sm text-gray-500">{product.role}</p>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex gap-2 justify-center">
                                            <button
                                                onClick={() => handleEdit(product)}
                                                className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(product.id)}
                                                className="px-3 py-1 text-xs bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors"
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {products.length === 0 && (
                        <p className="text-center text-gray-400 py-8">Belum ada produk.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;