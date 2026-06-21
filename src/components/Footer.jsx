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
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Digital & Teknologi</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Pemasaran</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Manajemen Bisnis</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Pengembangan Diri</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Desain</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-base font-bold text-gray-900 mb-4">Perusahaan</h4>
                    <ul className="flex flex-col gap-3">
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Tentang Kami</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">FAQ</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Kebijakan Privasi</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Ketentuan Layanan</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Bantuan</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-base font-bold text-gray-900 mb-4">Komunitas</h4>
                    <ul className="flex flex-col gap-3">
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Tips Sukses</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Blog</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;