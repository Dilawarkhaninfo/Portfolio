import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import User3Img from '../assets/UserImage/user3.jpg';
import User2Img from '../assets/UserImage/user2.jpg';
import User1Img from '../assets/UserImage/user.png';
interface Testimonial {
  name: string;
  role: string;
  message: string;
  image: string;
}

const Testimonials: React.FC = () => {
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

  const testimonials: Testimonial[] = [
    {
      name: 'John Doe',
      role: 'CEO, Tech Solutions',
      message:
        'Working with Dilawar Khan was an absolute pleasure. Their attention to detail and dedication to delivering exceptional results is unmatched. Highly recommend!',
      image: User1Img,
    },
    {
      name: 'Jane Smith',
      role: 'Manager, Creative Studio',
      message:
        'Dilawar Khan is a true professional. Their innovative ideas and ability to execute complex projects made a significant impact on our success.',
      image: User2Img,
    },
    {
      name: 'Alice Brown',
      role: 'Colleague',
      message:
        'Collaborating with Dilawar Khan was a fantastic experience. Their expertise and positive attitude made every project enjoyable and successful.',
      image: User3Img,
    },
  ];

  return (
    <section
      id="testimonials"
      className={`relative py-20 min-h-screen flex justify-center items-center overflow-hidden transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100'
          : 'bg-gradient-to-br from-blue-100 via-indigo-50 to-white text-gray-800'
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

      <div className="relative px-6 mx-auto text-center max-w-7xl">
        <h2 className="mb-12 text-4xl font-extrabold sm:text-5xl">
          What People Say
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${
                darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 border-2 border-gray-300 rounded-full dark:border-gray-700"
                />
                <div className="text-left">
                  <h4 className="text-lg font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="relative">
                <FaQuoteLeft className="absolute left-0 text-3xl -top-4 text-cyan-500 dark:text-cyan-400" />
                <p className="pl-10 pr-6 mt-4 italic leading-relaxed">{testimonial.message}</p>
                <FaQuoteRight className="absolute bottom-0 right-0 text-3xl translate-x-4 translate-y-2 text-cyan-500 dark:text-cyan-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
