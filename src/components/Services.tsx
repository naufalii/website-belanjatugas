import { motion } from 'framer-motion';
import { BookOpen, Laptop, FileText, CheckCircle } from 'lucide-react';

const services = [
  {
    title: "Bimbingan Makalah & Paper",
    description: "Riset mendalam & penyusunan terstruktur dari awal hingga akhir.",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
  },
  {
    title: "Pembuatan Website & IT",
    description: "Tugas coding, project akhir, & pengembangan aplikasi.",
    icon: <Laptop className="w-8 h-8 text-primary" />,
  },
  {
    title: "Tugas Harian & Resensi",
    description: "Pengerjaan cepat & tepat untuk deadlinemu yang mepet.",
    icon: <FileText className="w-8 h-8 text-primary" />,
  },
  {
    title: "Proofreading & Revisi",
    description: "Perbaikan format, EYD, tata bahasa & cek plagiasi profesional.",
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl text-primary mb-4">Layanan Kami</h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto">
            Solusi praktis dan profesional untuk setiap kebutuhan akademik Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-secondary/20 backdrop-blur-sm border border-secondary/30 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center"
            >
              <div className="bg-white p-4 rounded-full shadow-md mb-6">
                {service.icon}
              </div>
              <h3 className="font-subheading font-bold text-xl text-primary mb-3">
                {service.title}
              </h3>
              <p className="font-body text-gray-700 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
