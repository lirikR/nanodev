import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projectsData = [
  {
    id: 1,
    name: "Project Alpha",
    description: "A revolutionary web application",
    image: "https://picsum.photos/500/300?random=1",
  },
  {
    id: 2,
    name: "Project Beta",
    description: "Next-gen mobile experience",
    image: "https://picsum.photos/500/300?random=2",
  },
  {
    id: 3,
    name: "Project Gamma",
    description: "AI-powered analytics platform",
    image: "https://picsum.photos/500/300?random=3",
  },
  {
    id: 4,
    name: "Project Delta",
    description: "Cloud infrastructure solution",
    image: "https://picsum.photos/500/300?random=4",
  },
  {
    id: 5,
    name: "Project Epsilon",
    description: "Enterprise security system",
    image: "https://picsum.photos/500/300?random=5",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="min-h-[300vh] relative py-40 px-4">
      <h2 className="text-4xl font-medium text-center mb-32">Projects</h2>
      <div className="max-w-6xl mx-auto">
        {projectsData.map((project, index) => {
          const projectRef = useRef(null);
          const { scrollYProgress: projectScroll } = useScroll({
            target: projectRef,
            offset: ["start end", "end start"], // Changed to full viewport range
          });

          const x = useTransform(projectScroll, [0, 1], [-200, 200]); // Full width movement
          const opacity = useTransform(
            projectScroll,
            [0, 0.3, 0.7, 1],
            [0, 1, 1, 0]
          ); // Fade in/out

          return (
            <motion.div
              ref={projectRef}
              key={project.id}
              className="mb-96 p-8 bg-white/5 rounded-lg"
              style={{
                x,
                opacity,
              }}
            >
              <h3 className="text-2xl font-medium mb-4">{project.name}</h3>
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-300">{project.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
