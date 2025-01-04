import React, { useState, useEffect } from "react";
import { FaBriefcase, FaGraduationCap, FaAward, FaMapMarkerAlt } from "react-icons/fa";

type WorkItem = {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
};

type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  location: string;
};

type AchievementItem = {
  title: string;
  organization: string;
  duration: string;
  location: string;
  description: string;
};

type ItemType = WorkItem | EducationItem | AchievementItem;

const Experience: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  const [activeTab, setActiveTab] = useState<"Work" | "Education" | "Achievements">("Work");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const workHistory: WorkItem[] = [
    {
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2020 - Present",
      location: "New York",
      description: "Developed responsive web applications using React and TypeScript.",
    },
    {
      role: "UI/UX Designer",
      company: "Creative Studio",
      duration: "Jul 2018 - Dec 2019",
      location: "Los Angeles",
      description: "Designed user-friendly interfaces for mobile and web platforms.",
    },
    {
      role: "Junior Developer",
      company: "Startup Hub",
      duration: "May 2017 - Jun 2018",
      location: "San Francisco",
      description: "Built dynamic websites and assisted in backend API integrations.",
    },
  ];

  const education: EducationItem[] = [
    {
      degree: "Bachelor of Computer Science",
      institution: "State University",
      duration: "2014 - 2018",
      location: "California",
    },
    {
      degree: "High School Diploma",
      institution: "City High School",
      duration: "2010 - 2014",
      location: "Florida",
    },
  ];

  const achievements: AchievementItem[] = [
    {
      title: "Top Innovator Award",
      organization: "TechFest 2021",
      location: "New York",
      duration: "2021",
      description: "Recognized for innovative web solutions.",
    },
    {
      title: "Certified React Developer",
      organization: "React Training Institute",
      location: "San Francisco",
      duration: "2022",
      description: "Completed an advanced React certification course.",
    },
    {
      title: "Employee of the Month",
      organization: "Tech Solutions Inc.",
      location: "New York",
      duration: "2023",
      description: "Awarded for outstanding performance and team contributions.",
    },
  ];

  const renderCards = (items: ItemType[], type: "Work" | "Education" | "Achievements") => {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              darkMode ? "bg-gray-800 border-gray-700 text-gray-100" : "bg-white border-gray-200 text-gray-800"
            }`}
          >
            <div className="flex items-center mb-4">
              {type === "Work" && <FaBriefcase className="mr-3 text-cyan-500" size={20} />}
              {type === "Education" && <FaGraduationCap className="mr-3 text-cyan-500" size={20} />}
              {type === "Achievements" && <FaAward className="mr-3 text-cyan-500" size={20} />}
              <h4 className="text-lg font-bold">
                {type === "Work" ? (item as WorkItem).role : type === "Education" ? (item as EducationItem).degree : (item as AchievementItem).title}
              </h4>
            </div>
            <p className="mb-2 text-sm font-semibold">
              {type === "Work" ? (item as WorkItem).company : type === "Education" ? (item as EducationItem).institution : (item as AchievementItem).organization}
            </p>
            <p className="mb-2 text-sm text-gray-500">{item.duration}</p>
            <div className="flex items-center mb-2 text-sm text-cyan-500">
              <FaMapMarkerAlt className="mr-1" /> {item.location}
            </div>
            <p className="text-sm leading-relaxed">
              {type === "Work" || type === "Achievements" ? (item as WorkItem | AchievementItem).description : ""}
            </p>
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Work":
        return renderCards(workHistory, "Work");
      case "Education":
        return renderCards(education, "Education");
      case "Achievements":
        return renderCards(achievements, "Achievements");
      default:
        return null;
    }
  };

  return (
    <section
      id="experience"
      className={`relative py-12 md:py-16 min-h-screen justify-center flex flex-col items-center ${
        darkMode
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 text-gray-100"
          : "bg-gradient-to-br from-blue-100 via-white to-blue-50 text-gray-800"
      }`}
    >
      <div className="relative px-6 mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-extrabold text-center md:text-4xl lg:text-5xl">Experience</h2>
        <div className="flex flex-wrap justify-center mb-8 space-x-4 space-y-2 md:space-y-0">
          <button
            className={`px-4 md:px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "Work"
                ? "bg-cyan-500 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setActiveTab("Work")}
          >
            <FaBriefcase className="inline mr-2" /> Work
          </button>
          <button
            className={`px-4 md:px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "Education"
                ? "bg-cyan-500 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setActiveTab("Education")}
          >
            <FaGraduationCap className="inline mr-2" /> Education
          </button>
          <button
            className={`px-4 md:px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "Achievements"
                ? "bg-cyan-500 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setActiveTab("Achievements")}
          >
            <FaAward className="inline mr-2" /> Achievements
          </button>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </section>
  );
};

export default Experience;
