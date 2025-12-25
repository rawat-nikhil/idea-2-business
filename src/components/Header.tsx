"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const headerOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-[22px] font-bold text-white tracking-tighter cursor-pointer"
        >
          N<span className="text-accent">.</span>R
          <span className="hidden md:inline">AWAT</span>
        </motion.div>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-muted">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative hover:text-white transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-accent text-white px-7 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300 shadow-xl shadow-accent/20 hover:shadow-accent/40"
          >
            Hire Me
          </motion.a>

          <button className="md:hidden text-white p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Glass Background that appears on scroll */}
      <motion.div
        style={{ opacity: headerOpacity }}
        className="absolute inset-0 -z-10 glass-morphism border-b border-white/5"
      />
    </motion.header>
  );
};

export default Header;
