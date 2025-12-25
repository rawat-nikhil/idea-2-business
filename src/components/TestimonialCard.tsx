"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface TestimonialCardProps {
  content: string;
  name: string;
  date: string;
  initials: string;
  rating?: number;
}

const StarRating = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-1 mb-6">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={i < count ? "var(--accent)" : "rgba(255,255,255,0.1)"}
        className={i < count ? "opacity-80" : "opacity-30"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  name,
  date,
  initials,
  rating = 5,
}) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="glass-morphism p-8 md:p-10 rounded-[32px] flex flex-col h-full border border-white/5 hover:border-white/10 transition-colors duration-500"
    >
      <StarRating count={rating} />
      <p className="text-[17px] leading-relaxed text-white/90 mb-10 font-medium tracking-tight">
        &ldquo;{content}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-6">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-[14px] font-bold text-accent border border-accent/20">
          {initials}
        </div>
        <div className="flex flex-col">
          <span className="text-[15px] font-bold text-white tracking-tight">
            {name}
          </span>
          <span className="text-[13px] text-muted font-medium mt-0.5">
            {date}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
