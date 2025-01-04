import React, { useEffect, useState } from "react";
import {
  FaAward,
  FaBriefcase,
  FaSmile,
  FaLaptopCode,
  FaEye,
  FaThumbsUp,
  FaBook,
} from "react-icons/fa";

const AboutMe: React.FC = () => {
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
      id="about"
      className={`relative py-16 overflow-hidden ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-light-blue-500 via-indigo-200 to-white text-gray-800"
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {!darkMode && (
          <>
            <div className="absolute rounded-full bg-gradient-to-br from-cyan-300 to-transparent opacity-20 w-96 h-96 -top-20 -left-20 animate-pulse"></div>
            <div className="absolute rounded-full bg-gradient-to-br from-blue-300 to-transparent opacity-20 w-96 h-96 bottom-10 right-10 animate-pulse"></div>
          </>
        )}
      </div>

      <div className="relative max-w-6xl px-6 mx-auto">
        {/* Section Title */}
        <h2 className="mb-12 text-3xl font-extrabold text-center md:text-4xl lg:text-5xl">
          About Me
        </h2>

        {/* Short Bio */}
        <p
          className={`text-lg text-center leading-relaxed mb-12 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I’m <span className="font-bold text-cyan-400">[Your Name]</span>, a
          passionate Web Developer & UI/UX Designer with a strong background in
          crafting intuitive digital experiences. I thrive on solving complex
          problems and turning ideas into reality using the latest web
          technologies. My professional goal is to create impactful,
          user-friendly solutions that make a difference.
        </p>

        {/* Key Achievements */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
          <div
            className={`p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-500 ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="flex items-center gap-4 mb-4 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
              <FaAward className="text-3xl text-cyan-500" /> Key Achievements
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <FaBriefcase
                  className={`text-xl ${
                    darkMode ? "text-cyan-400" : "text-cyan-500"
                  }`}
                />
                <span>
                  Successfully delivered [Number]+ projects for clients
                  worldwide.
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaSmile
                  className={`text-xl ${
                    darkMode ? "text-cyan-400" : "text-cyan-500"
                  }`}
                />
                <span>
                  Built a portfolio of work that consistently delights users and
                  stakeholders.
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaLaptopCode
                  className={`text-xl ${
                    darkMode ? "text-cyan-400" : "text-cyan-500"
                  }`}
                />
                <span>
                  Expert in front-end and back-end technologies, delivering
                  full-stack solutions.
                </span>
              </li>
            </ul>
          </div>

          {/* Fun Fact / Personal Touch */}
          <div
            className={`p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-500 ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="flex items-center gap-4 mb-4 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
              <FaSmile className="text-3xl text-cyan-500" /> Fun Fact
            </h3>
            <p>
              When I’m not coding, you’ll find me exploring new hiking trails,
              capturing moments through photography, or indulging in a good
              sci-fi novel.
            </p>

            {/* Story Icon and Additional Content */}
            <h3 className="flex items-center gap-4 mt-4 mb-4 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
              <FaBook className="text-3xl text-cyan-500" /> Fun Fact
            </h3>
            <p>
              A fun fact from my story: During a trip to the mountains, I got
              lost for a few hours but ended up discovering a hidden waterfall.
            </p>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
          <div
            className={`p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-500 ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="flex items-center gap-4 mb-4 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
              <FaEye className="text-3xl text-cyan-500" /> Attention to Detail
            </h3>
            <p>
              My keen eye for detail ensures that every pixel is perfectly
              placed, enhancing the user experience with precision.
            </p>
          </div>

          <div
            className={`p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-500 ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="flex items-center gap-4 mb-4 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
              <FaThumbsUp className="text-3xl text-cyan-500" /> Teamwork
            </h3>
            <p>
              Collaboration is key! I thrive in team environments where ideas
              are shared and innovative solutions are created together.
            </p>
          </div>

          <div
            className={`p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-500 ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
            }`}
          >
            <h3 className="flex items-center gap-4 mb-4 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
              <FaAward className="text-3xl text-cyan-500" /> Certifications
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <FaAward
                  className={`text-xl ${
                    darkMode ? "text-cyan-400" : "text-cyan-500"
                  }`}
                />
                <span>Certified Front-End Web Developer</span>
              </li>
              <li className="flex items-center gap-4">
                <FaAward
                  className={`text-xl ${
                    darkMode ? "text-cyan-400" : "text-cyan-500"
                  }`}
                />
                <span>UI/UX Design Specialist</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
