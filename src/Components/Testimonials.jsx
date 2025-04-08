import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { FaThumbsUp, FaAward, FaMedal, FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { IoMdRibbon } from "react-icons/io";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex M.",
      role: "Full Stack Developer",
      text: "PixelWave makes it incredibly easy to deploy professional-grade software solutions without breaking the bank on development costs.",
    },
    {
      name: "Sophia L.",
      role: "Startup Founder",
      text: "I had no prior coding experience, yet my first PixelWave-powered application turned out amazing!",
    },
    {
      name: "David R.",
      role: "Tech Enthusiast",
      text: "Using PixelWave allowed me to bring my innovative ideas to life, both for my personal projects and business ventures.",
    },
    {
      name: "Emma T.",
      role: "UI/UX Designer",
      text: "I love the flexibility and customization—it's amazing to build software that looks and works exactly how I envision it.",
    },
  ];

  return (
    <motion.section 
      className="bg-black text-white py-12 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        className="text-3xl font-bold text-center mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Customer Love 💖
      </motion.h2>

      {/* Review badges using React Icons */}
      <motion.div 
        className="flex justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="flex flex-wrap items-center justify-center gap-6 my-8">
          <div className="flex flex-col items-center">
            <IoMdRibbon size={32} className="text-blue-400" />
            <span className="text-xs mt-1">Top Rated</span>
          </div>
          <div className="flex flex-col items-center">
            <FaHeart size={32} className="text-red-400" />
            <span className="text-xs mt-1">Users Love Us</span>
          </div>
          <div className="flex flex-col items-center">
            <FaAward size={32} className="text-yellow-400" />
            <span className="text-xs mt-1">High Performer</span>
          </div>
          <div className="flex flex-col items-center">
            <FaStar size={32} className="text-blue-400" />
            <span className="text-xs mt-1">GetApp Reviews</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTrustpilot size={32} className="text-green-500" />
            <span className="text-xs mt-1">Excellent</span>
          </div>
        </div>
      </motion.div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <p className="text-lg italic mb-4">"{testimonial.text}"</p>
            <h4 className="text-blue-400 font-semibold">{testimonial.name}</h4>
            <p className="text-gray-400 text-sm">{testimonial.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}