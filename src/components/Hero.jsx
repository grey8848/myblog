import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => (
  <section id="home" className="relative bg-slate-900 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center">
    <div className="w-64 h-64 ... overflow-hidden">
  <img 
    src="https://api.dicebear.com/9.x/notionists/svg?seed=MyBlog" 
    alt="Avatar" 
    className="w-full h-full object-cover"
  />
</div>
    {/* 背景装饰光晕 */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]"></div>
    </div>

    <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div className="text-center md:text-left">
        <div className="inline-block mb-4 px-3 py-1 border border-indigo-500/30 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium">
          Available for hire
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Building the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">future</span> with code.
        </h1>
        <p className="text-xl text-zinc-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Hi, I'm Grey. A passionate frontend architect creating performant, responsive, and beautiful web experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="group px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/25 hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center"
          >
            查看作品
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-zinc-600 text-zinc-300 font-semibold rounded-full hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <Mail className="mr-2 w-5 h-5" />
            联系我
          </a>
        </div>
      </div>
      
      <div className="flex justify-center md:justify-end">
        {/* 抽象 SVG 插画 */}
        <div className="relative w-full max-w-md aspect-square">
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]">
              <circle cx="200" cy="200" r="180" fill="url(#paint0_radial)" fillOpacity="0.1" />
              <rect x="80" y="80" width="240" height="240" rx="20" fill="#1e293b" stroke="#4f46e5" strokeWidth="4" />
              {/* Code Lines */}
              <rect x="110" y="120" width="100" height="12" rx="6" fill="#6366f1" />
              <rect x="110" y="150" width="180" height="12" rx="6" fill="#334155" />
              <rect x="110" y="180" width="140" height="12" rx="6" fill="#334155" />
              <rect x="110" y="210" width="160" height="12" rx="6" fill="#334155" />
              <rect x="110" y="250" width="80" height="24" rx="8" fill="#4f46e5" />
              {/* Floating Elements */}
              <circle cx="340" cy="100" r="30" fill="#818cf8" fillOpacity="0.8" className="animate-[pulse_3s_infinite]" />
              <rect x="40" y="260" width="60" height="60" rx="12" fill="#2dd4bf" fillOpacity="0.8" transform="rotate(-15 70 290)" />
              <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(90) scale(180)">
                  <stop stopColor="#4f46e5" />
                  <stop offset="1" stopColor="#4f46e5" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;