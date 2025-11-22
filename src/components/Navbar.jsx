import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react'; // 引入 Menu 和 X 图标

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 新增：控制菜单开关的状态

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // 点击链接后自动关闭菜单
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-zinc-800 bg-slate-900/90 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
            Grey<span className="text-indigo-500">.dev</span>
          </span>
        </a>
        
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-zinc-400 hover:text-indigo-400 focus:outline-none p-2 rounded-lg transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* 移动端汉堡菜单按钮 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-400 rounded-lg md:hidden hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 菜单列表 - 添加了 hidden/block 的逻辑 */}
        <div 
          className={`${isMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} 
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-zinc-800 rounded-lg bg-zinc-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {['Home', 'Projects', 'Tech Stack', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={handleLinkClick}
                  className="block py-2 px-3 text-zinc-300 rounded hover:bg-zinc-800 md:hover:bg-transparent md:hover:text-indigo-400 md:p-0 transition-colors"
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