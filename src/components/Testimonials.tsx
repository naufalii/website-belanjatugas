import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mahasiswa UI, Akuntansi",
    text: "Gila sih cepet banget! Deadline besok pagi, order semalem jam 10 udh beres jam 3 subuh. Dosen ACC tanpa revisi! 🔥",
    rating: 5
  },
  {
    name: "Mahasiswa UGM, Ilmu Komunikasi",
    text: "Awalnya ragu takut ketahuan, tapi hasil pengerjaannya emang rapi dan bahasanya natural banget kayak tulisan sendiri. Makasih ka!",
    rating: 5
  },
  {
    name: "Mahasiswa ITB, Teknik Informatika",
    text: "Project akhir codinganku error terus, minta tolong benerin disini langsung jalan lancar. Penjelasannya juga detail jadi paham pas ditanya dosen.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimo = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimo = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#F4F9FA]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl text-primary mb-4">Apa Kata Mereka?</h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto">
            1.500+ mahasiswa telah membuktikan kualitas dan kecepatan kami.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto flex items-center justify-center">
          <button 
            onClick={prevTestimo}
            className="absolute left-0 md:-left-12 z-10 bg-white p-3 rounded-full shadow-md text-primary hover:bg-secondary/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="w-full max-w-2xl overflow-hidden relative min-h-[250px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full absolute"
              >
                {/* Mock WA Message Bubble */}
                <div className="bg-[#E2F7CB] p-6 rounded-2xl rounded-tr-sm shadow-sm relative ml-4 mr-4 md:ml-0 md:mr-0">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="font-body text-gray-800 text-lg mb-4">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <p className="font-subheading text-right text-xs text-gray-500 font-semibold">
                    - {testimonials[currentIndex].name}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={nextTestimo}
            className="absolute right-0 md:-right-12 z-10 bg-white p-3 rounded-full shadow-md text-primary hover:bg-secondary/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
