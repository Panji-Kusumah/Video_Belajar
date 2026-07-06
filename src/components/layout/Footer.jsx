import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-white py-12 px-6 border-t border-gray-200">
            <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
                <div>
                    <div className="text-2xl font-black mb-4">  
                        <span className="text-secondary">video</span>
                        <span className="text-accent">belajar</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Jl. Usman Effendi No. 50 Lowokwaru, Malang<br />
                        +62-877-7123-1234
                    </p>
                </div>
                <div>
                    <h4 className="text-base font-bold text-gray-900 mb-4">Kategori</h4>
                    <ul className="flex flex-col gap-3">
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Digital & Teknologi</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Pemasaran</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Manajemen Bisnis</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Desain</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-base font-bold text-gray-900 mb-4">Perusahaan</h4>
                    <ul className="flex flex-col gap-3">
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Tentang Kami</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary">FAQ</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Kebijakan</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Bantuan</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-base font-bold text-gray-900 mb-4">Komunitas</h4>
                    <ul className="flex flex-col gap-3">
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Blog</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Tips Sukses</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-300 mx-auto border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500">
                    © 2026 KNZT_613 PRIANGAN CONSULATE. All Rights Reserved.
                </p>
                <div className="flex gap-3">
                    <a className="w-10 h-10 flex items-center justify-center rounded-full border hover:text-primary hover:border-primary">
                        <FaLinkedinIn size={18} />
                    </a>
                    <a className="w-10 h-10 flex items-center justify-center rounded-full border hover:text-primary hover:border-primary">
                        <FaFacebookF size={18} />
                    </a>
                    <a className="w-10 h-10 flex items-center justify-center rounded-full border hover:text-primary hover:border-primary">
                        <FaInstagram size={18} />
                    </a>
                    <a className="w-10 h-10 flex items-center justify-center rounded-full border hover:text-primary hover:border-primary">
                        <FaXTwitter size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;