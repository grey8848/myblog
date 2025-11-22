import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Portfolio = ({ projects }) => (
  <section id="projects" className="py-24 bg-slate-900">
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-indigo-400">Work</span></h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          A collection of projects where design meets functionality.
        </p>
      </div>
      
      {/* Bento Grid Layout: 使用 md:col-span-2 让特定卡片跨列 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`
              group relative rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700/50
              ${index === 0 || index === 3 ? 'md:col-span-2' : 'md:col-span-1'} 
              hover:border-indigo-500/50 transition-all duration-500
            `}
          >
            {/* 图片区域 - 带有渐变遮罩 */}
            <div className="absolute inset-0">
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-90"></div>
            </div>

            {/* 内容区域 - 浮在图片之上 */}
            <div className="relative h-full p-8 flex flex-col justify-end z-10">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-300 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white/10 backdrop-blur-sm text-indigo-200 text-xs font-medium rounded-full border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                   <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-indigo-400 font-medium"
                  >
                    <Github size={18} className="mr-2" /> Code
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-white hover:text-indigo-400 font-medium"
                  >
                    <ExternalLink size={18} className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;