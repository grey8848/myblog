import React from 'react';
import { Github } from 'lucide-react';

const Portfolio = ({ projects }) => (
  <section id="projects" className="py-20 bg-slate-900">
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Featured <span className="text-indigo-400">Projects</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-zinc-800 bg-opacity-70 rounded-xl border border-zinc-700 overflow-hidden shadow-2xl
                       transform transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/30 group"
          >
            <div className="p-6">
              <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg mb-6 border border-zinc-600" />
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-zinc-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-600 bg-opacity-40 text-indigo-200 text-sm font-medium rounded-full border border-indigo-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                GitHub <Github size={18} className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;