import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Apakah data saya aman dan tidak bocor ke dosen?",
    answer: "Sangat aman. Kami menggunakan sistem enkripsi untuk data klien, dan setelah project selesai, seluruh file & riwayat chat dapat dihapus sesuai permintaan."
  },
  {
    question: "Bagaimana sistem pembayarannya? Bisa DP dulu?",
    answer: "Tentu. Anda cukup melakukan DP (Down Payment) 50% di awal sebagai tanda jadi, dan sisa pembayaran dilunasi setelah kami memberikan preview bahwa tugas telah selesai."
  },
  {
    question: "Kalau ada revisi dari dosen, apakah bayar lagi?",
    answer: "Tidak. Kami memberikan garansi revisi gratis sampai tugas Anda benar-benar di-ACC oleh dosen pembimbing dengan syarat dan ketentuan yang disepakati di awal."
  },
  {
    question: "Berapa lama estimasi pengerjaannya?",
    answer: "Bergantung pada tingkat kesulitan dan antrean. Namun, kami menyediakan paket Express 24 Jam untuk Anda yang memiliki deadline mepet."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl text-primary mb-4">Tanya Jawab (FAQ)</h2>
          <p className="font-body text-gray-600">
            Masih ragu? Berikut beberapa pertanyaan yang sering diajukan klien kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'border-primary bg-secondary/5' : 'border-gray-200 bg-white'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-subheading font-bold text-lg text-primary">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-primary transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 font-body text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
