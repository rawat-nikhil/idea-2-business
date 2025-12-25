"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundEffects = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const rotate = useTransform(scrollY, [0, 2000], [0, 360]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary Glow */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full"
      />

      {/* Secondary Glow */}
      <motion.div
        style={{ y: y2, rotate: -rotate }}
        className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-accent-secondary/10 blur-[100px] rounded-full"
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
