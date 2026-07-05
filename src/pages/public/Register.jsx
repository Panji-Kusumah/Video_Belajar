import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState({ text: '', type: '' });
    const navigate = useNavigate();
    const register = useAuthStore((state) => state.register);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage({ text: '', type: '' });

        if (formData.password !== formData.confirmPassword) {
            setMessage({ text: 'Konfirmasi kata sandi tidak cocok!', type: 'error' });
            return;
        }

        const result = register(formData);

        if (result.success) {
            // PERBAIKAN: Arahkan ke halaman login, bukan ke home ('/')
            navigate('/login');
        } else {
            setMessage({ text: result.message, type: 'error' });
        }
    };

    return (
        <div className="min-h-screen bg-bg-cream flex items-center justify-center p-6">
            <div className="w-full max-w-130">
                <div className="text-center mb-8">
                    <Link to="/" className="text-2xl font-black inline-block">
                        <span className="text-secondary">video</span>
                        <span className="text-accent">belajar</span>
                    </Link>
                </div>
                <div className="bg-white rounded-2xl p-10 shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-black text-gray-900 mb-2">Pendaftaran Akun</h1>
                        <p className="text-sm text-gray-600">Yuk, daftarkan akunmu sekarang juga!</p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {/* Pesan Error/Success */}
                        {message.text && (
                            <div className={`border text-sm px-4 py-3 rounded-xl ${message.type === 'error'
                                    ? 'bg-red-50 border-red-200 text-red-600'
                                    : 'bg-green-50 border-green-200 text-green-600'
                                }`}>
                                {message.text}
                            </div>
                        )}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-900">
                                Nama Lengkap <span className="text-accent">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Masukkan nama lengkap kamu"
                                className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm font-normal focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(60,191,76,0.1)] placeholder:text-gray-400"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-900">
                                E-Mail <span className="text-accent">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Masukkan email kamu"
                                className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm font-normal focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(60,191,76,0.1)] placeholder:text-gray-400"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-900">
                                No. Hp <span className="text-accent">*</span>
                            </label>
                            <div className="flex gap-3">
                                <div className="flex items-center gap-2 px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-100 font-bold text-sm text-gray-900 whitespace-nowrap cursor-pointer hover:border-primary hover:bg-primary-light transition-colors">
                                    <img src="https://flagcdn.com/w40/id.png" alt="Indonesia" className="w-6 h-4 object-cover rounded-sm" />
                                    <span>+62</span>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="81234567890"
                                    className="flex-1 px-4 py-3.5 border border-gray-200 rounded-xl text-sm font-normal focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(60,191,76,0.1)] placeholder:text-gray-400"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-900">
                                Kata Sandi <span className="text-accent">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Buat kata sandi"
                                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm font-normal focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(60,191,76,0.1)] placeholder:text-gray-400 pr-12"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-900">
                                Konfirmasi Kata Sandi <span className="text-accent">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Konfirmasi kata sandi"
                                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm font-normal focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(60,191,76,0.1)] placeholder:text-gray-400 pr-12"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="text-right -mt-2">
                            <Link to="/login" className="text-sm text-gray-600 hover:text-primary transition-colors underline">
                                Lupa Password?
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3.5 px-6 bg-primary text-white rounded-xl text-base font-bold hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(60,191,76,0.3)] transition-all"
                        >
                            Daftar
                        </button>
                        <Link
                            to="/login"
                            className="w-full py-3.5 px-6 bg-primary-light text-primary rounded-xl text-base font-bold hover:bg-[#d4f0d7] transition-all text-center"
                        >
                            Masuk
                        </Link>
                        <div className="relative text-center my-2">
                            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200"></div>
                            <span className="relative bg-white px-4 text-xs text-gray-400">atau</span>
                        </div>
                        <button
                            type="button"
                            className="w-full py-3.5 px-6 bg-white text-gray-900 border border-gray-200 rounded-xl text-base font-bold hover:bg-gray-50 hover:border-gray-600 transition-all flex items-center justify-center gap-2"
                        >
                            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                            Daftar dengan Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;