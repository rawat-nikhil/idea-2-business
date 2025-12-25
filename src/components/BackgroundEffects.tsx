"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundEffects = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const rotate = useTransform(scrollY, [0, 2000], [0, 360]);

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) return null;

  const springConfig = { damping: 20, stiffness: 100 };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary Glow */}
      <motion.div
        style={isMobile ? {} : { y: y1, rotate }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-accent/10 blur-[80px] lg:blur-[120px] rounded-full"
      />

      {/* Secondary Glow */}
      <motion.div
        style={isMobile ? {} : { y: y2, rotate: -rotate }}
        className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-accent-secondary/10 blur-[60px] lg:blur-[100px] rounded-full"
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
          maskImage:
            "radial-gradient(ellipse at center, black, transparent 80%)",
        }}
      />

      {/* Noise Texture Overlay */}
      <div className="noise" />
    </div>
  );
};

export default BackgroundEffects;
