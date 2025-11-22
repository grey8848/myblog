import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [darkMode, setDarkMode] = React.useState(true); // Default to dark mode

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-b border-zinc-700 bg-slate-900 bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-indigo-400">YourName</span>
        </a>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-zinc-400 hover:text-indigo-400 focus:outline-none p-2 rounded-lg"
            aria-label="Toggle dark/light mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-zinc-700 rounded-lg bg-zinc-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a href="#home" className="block py-2 px-3 text-zinc-400 rounded md:bg-transparent md:p-0 hover:text-indigo-400" aria-current="page">首页</a>
            </li>
            <li>
              <a href="#about" className="block py-2 px-3 text-zinc-400 rounded hover:bg-zinc-700 md:hover:bg-transparent md:hover:text-indigo-400 md:p-0">关于</a>
            </li>
            <li>
              <a href="#projects" className="block py-2 px-3 text-zinc-400 rounded hover:bg-zinc-700 md:hover:bg-transparent md:hover:text-indigo-400 md:p-0">项目</a>
            </li>
            <li>
              <a href="#blog" className="block py-2 px-3 text-zinc-400 rounded hover:bg-zinc-700 md:hover:bg-transparent md:hover:text-indigo-400 md:p-0">文章</a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-3 text-zinc-400 rounded hover:bg-zinc-700 md:hover:bg-transparent md:hover:text-indigo-400 md:p-0">联系我</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;