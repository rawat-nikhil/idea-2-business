import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "GoNoise",
    description:
      "A high-performance digital ecosystem for India's leading wearable brand, featuring advanced e-commerce flows and device connectivity.",
    tags: ["Node.js", "React", "Express", "AWS"],
    link: "https://www.gonoise.com/",
    image: "/projects/noise_v2.png",
  },
  {
    title: "KS Supertreats",
    description:
      "A gluten-free and sugar-free bakery cloud kitchen platform built for health-conscious foodies.",
    tags: ["Next.js", "Tailwind CSS", "E-commerce", "Cloud Kitchen"],
    link: "https://ks-supertreats.com/",
    image: "/projects/ks-supertreats.png",
  },
  {
    title: "EBM AI",
    description:
      "A sophisticated AI bot builder platform empowering organizations to deploy robust, engineering-grade AI solutions with security and validation.",
    tags: ["React", "TypeScript", "Node.js", "OpenAI"],
    link: "https://ebm.ai/",
    image: "/projects/ebm.png",
  },
  {
    title: "GoVa Foundations",
    description:
      "A blockchain-based platform for secure financial transactions and microservices architecture.",
    tags: ["React", "Nest.Js", "Redis", "AWS"],
    link: "https://mygova.com",
    image: "/projects/gova.png",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[14px] font-bold text-accent uppercase tracking-[0.3em] mb-4">
              Selected Work
            </h2>
            <h3 className="text-[42px] md:text-[54px] font-extrabold text-white leading-tight tracking-tight">
              Featured Projects and Case Studies
            </h3>
          </div>
          <p className="text-muted text-[18px] max-w-sm mb-2">
            A collection of technical challenges and creative solutions across
            various domains.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
