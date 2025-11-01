import React from 'react';
import { useTheme } from './ThemeContext';
import { SunIcon, MoonIcon } from './icons';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-light-subtle dark:text-dark-subtle hover:text-light-text dark:hover:text-dark-text hover:bg-white/10 dark:hover:bg-white/5 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;