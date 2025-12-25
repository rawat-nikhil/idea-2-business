"use client";

import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  link,
  image,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      onMouseMove={isMobile ? undefined : handleMouseMove}
      onMouseLeave={isMobile ? undefined : handleMouseLeave}
      style={
        isMobile
          ? {}
          : {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }
      }
      whileHover={isMobile ? { y: -5 } : { y: -10 }}
      className="group relative glass-morphism rounded-[32px] overflow-hidden border border-white/5 hover:border-white/10 transition-colors duration-500"
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="aspect-video bg-white/5 relative overflow-hidden"
      >
        {image ? (
          <Image
            src={image as string}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent-secondary/5 flex items-center justify-center">
            <span className="text-white/10 font-bold text-6xl tracking-tighter">
              {title[0]}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-sm">
          <motion.a
            href={link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-black px-8 py-3 rounded-full text-[14px] font-bold"
          >
            Explore Project
          </motion.a>
        </div>
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold text-accent tracking-[0.1em] uppercase bg-accent/5 px-2.5 py-1 rounded-full border border-accent/10"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted text-[15px] leading-relaxed line-clamp-2 mb-6 font-medium">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center text-[14px] font-bold text-white/70 hover:text-white transition-all duration-300"
        >
          View Case Study
          <svg
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
