import React from "react";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  return (
    <div className="">
      <div className="">
        <HeroSection />
      </div>
      <div className="">
        <AboutMe />
      </div>
      <div className="">
        <Skills />
      </div>
      <div className="">
        <Projects />
      </div>
      <div className="">
        <Experience />
      </div>
      <div className="">
        <Testimonials />
      </div>
      <div className="">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
