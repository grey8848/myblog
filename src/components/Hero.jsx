import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => (
  <section id="home" className="relative bg-white pt-32 pb-20 md-pt-40 md-pb-32 overflow-hidden min-h-screen flex items-center transition-colors duration-300">
    {/* 背景光效 */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600-20 rounded-full blur-128px"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600-10 rounded-full blur-128px"></div>
    </div>

    <div className="container grid md-grid-cols-2 gap-12 items-center relative z-10">
      <div className="text-center md-text-left animate-fade-in-up">
        <div className="inline-block px-3 py-1 mb-6 border border-indigo-500-30 rounded-full bg-indigo-500-10">
            <span className="text-indigo-600 text-sm font-medium tracking-wide">🚀 Frontend Architect & Designer</span>
        </div>
        <h1 className="text-5xl md-text-7xl font-extrabold text-zinc-900 leading-tight mb-6 tracking-tight">
          Building the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Future</span> with Code.
        </h1>
        <p className="text-xl text-zinc-600 mb-8 max-w-lg mx-auto md-mx-0 leading-relaxed">
          Hi, I'm Grey. I craft high-performance, beautiful web experiences using modern technologies and minimalist design principles.
        </p>
        <div className="flex flex-col sm-flex-row justify-center md-justify-start gap-4">
          <a
            href="#projects"
            className="group px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500-25 hover-bg-indigo-700 hover-scale-105 transition-all duration-300 flex items-center justify-center"
          >
            View Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover-translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-zinc-300 text-zinc-700 font-semibold rounded-xl hover-border-indigo-500 hover-text-white hover-bg-indigo-600 transition-all duration-300 flex items-center justify-center"
          >
            <Mail className="mr-2 w-5 h-5" />
            Contact Me
          </a>
        </div>
      </div>

      <div className="flex justify-center md-justify-end relative">
        {/* 抽象编程 SVG 插画 */}
        <div className="relative w-full max-w-lg aspect-square">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl animate-float_6s_ease-in-out_infinite">
            {/* 主卡片背景 */}
            <rect x="50" y="80" width="300" height="240" rx="24" fill="#1e293b" stroke="#4f46e5" strokeWidth="2" className="opacity-90" />
            <rect x="50" y="80" width="300" height="240" rx="24" fill="url(#grad1)" fillOpacity="0.1" />

            {/* 顶部圆点 (Mac窗口风格) */}
            <circle cx="80" cy="110" r="6" fill="#ef4444" />
            <circle cx="100" cy="110" r="6" fill="#fbbf24" />
            <circle cx="120" cy="110" r="6" fill="#22c55e" />

            {/* 代码块模拟 */}
            <rect x="80" y="150" width="120" height="10" rx="5" fill="#6366f1" opacity="0.8" />
            <rect x="80" y="175" width="200" height="8" rx="4" fill="#94a3b8" opacity="0.3" />
            <rect x="80" y="195" width="180" height="8" rx="4" fill="#94a3b8" opacity="0.3" />
            <rect x="80" y="215" width="160" height="8" rx="4" fill="#94a3b8" opacity="0.3" />

            {/* 浮动元素 1: React Logo 抽象 */}
            <g transform="translate(280, 140)">
                <circle r="25" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                <ellipse cx="0" cy="0" rx="35" ry="12" stroke="#38bdf8" strokeWidth="1" transform="rotate(45)" opacity="0.6"/>
                <ellipse cx="0" cy="0" rx="35" ry="12" stroke="#38bdf8" strokeWidth="1" transform="rotate(-45)" opacity="0.6"/>
            </g>

            {/* 浮动元素 2: 成功提示 */}
            <g transform="translate(300, 280)">
                <rect x="-60" y="-20" width="120" height="50" rx="12" fill="#0f172a" stroke="#22c55e" strokeWidth="2" />
                <text x="-35" y="12" fill="#22c55e" fontFamily="monospace" fontSize="14" fontWeight="bold">Success!</text>
            </g>

            <defs>
              <linearGradient id="grad1" x1="50" y1="80" x2="350" y2="320" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4f46e5" stopOpacity="0.2"/>
                <stop offset="1" stopColor="#818cf8" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>

          {/* 背景装饰圆 */}
          <div className="absolute -z-10 top-10 right-10 w-32 h-32 bg-indigo-500-30 rounded-full blur-2xl animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;