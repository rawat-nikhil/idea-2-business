"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Nikhil Rawat",
    role: "Software Engineer",
    expertise: ["Node.js", "GenAI", "AWS", "React", "Next.js", "GraphQL", "MongoDB", "TypeScript", "Go", "Kubernetes", "Redis", "Kafka"],
    image: "/nikhil.jpg",
  },
  {
    name: "Divyansh Goswami",
    role: "Software Engineer",
    expertise: ["Java", "GenAI", "Spring Boot", "Azure", "Microservices", "SQL", "Node", "Python", "Kafka", "Redis", "MongoDB", "TypeScript"],
    image: "/divyansh.png",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const Team = () => {
  return (
    <section id="team" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-[13px] font-bold text-accent uppercase tracking-[0.5em] mb-4">
            The Team
          </h2>
          <h3 className="text-[40px] md:text-[64px] font-bold text-white tracking-tighter leading-[1.1]">
            Meet the <span className="text-gradient">Innovators</span>
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-morphism p-8 md:p-10 rounded-[40px] border border-white/5 hover:border-white/10 transition-colors duration-500 group"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 group-hover:border-accent/50 transition-colors duration-500">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-[24px] md:text-[32px] font-bold text-white mb-2 tracking-tight">
                    {member.name}
                  </h4>
                  <p className="text-accent font-semibold text-[15px] mb-6 tracking-wide uppercase">
                    {member.role}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="text-[12px] font-bold px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/5 hover:border-white/10 hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </section>
  );
};

export default Team;
