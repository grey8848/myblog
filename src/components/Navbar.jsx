import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor, Menu, X } from 'lucide-react';

const Navbar = () => {
  // 1. 初始化状态：优先读取 localStorage，没有则默认为 system
  const [theme,HZ] = useState(
    localStorage.getItem('theme') || 'system'
  );
  const [isOpen, setIsOpen] = useState(false);

  // 2. 监听 theme 变化并执行切换逻辑
  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const removeDark = () => root.classList.remove('dark');
    const applyDark = () => root.classList.add('dark');

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
    localStorage.setItem('theme', theme);

    const handleSystemChange = (e) => {
      if (theme === 'system') {
        if (e.matches) applyDark();
        else removeDark();
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [theme]);

  // 3. 切换按钮点击事件
  const toggleTheme = () => {
    if (theme === 'light') HZ('dark');
    else if (theme === 'dark') HZ('system');
    else HZ('light');
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
    // 关键修复：背景色不再写死 bg-slate-900，而是支持浅色模式 bg-white/90
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-2 group">
           <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            G
          </div>
          <span className="self-center text-xl font-bold whitespace-nowrap text-zinc-800 dark:text-white tracking-tight">
            Grey<span className="text-indigo-500 dark:text-indigo-400">.dev</span>
          </span>
        </a>
        
        <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse items-center">
          {/* 主题切换按钮 */}
          <button
            onClick={toggleTheme}
            className="text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none p-2 rounded-lg transition-colors relative group"
            aria-label="Toggle theme"
          >
            {getThemeIcon()}
            {/* Tooltip */}
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-slate-800 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </span>
          </button>

          {/* 移动端菜单按钮 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-zinc-500 dark:text-zinc-400 rounded-lg md:hidden hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-600"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-zinc-100 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
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