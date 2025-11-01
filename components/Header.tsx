import React from 'react';
import ThemeToggle from './ThemeToggle';
import { MenuIcon } from './icons';

const Header = () => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-light-card/50 dark:bg-dark-card/50 backdrop-blur-lg sticky top-0 z-50 border-b border-white/10 dark:border-white/5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-electric-violet rounded-lg flex items-center justify-center">
             <MenuIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold font-display text-light-text dark:text-dark-text">MenuVerse</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-light-subtle dark:text-dark-subtle">
          <a href="#contact-form" className="hover:text-light-text dark:hover:text-dark-text transition-colors">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a href="#pricing" className="hidden sm:inline-block px-5 py-2 text-sm font-semibold text-white bg-electric-violet rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-violet/50 focus:ring-offset-dark-bg transition-all">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;