import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg"; // Add your image in the assets folder


const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Express",
  "MongoDB", "TailwindCSS", "Framer Motion", "Git", "Figma", "Socket.io",
  "Next.js", "TypeScript", "REST APIs", "React Native"
];

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Slide-in Title */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 text-lg"
          >
            <img
              src={profileImg}
              alt="Williams Obinna"
              className="w-40 h-40 rounded-full mb-6 border-4 border-indigo-500 shadow-lg"
            />
            <p className="mb-4">
              Hi! I'm Williams Obinna, a passionate full-stack developer with a love for clean code,
              smooth user experiences, and bringing ideas to life on the web.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>I studied Medical Lab Science but code stole my heart 💻</li>
              <li>Obsessed with UI/UX – Figma is my second home 🎨</li>
              <li>Building real-time apps with Socket.io is my jam ⚡</li>
            </ul>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className="md:w-1/2"
>
  <h3 className="text-2xl font-semibold mb-4">Skills</h3>
  
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gray-800 hover:bg-indigo-600 text-white py-3 px-4 rounded-lg shadow-md text-center transition-all duration-300"
      >
        {skill}
      </motion.div>
    ))}
  </div>

  <motion.a
    href="/resumep.pdf"
    download
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    className="inline-block mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
  >
    Download Resume
  </motion.a>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
