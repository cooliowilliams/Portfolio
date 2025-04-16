import { useTheme } from "../context/Themecontext"; // Adjust the import path as necessary
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react"; // you can use any icons

const DarkModeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-gray-200 dark:bg-gray-800 p-3 rounded-full shadow-xl hover:scale-105 transition-all"
    >
      {darkMode ? (
        <Sun className="text-yellow-400" />
      ) : (
        <Moon className="text-gray-800" />
      )}
    </motion.button>
  );
};

export default DarkModeToggle;
