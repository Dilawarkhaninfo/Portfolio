import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaClock,
} from "react-icons/fa";

const Contact: React.FC = () => {
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
      id="contact"
      className={`relative py-20 px-6 md:px-12 flex justify-center items-center overflow-hidden ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-light-blue-500 via-indigo-200 to-white text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="relative grid w-full grid-cols-1 overflow-hidden bg-white shadow-lg max-w-7xl dark:bg-gray-800 rounded-xl lg:grid-cols-2 animate-fade-in">
        {/* Contact Info Section */}
        <div className="relative p-8 text-white shadow-lg lg:p-12 bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-600 rounded-l-xl">
          <h3 className="mb-6 text-4xl font-extrabold tracking-wide">
            Let's Get in Touch
          </h3>
          <p className="mb-8 text-lg leading-relaxed">
            We’re here to assist you with your questions and concerns. Feel free
            to connect with us at your convenience. Your satisfaction is our
            priority!
          </p>
          <ul className="space-y-8">
            <li className="flex items-center gap-4">
              <FaEnvelope className="text-3xl" />
              <span className="text-lg">contact@example.com</span>
            </li>
            <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl" />
              <span className="text-lg">New York, USA</span>
            </li>
            <li className="flex items-center gap-4">
              <FaPhone className="text-3xl" />
              <span className="text-lg">+123-456-7890</span>
            </li>
            <li className="flex items-center gap-4">
              <FaClock className="text-3xl" />
              <span className="text-lg">Mon-Fri: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
          <div className="mt-8">
            <h4 className="mb-4 text-lg font-bold">Follow Us</h4>
            <div className="flex items-center space-x-6">
              {[FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTwitter].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-3xl transition-transform duration-300 transform hover:scale-125 hover:text-gray-200"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Decorative Floating Elements */}
          <div className="absolute w-48 h-48 bg-white rounded-full opacity-10 blur-2xl -top-16 -left-16"></div>
          <div className="absolute w-32 h-32 rounded-full bg-cyan-400 opacity-20 blur-xl -bottom-20 -right-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-10"></div>
        </div>

        {/* Contact Form Section */}
        <div className="p-8 lg:p-12">
          <form className="space-y-3">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring focus:ring-teal-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring focus:ring-teal-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring focus:ring-teal-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring focus:ring-teal-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 font-medium text-white transition duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-600 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
