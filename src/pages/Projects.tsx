import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    { title: 'Project 1', description: 'Description 1', link: '#' },
    { title: 'Project 2', description: 'Description 2', link: '#' },
  ];

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
