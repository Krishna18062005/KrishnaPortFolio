import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../utils/ThemeContext';

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm shadow-md py-3' : 'py-5'
    }`}>
      <div className="container flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xl">
            K
          </div>
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
            Krishna K
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-1"
        >
          <a href="#about" className="nav-link">About</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#achievements" className="nav-link">Achievements</a>
        </motion.nav>

        <div className="flex items-center gap-2">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="md:hidden p-2 rounded-full hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-dark-800 shadow-lg"
        >
          <nav className="container py-4 flex flex-col">
            <a href="#about" className="nav-link py-3" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#education" className="nav-link py-3" onClick={() => setIsMenuOpen(false)}>Education</a>
            <a href="#skills" className="nav-link py-3" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" className="nav-link py-3" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#achievements" className="nav-link py-3" onClick={() => setIsMenuOpen(false)}>Achievements</a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
