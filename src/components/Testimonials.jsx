import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Williams was an absolute pleasure to work with! His attention to detail and passion for coding made all the difference.",
    name: "John Doe",
    role: "Team Lead at Company A",
  },
  {
    quote: "I highly recommend Williams. His problem-solving skills and creativity helped bring our project to life.",
    name: "Jane Smith",
    role: "Product Manager at Company B",
  },
  {
    quote: "Williams is a top-tier developer. Always willing to go the extra mile to deliver quality work on time.",
    name: "Sarah Lee",
    role: "CEO at Startup X",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-6 py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          What People Are Saying
        </motion.h2>

        <div className="overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex space-x-8 animate-scroll"
          >
            {testimonials.map((testi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="w-full max-w-sm p-6 bg-gray-800 text-center rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <p className="text-xl italic mb-4">"{testi.quote}"</p>
                <h4 className="text-lg font-semibold">{testi.name}</h4>
                <p className="text-gray-400">{testi.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
