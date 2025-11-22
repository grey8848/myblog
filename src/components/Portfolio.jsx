import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Portfolio = ({ projects }) => (
  <section id="projects" className="py-24 bg-slate-900">
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Featured <span className="text-indigo-400">Work</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
          A selection of projects that showcase my passion for building digital products.
        </p>
      </div>
      
      {/* Bento Grid 核心逻辑: 使用 auto-rows 和 col-span 控制布局 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {projects.map((project, index) => {
          // 简单的 Bento 逻辑：第1个和第4个项目跨2列，营造错落感
          const isLarge = index === 0 || index === 3;
          
          return (
            <div
              key={project.id}
              className={`
                group relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900
                ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}
                hover:border-indigo-500/50 transition-all duration-500
              `}
            >
              {/* 背景图 + 遮罩 */}
              <div className="absolute inset-0">
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
              </div>
  
              {/* 内容层 */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <a href={project.github} target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-indigo-600 text-white transition-colors">
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                  
                  <p className="text-zinc-300 mb-4 line-clamp-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-indigo-950/50 backdrop-blur-md text-indigo-200 text-xs font-medium rounded-full border border-indigo-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Portfolio;