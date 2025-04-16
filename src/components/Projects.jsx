import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
// Replace with your own images

const projects = [
  {
    title: "BookiMart",
    description: "A modern e-commerce platform built with React and Node.js.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    live: "https://your-live-link.com",
    github: "https://github.com/cooliowilliams/bookimart",
    // image: project1,
  },
  // Add more project objects here
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.02}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-600 transition-all duration-300"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4 text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-indigo-600 px-2 py-1 rounded-full text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-400 hover:underline"
                    >
                      Live Site
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-400 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
