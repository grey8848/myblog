import React from 'react';

const Hero = () => (
  <section id="home" className="relative bg-slate-900 py-20 md:py-32 flex items-center min-h-screen">
    <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Building the <span className="text-indigo-400">future</span> with code.
        </h1>
        <p className="text-xl text-zinc-300 mb-8 max-w-lg mx-auto md:mx-0">
          Hi, I'm [Your Name], a passionate frontend architect and UI/UX designer. I create impactful web experiences.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
          >
            查看作品
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-600 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300"
          >
            联系我
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        {/* Placeholder for SVG illustration or Avatar */}
        <div className="w-64 h-64 md:w-80 md:h-80 bg-zinc-800 rounded-full flex items-center justify-center border-4 border-indigo-500 shadow-2xl overflow-hidden">
          <span className="text-zinc-500 text-lg">Avatar/SVG Placeholder</span>
          {/* Alternatively, an SVG illustration */}
          {/* <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="160" height="160" rx="40" fill="#4f46e5" fill-opacity="0.2"/>
            <path d="M100 60 L140 100 L100 140 L60 100 Z" fill="#6366f1" fill-opacity="0.4"/>
            <circle cx="100" cy="100" r="30" fill="#818cf8" fill-opacity="0.6"/>
          </svg> */}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;