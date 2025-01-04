import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import PortfolioImg from "../assets/Projects/portfolio.png";
import EcommerceImg from "../assets/Projects/ecommerce.png";
import ChatAppImg from "../assets/Projects/ChatApp.png";
const Projects: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      name: "Portfolio Website",
      description:
        "A responsive portfolio website to showcase my skills and projects.",
      tools: ["React", "TypeScript", "Tailwind CSS"],
      liveLink: "https://myportfolio.com",
      repoLink: "https://github.com/myportfolio",
      image: PortfolioImg,
    },
    {
      name: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with a seamless shopping experience.",
      tools: ["Node.js", "Express", "React", "MongoDB"],
      liveLink: "https://myecommerce.com",
      repoLink: "https://github.com/myecommerce",
      image: EcommerceImg,
    },
    {
      name: "Chat Application",
      description: "A real-time chat application with WebSocket integration.",
      tools: ["React", "Socket.io", "Node.js"],
      liveLink: "https://mychatapp.com",
      repoLink: "https://github.com/mychatapp",
      image: ChatAppImg,
    },
  ];

  return (
    <section
      id="projects"
      className={`relative min-h-screen py-16 flex justify-center flex-col items-center ${
        darkMode
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 text-gray-100"
          : "bg-gradient-to-br from-light-blue-500 via-indigo-200 to-white text-gray-800"
      }`}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {!darkMode && (
          <>
            <div className="absolute rounded-full bg-gradient-to-br from-cyan-300 to-transparent opacity-20 w-96 h-96 -top-20 -left-20 animate-pulse"></div>
            <div className="absolute rounded-full bg-gradient-to-br from-blue-300 to-transparent opacity-20 w-96 h-96 bottom-10 right-10 animate-pulse"></div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative max-w-6xl px-4 mx-auto md:px-6">
        <h2 className="mb-12 text-3xl font-extrabold text-center md:text-4xl lg:text-5xl">
          Projects / Portfolio
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
