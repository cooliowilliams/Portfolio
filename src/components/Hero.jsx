import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-800 to-black text-white px-6 relative overflow-hidden">
        <div className="stars z-0"></div>
      <div className="text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Williams Obinna
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-xl mb-8"
        >
          Full-Stack Developer | UX Designer | Tech Enthusiast
        </motion.p>

        <div className="flex justify-center gap-4 flex-wrap">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg transition-all text-lg md:text-xl"
            
          >
            View Work
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all text-lg md:text-xl"
            
          >
            Contact Me
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
