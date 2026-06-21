import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-100">
            <div className="max-w-300 mx-auto px-6">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-black">
                        <span className="text-secondary">video</span>
                        <span className="text-accent">belajar</span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-base font-normal text-gray-900 hover:text-primary transition-colors">
                            Kategori
                        </a>
                        <div className="relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="cursor-pointer"
                            >
                                <img
                                    src="https://i.pravatar.cc/40?img=1"
                                    alt="User"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            </button>
                            {isOpen && (
                                <div className="absolute top-[calc(100%+10px)] right-0 w-50 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden z-1000">
                                    <div className="p-4 text-sm text-gray-900 border-b border-gray-200">
                                        Hai, <strong className="text-primary">Diaz</strong>
                                    </div>
                                    <ul className="py-2">
                                        <li>
                                            <a href="#" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-bg-cream transition-colors">
                                                Admin
                                            </a>
                                        </li>
                                        <li>
                                            <Link
                                                to="/login"
                                                className="block px-4 py-2.5 text-sm text-red-500 font-bold hover:bg-red-50 transition-colors"
                                            >
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;