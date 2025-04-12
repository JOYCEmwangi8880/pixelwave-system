
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="relative pt-20 h-[200vh] bg-gradient-to-b from-black via-sky-950 to-red-800">
      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <div className="flex-grow flex flex-col items-center justify-center text-center text-white px-4">
          
          {/* Heading with Typing Effect */}
          <motion.h1
            className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Innovative Digital Solutions<br className="hidden sm:block" />
            With{" "}
            <span className="text-red-600">
              <TypeAnimation
                sequence={[
                  "PixelWave Systems", 1500,
                  "AI & Machine Learning", 1500,
                  "School Management", 1500,
                  "Creative Design", 1500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl max-w-3xl mx-auto mb-10 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Comprehensive digital solutions that transform businesses through innovative technology and design.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Link
              to="/products"
              className="px-6 py-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
            >
              Explore Products
            </Link>
            <Link
              to="/pricing"
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>

        {/* Scrolling Indicator */}
        <motion.div
          className="pb-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="animate-bounce opacity-75">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>

      <div>
        <img src="/images/Removal-783.png" alt=""  className="w-3/4 h-[80vh]"/>
      </div>
    </div>
  );
};

export default Hero;