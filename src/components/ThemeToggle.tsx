import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button
      className="p-2 rounded bg-gray-300 dark:bg-gray-700"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <FaMoon/> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
