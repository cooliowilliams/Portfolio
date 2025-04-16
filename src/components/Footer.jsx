import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaBehance } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-100 dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-300 py-10 px-4"
    >
      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">Williams Obinna</h2>

        <nav className="flex justify-center gap-6 text-sm font-medium">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/cooliowilliams" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-black dark:hover:text-white transition" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-400 transition" />
          </a>
          <a href="https://behance.net/yourportfolio" target="_blank" rel="noopener noreferrer">
            <FaBehance className="hover:text-indigo-500 transition" />
          </a>
        </div>

        <p className="mt-4">
          &copy; {currentYear} Williams Obinna. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
