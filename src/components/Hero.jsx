// src/components/Hero.jsx
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#2c387e] to-[#6200ea] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-8"
        >
          Detect DeepFakes with Confidence
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
        >
         TruthX uses advanced AI to identify manipulated media with industry-leading accuracy. Protect yourself from misinformation in the digital age.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="#upload"
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition duration-300"
          >
            Get Started
          </a>
          <Link
            to="/model"
            className="px-8 py-3 bg-white text-purple-700 rounded-lg font-semibold hover:bg-purple-100 transition duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;