import { motion } from 'framer-motion';

const statements = [
  { icon: '🌟', text: 'Telah membantu 1.500+ Mahasiswa' },
  { icon: '⚡', text: 'Pengerjaan Express 24 Jam' },
  { icon: '🔒', text: 'Privasi 100% Aman' },
];

const SocialProof = () => {
  return (
    <div className="bg-primary text-white py-4 overflow-hidden flex shadow-inner">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {/* Render the items twice for a seamless loop effect */}
        {[...statements, ...statements].map((item, index) => (
          <span key={index} className="flex items-center space-x-2 px-12 font-sans text-sm md:text-base tracking-wide">
            <span>{item.icon}</span> <span>{item.text}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default SocialProof;
