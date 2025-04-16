import { motion } from "framer-motion";

const experiences = [
  {
    company: "Company A",
    role: "Frontend Developer",
    duration: "Jan 2021 - Present",
    description: "Worked on building responsive web applications using React and TailwindCSS.",
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    duration: "Jun 2020 - Dec 2020",
    description: "Developed full-stack applications with Node.js, Express, and MongoDB.",
  },
  {
    company: "Company B",
    role: "UI/UX Designer",
    duration: "Jan 2019 - May 2020",
    description: "Designed user-friendly web interfaces and improved user experiences for various clients.",
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen px-6 py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-500"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-start mb-12`}
            >
              {/* Experience details */}
              <div className="w-1/2 pl-8 pr-4">
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <h4 className="text-xl text-indigo-400">{exp.company}</h4>
                <p className="text-gray-400">{exp.duration}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
              {/* Dot on the timeline */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-4 h-4 bg-indigo-500 rounded-full absolute left-1/2 transform -translate-x-1/2 -top-2"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
