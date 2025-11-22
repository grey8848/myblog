import React from 'react';
import { Wrench } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "Tailwind CSS",
    "Next.js", "GraphQL", "Docker", "AWS", "Figma", "MongoDB", "PostgreSQL"
  ];

  return (
    <section id="tech-stack" className="py-20 bg-slate-800 border-t border-b border-zinc-700">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">My <span className="text-indigo-400">Tech Stack</span></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-6 bg-zinc-700 bg-opacity-40 rounded-lg border border-zinc-600 shadow-xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:border-indigo-500"
            >
              <Wrench className="text-indigo-300 text-5xl mb-3" />
              <h3 className="text-lg font-semibold text-white">{tech}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;