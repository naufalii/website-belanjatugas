import { motion } from 'framer-motion';
import { MessageCircle, FileCheck, Cog, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: "Hubungi Admin",
    description: "Kirim detail tugas & deadline lewat WhatsApp.",
    icon: <MessageCircle className="w-8 h-8 text-primary" />,
  },
  {
    title: "Kesepakatan",
    description: "Dapatkan estimasi harga & waktu pengerjaan.",
    icon: <FileCheck className="w-8 h-8 text-primary" />,
  },
  {
    title: "Proses Kerja",
    description: "Duduk manis, tim ahli kami yang kerjakan.",
    icon: <Cog className="w-8 h-8 text-primary" />,
  },
  {
    title: "Terima Hasil",
    description: "Tugas selesai, rapi, dan siap kumpulkan!",
    icon: <CheckCircle2 className="w-8 h-8 text-white" />,
    highlight: true
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl text-primary mb-4">Cara Kerja Kami</h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto">
             4 langkah mudah, tugas beres tanpa pusing.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start relative max-w-6xl mx-auto">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 z-0 transform translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 mb-12 md:mb-0 px-4"
            >
              <div 
                className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white
                  ${step.highlight ? 'bg-primary' : 'bg-secondary text-primary'}`}
              >
                {step.icon}
              </div>
              <h3 className="font-subheading font-bold text-xl text-primary mb-2">{step.title}</h3>
              <p className="font-body text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
