"use client";

import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const getRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "just now";

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4.5)
    return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`;

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12)
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;

  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
};

const testimonialsData = [
  {
    name: "Pawan Kumar",
    date: new Date("2025-10-15"),
    content:
      "Professional approach with excellent attention to detail. Working with them was seamless and stress-free.”",
    initials: "PK",
    rating: 5,
  },
  {
    name: "Kajal Sharma",
    date: new Date("2025-12-01"),
    content: "Great collaboration, clear communication, and timely delivery.",
    initials: "KS",
    rating: 4,
  },
  {
    name: "Sakshi Tyagi",
    date: new Date("2025-11-20"),
    content:
      "Proactive communication and fast problem-solving. Made our entire process seamless.",
    initials: "ST",
    rating: 4,
  },
  {
    name: "Michael Thompson",
    date: new Date("2025-11-25"),
    content: "Highly professional, responsive, and easy to work with. ",
    initials: "MT",
    rating: 5,
  },
  {
    name: "Tushar Badola",
    date: new Date("2025-11-10"),
    content: "A dependable team that truly understands project requirements.",
    initials: "TB",
    rating: 4,
  },
  {
    name: "Pranav Sharma",
    date: new Date("2025-11-05"),
    content:
      "Clean, modern, and highly impressive website design. The overall experience was smooth and truly professional.",
    initials: "PS",
    rating: 5,
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[12px] font-bold text-accent uppercase tracking-[0.4em] mb-4"
            >
              Feedback
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[36px] md:text-[54px] font-bold text-white leading-none tracking-tighter"
            >
              What clients and <br /> colleagues say.
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted max-w-sm text-[16px] leading-relaxed font-medium"
          >
            We take pride in delivering robust solutions and maintaining
            professional relationships that stand the test of time.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              date={getRelativeTime(testimonial.date)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
