import React from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Layout, 
  Terminal, 
  Globe, 
  Cpu, 
  Layers 
} from 'lucide-react';

const TechStack = () => {
  // 手动映射技术到图标，增加辨识度
  const getIcon = (techName) => {
    const lower = techName.toLowerCase();
    if (lower.includes('react') || lower.includes('vue')) return <Code />;
    if (lower.includes('node') || lower.includes('express')) return <Server />;
    if (lower.includes('mongo') || lower.includes('sql')) return <Database />;
    if (lower.includes('css') || lower.includes('tailwind')) return <Layout />;
    if (lower.includes('next') || lower.includes('web')) return <Globe />;
    if (lower.includes('docker') || lower.includes('aws')) return <Layers />;
    if (lower.includes('python') || lower.includes('go')) return <Cpu />;
    return <Terminal />;
  };

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "Tailwind CSS",
    "Next.js", "GraphQL", "Docker", "AWS", "Figma", "MongoDB", "PostgreSQL"
  ];

  return (
    <section id="tech-stack" className="py-24 bg-zinc-50 dark:bg-slate-800/50 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-16">
          My <span className="text-indigo-600 dark:text-indigo-400">Tech Stack</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group p-6 bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 hover:border-indigo-500 dark:hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-zinc-800 transition-all duration-300 flex flex-col items-center justify-center gap-4 shadow-sm"
            >
              <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 group-hover:scale-110 transition-all duration-300">
                {/* 动态渲染大小为 32px 的图标 */}
                {React.cloneElement(getIcon(tech), { size: 32 })}
              </div>
              <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">{tech}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;