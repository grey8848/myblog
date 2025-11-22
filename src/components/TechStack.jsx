import React from 'react';
import { Code, Database, Layout, Server, Globe, Cpu, Terminal, Layers } from 'lucide-react';

const TechStack = () => {
  // 将技术栈分类并分配对应的图标
  const technologies = [
    { name: "React", icon: <Code /> },
    { name: "TypeScript", icon: <Terminal /> },
    { name: "Node.js", icon: <Server /> },
    { name: "Tailwind CSS", icon: <Layout /> },
    { name: "Next.js", icon: <Globe /> },
    { name: "PostgreSQL", icon: <Database /> },
    { name: "Docker", icon: <Layers /> },
    { name: "Python", icon: <Cpu /> },
  ];

  return (
    <section id="tech-stack" className="py-24 bg-slate-800/50 border-y border-zinc-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          My <span className="text-indigo-400">Tech Stack</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group p-6 bg-zinc-900/50 hover:bg-zinc-800 rounded-xl border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-default"
            >
              <div className="mb-4 p-3 rounded-full bg-indigo-500/10 text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-all duration-300">
                {React.cloneElement(tech.icon, { size: 32 })}
              </div>
              <h3 className="text-lg font-semibold text-zinc-300 group-hover:text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;