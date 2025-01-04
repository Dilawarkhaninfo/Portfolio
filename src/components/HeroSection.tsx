import React, { useEffect, useState } from "react";
import { FaRegSmileBeam, FaClipboardCheck, FaLaptopCode } from "react-icons/fa";
import UserImage from "../assets/UserImage/user.png";
const HeroSection: React.FC = () => {
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
      id="hero"
      className={`relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-0 min-h-[90vh] gap-4 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100"
          : "bg-gradient-to-br from-light-blue-200 via-cyan-100 to-white text-gray-800"
      }`}
    >
      {/* Left Section */}
      <div className="w-full text-center md:w-4/6 md:text-left">
        <h1 className="mb-6 text-3xl font-extrabold leading-tight md:text-5xl xl:text-6xl">
          Make{" "}
          <span className={`${darkMode ? "text-teal-500" : "text-cyan-500"}`}>
            Designs
          </span>{" "}
          That Engage, Delight, and Connect
        </h1>
        <p
          className={`text-base md:text-lg xl:text-xl mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Hi, I'm Dilawar! With more than 5 years of experience, I'm ready to be
          a part of your wonderful project!
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="#contact"
            aria-label="Hire Me"
            className={`px-6 py-3 text-sm md:text-lg font-semibold rounded-full shadow-md transition ${
              darkMode
                ? "bg-teal-500 text-gray-900 hover:bg-teal-400"
                : "bg-cyan-500 text-white hover:bg-cyan-600"
            }`}
          >
            Hire Me
          </a>
          <a
            href="#projects"
            aria-label="View Previous Work"
            className={`px-6 py-3 text-sm md:text-lg font-semibold border-2 rounded-full shadow-md transition ${
              darkMode
                ? "border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-gray-900"
                : "border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
            }`}
          >
            Previous Work
          </a>
        </div>
        {/* Statistics Section */}
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          {[
            { value: "650+", label: "Projects Completed" },
            { value: "99%", label: "Happy Clients" },
            { value: "240+", label: "Free Artworks" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 text-center rounded-lg shadow-lg ${
                darkMode
                  ? "bg-gray-800 text-gray-100"
                  : "bg-white text-gray-800"
              }`}
            >
              <h3 className="text-3xl font-bold md:text-4xl xl:text-5xl text-cyan-500 dark:text-teal-400">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm md:text-lg xl:text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex items-center justify-center w-full md:w-1/2">
        <div className="relative w-40 h-40 md:w-60 md:h-60 xl:w-[530px] xl:h-[530px]">
          <img
            src={UserImage}
            alt="Hero Avatar"
            className="w-full h-full transition duration-500 transform border-4 rounded-full shadow-md hover:scale-105"
          />
          {/* Icon Overlays */}
          {[
            { icon: <FaLaptopCode />, position: "top-0 left-0" },
            { icon: <FaClipboardCheck />, position: "top-0 right-0" },
            {
              icon: <FaRegSmileBeam />,
              position: "bottom-0 left-1/2 -translate-x-1/2",
            },
          ].map((overlay, idx) => (
            <div
              key={idx}
              className={`absolute ${overlay.position} flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md dark:bg-gray-800`}
            >
              {React.cloneElement(overlay.icon, {
                className:
                  "text-lg md:text-xl xl:text-2xl text-cyan-500 dark:text-teal-400",
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
