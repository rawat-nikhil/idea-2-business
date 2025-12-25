"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-morphism p-12 md:p-24 rounded-[48px] text-center relative overflow-hidden border border-white/5"
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-hero-gradient opacity-30 pointer-events-none -z-10" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[13px] font-bold text-accent uppercase tracking-[0.5em] mb-8"
            >
              Let&apos;s Connect
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[40px] md:text-[72px] font-bold text-white mb-16 tracking-tighter leading-[1.1]"
            >
              Ready to bring your <br /> ideas to life?
            </motion.h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center md:items-start"
              >
                <span className="text-muted text-[14px] font-medium mb-1">
                  Mail to:
                </span>
                <a
                  href="mailto:nikhil.rawat0211@gmail.com"
                  className="text-[20px] md:text-[24px] text-white hover:text-accent transition-colors font-bold tracking-tight"
                >
                  nikhil.rawat0211@gmail.com
                </a>
              </motion.div>

              <div className="hidden md:block w-px h-16 bg-white/10" />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center md:items-start"
              >
                <span className="text-muted text-[14px] font-medium mb-1">
                  Social:
                </span>
                <a
                  href="https://www.linkedin.com/in/02nikhilrawat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[20px] md:text-[24px] text-white hover:text-accent transition-colors font-bold tracking-tight"
                >
                  LinkedIn
                </a>
              </motion.div>
            </div>

            <p className="text-muted/60 text-[13px] font-medium pt-12 border-t border-white/5">
              &copy; {new Date().getFullYear()} Nikhil Rawat. Built with
              Next.js, Framer Motion & Passion.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
