import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Skills', path: '#skills' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contact', path: '#contact' },
];

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetId = path.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl font-bold text-primary" onClick={(e) => handleNavClick(e, '#home')}>
              DS
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`hover:text-primary transition-colors cursor-pointer ${
                    location.hash === item.path ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-light"
              >
                {isDark ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5 text-white" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <div
                className="md:hidden mt-4"
              >
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={(e) => handleNavClick(e, item.path)}
                      className={`hover:text-primary transition-colors cursor-pointer ${
                        location.hash === item.path ? 'text-primary' : ''
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                  <button
                    onClick={() => {
                      setIsDark(!isDark);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 hover:text-primary"
                  >
                    {isDark ? (
                      <>
                        <SunIcon className="w-5 h-5" />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <MoonIcon className="w-5 h-5" />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </div>
        </AnimatePresence>
      </main>

      <footer className="bg-white dark:bg-dark mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Deepankar Singh. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
} 