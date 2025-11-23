import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'system';
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const removeDark = () => root.classList.remove('dark');
    const applyDark = () => root.classList.add('dark');

    localStorage.setItem('theme', theme);

    const applyTheme = () => {
      if (theme === 'dark') {
        applyDark();
      } else if (theme === 'light') {
        removeDark();
      } else if (theme === 'system') {
        if (mediaQuery.matches) {
          applyDark();
        } else {
          removeDark();
        }
      }
    };

    applyTheme();

    const handleSystemChange = (e) => {
      if (theme === 'system') {
        if (e.matches) applyDark();
        else removeDark();
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return <Sun size={20} />;
      case 'dark': return <Moon size={20} />;
      case 'system': return <Monitor size={20} />;
      default: return <Sun size={20} />;
    }
  };

  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-b border-zinc-200 dark:border-zinc-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-zinc-800 dark:text-indigo-400">Jack Blog</span>
        </a>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse items-center">
          <div className="hidden md:flex items-center space-x-2 text-sm text-zinc-500 dark:text-zinc-400">
            <span>Theme:</span>
            <span className="font-medium">{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
          </div>
          <button
            onClick={toggleTheme}
            className="text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none p-2 rounded-lg transition-colors relative group"
            aria-label="Toggle theme"
          >
            {getThemeIcon()}
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-slate-800 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 dark:text-zinc-400 rounded-lg md:hidden hover:bg-zinc-100 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-600"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-zinc-200 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 px-3 text-zinc-600 dark:text-zinc-400 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 md:hover:bg-transparent md:hover:text-indigo-600 md:dark:hover:text-indigo-400 md:p-0 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;