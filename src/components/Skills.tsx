import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaUserFriends,
  FaLightbulb,
  FaComments,
  FaChartLine,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const Skills: React.FC = () => {
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

  return (
    <section
      id="skills"
      className={`relative py-12 md:py-16 min-h-screen justify-center flex flex-col items-center ${
        darkMode
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 text-gray-100"
          : "bg-gradient-to-br from-blue-100 via-white to-blue-50 text-gray-800"
      }`}
    >
      <div className="relative px-6 mx-auto md:px-20 ">
        {/* Section Title */}
        <h2 className="mb-12 text-3xl font-extrabold text-center md:text-4xl lg:text-5xl">
          Skills & Expertise
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Soft Skills & Certifications */}
          <div>
            {/* Soft Skills */}
            <div className="mb-16">
              <h3 className="mb-8 text-3xl font-bold text-center sm:text-4xl">
                Soft Skills
              </h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {[
                  {
                    icon: <FaUserFriends />,
                    label: "Teamwork",
                    description: "Collaborates effectively in diverse teams.",
                    color: "from-purple-400 to-purple-600",
                  },
                  {
                    icon: <FaLightbulb />,
                    label: "Problem Solving",
                    description: "Finds creative solutions to complex challenges.",
                    color: "from-yellow-400 to-yellow-600",
                  },
                  {
                    icon: <FaComments />,
                    label: "Communication",
                    description: "Communicates ideas clearly and effectively.",
                    color: "from-green-400 to-green-600",
                  },
                  {
                    icon: <FaChartLine />,
                    label: "Adaptability",
                    description: "Quickly adapts to new technologies and environments.",
                    color: "from-blue-400 to-blue-600",
                  },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-6 text-center transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-br hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, ${skill.color})`,
                      color: "#06b6d4",
                    }}
                  >
                    <div className="mb-4 text-5xl">{skill.icon}</div>
                    <h4 className="text-xl font-semibold">{skill.label}</h4>
                    <p className="mt-2 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>

           
          </div>

          {/* Right Column: Technical Skills */}
          <div>
            <h3 className="mb-8 text-3xl font-bold text-center sm:text-4xl">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  icon: <FaHtml5 />,
                  label: "HTML5",
                  value: 90,
                  color: "from-orange-400 to-orange-600",
                },
                {
                  icon: <FaCss3Alt />,
                  label: "CSS3",
                  value: 85,
                  color: "from-blue-400 to-blue-600",
                },
                {
                  icon: <FaJs />,
                  label: "JavaScript",
                  value: 80,
                  color: "from-yellow-400 to-yellow-600",
                },
                {
                  icon: <FaReact />,
                  label: "React",
                  value: 75,
                  color: "from-blue-300 to-blue-500",
                },
                {
                  icon: <SiTypescript />,
                  label: "TypeScript",
                  value: 70,
                  color: "from-blue-400 to-blue-600",
                },
                {
                  icon: <FaNodeJs />,
                  label: "Node.js",
                  value: 65,
                  color: "from-green-400 to-green-600",
                },
                {
                  icon: <SiTailwindcss />,
                  label: "Tailwind CSS",
                  value: 75,
                  color: "from-teal-400 to-teal-600",
                },
                {
                  icon: <FaPython />,
                  label: "Python",
                  value: 60,
                  color: "from-blue-500 to-blue-700",
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`text-6xl mb-4 bg-gradient-to-br ${skill.color} text-white p-4 rounded-full shadow-lg hover:scale-110 transform transition duration-300`}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-lg font-semibold">{skill.label}</span>
                  <div className="relative w-full mt-4">
                    <div className="h-4 bg-gray-200 rounded-full">
                      <div
                        className={`h-4 bg-gradient-to-r ${skill.color} rounded-full`}
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-600 ">
                    {skill.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
