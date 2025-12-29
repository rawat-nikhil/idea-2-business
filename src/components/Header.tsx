"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  const headerOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Team", href: "#team" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const linkVariants: Variants = {
    closed: { y: 20, opacity: 0 },
    opened: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
  };

  return (
    <>
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
            className="text-[22px] font-bold text-white tracking-tighter cursor-pointer relative z-50"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              if (isMenuOpen) setIsMenuOpen(false);
            }}
          >
            N<span className="text-accent">.</span>R
            <span className="hidden md:inline">AWAT</span>
          </motion.div>

          {/* ... desktop nav ... */}
          <div className="flex items-center gap-8 relative z-[60]">
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
              className="hidden sm:block bg-accent text-white px-7 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300 shadow-xl shadow-accent/20 hover:shadow-accent/40"
            >
              Hire Me
            </motion.a>

            <button
              id="mobile-burger-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 relative z-[75] transition-colors hover:text-accent cursor-pointer"
              aria-label="Toggle Menu"
              type="button"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between pointer-events-none">
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }
                  }
                  className="w-full h-0.5 bg-current rounded-full origin-center"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }
                  }
                  className="w-full h-0.5 bg-current rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>

        <motion.div
          style={{ opacity: headerOpacity }}
          className="absolute inset-0 -z-10 glass-morphism border-b border-white/5"
        />
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial="closed"
          animate="opened"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center p-6"
        >
          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                variants={linkVariants}
                custom={i}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-bold text-white hover:text-accent transition-colors tracking-tighter"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              variants={linkVariants}
              custom={navItems.length}
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-accent text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl shadow-accent/20 active:scale-95 transition-transform"
            >
              Hire Me
            </motion.a>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Header;
