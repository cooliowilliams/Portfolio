
import { motion, AnimatePresence } from "framer-motion";


import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import TechStack from "./components/Techstack";
import Contact from "./components/Contact";
import DarkModeToggle from "./components/DarkModeToggle";
import Footer from "./components/Footer";

const App = () => {
  

  return (
    <div className="bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-500">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Testimonials />
          <TechStack />
          <Contact />
          <DarkModeToggle />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
