import React, { useState, useEffect } from 'react';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
} from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Footer: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className={`relative py-8 px-4 md:py-12 transition-all duration-300 ${
        darkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100'
        : 'bg-gradient-to-br from-blue-100 via-indigo-50 to-white text-gray-800'
    }`}
    >
      <div className="mx-auto text-center max-w-7xl">
        {/* Logo/Brand Name */}
        <h3 className="mb-4 text-2xl font-extrabold tracking-wide sm:text-3xl">
          My Portfolio
        </h3>

        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex flex-col justify-center gap-4 text-base font-medium md:flex-row md:gap-8">
            {[
              { to: 'about', label: 'About' },
              { to: 'skills', label: 'Skills' },
              { to: 'projects', label: 'Projects' },
              { to: 'experience', label: 'Experience' },
              { to: 'testimonials', label: 'Testimonials' },
              { to: 'contact', label: 'Contact' },
            ].map((link) => (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth
                  duration={500}
                  className={`cursor-pointer ${
                    darkMode
                      ? 'hover:text-teal-300'
                      : 'hover:text-cyan-600'
                  } transition duration-300`}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="mb-6">
          <p className="mb-4 text-lg font-semibold">Stay Connected</p>
          <div className="flex justify-center gap-4 text-2xl sm:gap-6">
            {[FaInstagram, FaFacebook, FaTwitter, FaPinterest, FaLinkedin].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className={`transform transition duration-300 hover:scale-125 ${
                    darkMode
                      ? 'text-gray-300 hover:text-teal-400'
                      : 'text-cyan-600 hover:text-cyan-500'
                  }`}
                  aria-label={Icon.name}
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

        {/* Decorative Background Circles */}
        <div className="absolute inset-0 pointer-events-none">
          {!darkMode && (
            <>
              <div className="absolute rounded-full bg-gradient-to-br from-cyan-300 to-transparent opacity-20 w-72 h-72 sm:w-96 sm:h-96 -top-20 -left-20 animate-pulse"></div>
              <div className="absolute bottom-0 right-0 rounded-full bg-gradient-to-br from-blue-300 to-transparent opacity-20 w-72 h-72 sm:w-96 sm:h-96 animate-pulse"></div>
            </>
          )}
        </div>

        {/* Copyright */}
        <p className="mt-4 text-xs sm:mt-6 sm:text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
