import { FaReact, FaNodeJs, FaFigma, FaHtml5, FaCss3Alt, FaGitAlt, FaPython } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const stack = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <FaGitAlt />, name: "Git" },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-20 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
          {stack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center group transition-transform duration-300"
            >
              <div className="text-5xl group-hover:animate-bounce text-indigo-400">
                {tech.icon}
              </div>
              <span className="mt-2 text-sm text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
