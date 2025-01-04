import React from 'react';
import SkillBadge from '../components/SkillBadge';

const Skills: React.FC = () => {
  const skills = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
