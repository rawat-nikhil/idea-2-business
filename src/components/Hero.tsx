"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-20 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80%] bg-hero-gradient pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md bulb-glow cursor-default group"
        >
          <div className="w-2 h-2 rounded-full bg-lime-400 status-bulb" />
          <span className="text-[13px] font-semibold text-lime-400/90 tracking-wide uppercase">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-[48px] md:text-[92px] font-bold leading-[1.1] mb-8 tracking-tighter"
        >
          <span className="text-gradient">Turning Ideas into</span> <br />
          <span className="text-wave-blue">Businesses</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-[17px] md:text-[20px] text-muted max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Full-Stack Software Engineers specializing in high-performance systems,
          cloud architecture, and creating seamless digital experiences that
          scale.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto bg-white text-black px-10 py-4 rounded-full text-[16px] font-bold transition-all duration-300 shadow-2xl shadow-white/10"
          >
            Explore Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto glass-morphism text-white px-10 py-4 rounded-full text-[16px] font-bold transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
