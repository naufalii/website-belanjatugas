import { Instagram, MapPin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 font-body">
      {/* Top Footer Section (Final CTA) */}
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-secondary/10 border border-secondary/20 p-12 lg:p-16 rounded-3xl shadow-xl w-full flex flex-col items-center text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-primary leading-relaxed md:leading-loose mb-4">
              Jangan biarkan tugas merusak waktu tidurmu.
            </h2>
            <p className="font-body text-gray-700 text-base max-w-2xl mb-10">
              Mari diskusikan masalah akademikmu sekarang. Solusi cepat, aman, dan tanpa ribet.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/6281234567890" // Placeholder WA link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-subheading font-bold text-lg px-10 py-4 rounded-full shadow-lg"
            >
              Konsultasi Sekarang 🚀
            </motion.a>
          </div>
        </div>
      </div>

      {/* Middle Footer Section (Links & Info) */}
      <div className="bg-gray-100 pt-16 pb-8 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand & Description */}
            <div>
              <h3 className="font-heading text-2xl mb-4 text-primary">Belanja<span className="text-secondary tracking-tight">Tugas</span></h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
                Layanan konsultasi dan pengerjaan tugas akademik terpercaya untuk mahasiswa seluruh Indonesia. Privasi 100% aman.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-subheading font-bold text-lg mb-4 text-primary">Layanan</h4>
              <ul className="space-y-3 font-body text-gray-600 text-sm">
                <li><a href="#services" className="hover:text-primary transition-colors">Bimbingan Makalah</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Pembuatan Website & IT</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Tugas Harian & Resensi</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Proofreading & Revisi</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-subheading font-bold text-lg mb-4 text-primary">Hubungi Kami</h4>
              <ul className="space-y-4 font-body text-gray-600 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Jakarta, Indonesia (Layanan Online)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <span>halo@belanjatugas.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-primary transition-colors">
                    <Instagram className="w-5 h-5 text-secondary" />
                    <span>@belanjatugas_id</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer Section (Copyright) */}
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="font-body text-gray-400 text-xs tracking-wider">
              &copy; {new Date().getFullYear()} BelanjaTugas. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
