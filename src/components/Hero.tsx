import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

const HeroCanvas = lazy(() => import('./canvas/HeroCanvas'));

const Hero = () => {
  // Stagger variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger effect
      },
    },
  };

  // Variants for individual children
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center bg-gray-50 overflow-hidden">
      {/* 3D Visual - Absolute Positioned */}
      <div className="absolute inset-0 lg:left-1/2 flex items-center justify-center pointer-events-none opacity-30 lg:opacity-100 z-0">
        {/* Soft background glow */}
        <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-secondary rounded-full blur-[100px] opacity-50 mix-blend-multiply"></div>
        <div className="w-full h-full lg:w-[120%] lg:h-[120%] relative pointer-events-auto flex items-center justify-center">
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
        {/* Text Content */}
        <motion.div 
          className="flex flex-col items-start pt-16 lg:pt-0 max-w-2xl lg:max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-heading text-4xl lg:text-6xl leading-tight text-primary mb-6"
          >
            Tugas Numpuk & <br className="hidden md:block" />
            Deadline Mepet?<br />
            <span className="text-primary opacity-80">Kami Bantu Tuntas.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="font-body text-lg text-gray-600 mb-8 max-w-2xl"
          >
            Layanan konsultasi, proofreading, dan bimbingan akademik terpercaya. Aman, cepat, dan rahasia terjamin.
          </motion.p>
          
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/6281234567890" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-subheading font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            Konsultasi Gratis
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
