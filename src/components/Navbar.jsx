import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // 新增：控制菜单开关

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // 点击链接后自动关闭菜单
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-zinc-800 bg-slate-900/90 backdrop-blur-md transition-all duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            G
          </div>
          <span className="self-center text-xl font-bold whitespace-nowrap text-white tracking-tight">
            Grey<span className="text-indigo-400">.dev</span>
          </span>
        </a>
        
        <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-zinc-400 hover:text-yellow-400 hover:bg-zinc-800 focus:outline-none p-2 rounded-lg transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* 移动端菜单按钮 - 修复交互 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-zinc-400 rounded-lg md:hidden hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-zinc-800 rounded-xl bg-zinc-900/50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="block py-2 px-3 text-zinc-400 rounded hover:bg-zinc-800 md:hover:bg-transparent md:hover:text-indigo-400 md:p-0 transition-colors duration-300"
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