import { motion } from 'framer-motion';
import { Zap, ShieldCheck, GraduationCap, RefreshCw } from 'lucide-react';

const reasons = [
  {
    title: "Pengerjaan Cepat",
    description: "Solusi tepat untuk deadline mepet. Tersedia layanan express 24 jam.",
    icon: <Zap className="w-10 h-10 text-primary" />
  },
  {
    title: "Rahasia Terjamin",
    description: "Privasi klien adalah prioritas utama. Data aman, tidak bocor ke pihak manapun.",
    icon: <ShieldCheck className="w-10 h-10 text-primary" />
  },
  {
    title: "Tim Ahli",
    description: "Dikerjakan oleh praktisi & lulusan terbaik sesuai bidangnya (Bukan asal joki).",
    icon: <GraduationCap className="w-10 h-10 text-primary" />
  },
  {
    title: "Revisi Gratis",
    description: "Garansi perbaikan sampai sesuai kriteria dan arahan dosen pembimbing.",
    icon: <RefreshCw className="w-10 h-10 text-primary" />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text & Image/Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl text-primary mb-6">Kenapa Harus Kami?</h2>
          <p className="font-body text-gray-600 mb-8 text-lg leading-relaxed">
            Berhenti membuang waktu untuk hal yang memusingkan. Kami hadir memberikan solusi akademik yang dapat diandalkan, aman, dan memuaskan.
          </p>
          <div className="w-full h-64 bg-secondary rounded-3xl opacity-20 relative overflow-hidden hidden md:block">
             <div className="absolute inset-0 flex items-center justify-center text-primary/40 font-heading text-4xl transform rotate-12">
               #BikinTenang
             </div>
          </div>
        </motion.div>

        {/* Right: Listicle */}
        <div className="flex flex-col space-y-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-6 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 bg-secondary/30 p-4 rounded-xl">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-subheading font-bold text-xl text-primary mb-2">{reason.title}</h3>
                <p className="font-body text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
