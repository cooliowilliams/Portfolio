import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactSchema from "../validation/contactSchema";
import { motion } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setStatus("Sending...");
    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        reset();
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-16 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-6"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="Enter your email"
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
        <label htmlFor="message" className="block text-lg font-semibold">
         Message
        </label>
        <textarea
         id="message"
        rows="5"
        {...register("message")}
        placeholder="Type your message here"
     className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    {errors.message && (
    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
    )}
    </div>


            <div className="mb-4">
              <label htmlFor="phone" className="block text-lg font-semibold">
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                placeholder="Enter your phone number"
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full p-3 bg-indigo-600 text-white rounded-lg mt-4 text-xl font-semibold transition duration-300 ease-in-out"
              type="submit"
            >
              Send
            </motion.button>
          </form>

          <div className="mt-8">
            <p className="text-center">{status}</p>
            <h3 className="text-xl font-semibold">Find me on:</h3>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="https://www.linkedin.com/in/obinna-williams-293167264/"
                className="text-indigo-500 hover:text-indigo-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/cooliowilliams"
                className="text-indigo-500 hover:text-indigo-300"
              >
                GitHub
              </a>
              <a
                href="williamsobinna677@gmail.com"
                className="text-indigo-500 hover:text-indigo-300"
              >
                Email Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
