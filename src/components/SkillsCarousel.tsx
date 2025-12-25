"use client";

import React from "react";
import NextImage from "next/image";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    invert: true,
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "NestJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    invert: true,
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    invert: true,
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  {
    name: "OpenAI",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
    invert: true,
  },
  {
    name: "Azure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
  },
];

const SkillsCarousel = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollingSkills = isMobile
    ? [...skills, ...skills]
    : [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Technical <span className="text-accent">Stack & Tools</span>
          </h2>
          <p className="text-muted max-w-2xl text-[17px] leading-relaxed">
            We leverage a modern, performance-first tech stack to build robust
            microservices and dynamic front-end applications that deliver
            exceptional user experiences.
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap gap-8 py-10"
          animate={{ x: isMobile ? "-50%" : "-33.33%" }}
          transition={{
            duration: isMobile ? 25 : 40,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={isMobile ? {} : { animationPlayState: "paused" }}
        >
          {scrollingSkills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-5 px-8 py-5 rounded-3xl glass-morphism border border-white/5 hover:border-accent/30 transition-all duration-500 group/item cursor-default"
            >
              <div className="w-10 h-10 relative grayscale group-hover/item:grayscale-0 transition-all duration-500">
                <NextImage
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className={`object-contain ${
                    skill.invert ? "brightness-0 invert-0 opacity-80" : ""
                  }`}
                  style={skill.invert ? { filter: "invert(1)" } : {}}
                  unoptimized
                />
              </div>
              <span className="text-xl font-semibold text-white/50 group-hover/item:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default SkillsCarousel;
