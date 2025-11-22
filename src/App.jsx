import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer';

// Dummy Data (保持不变)
const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A comprehensive web application built with React and Node.js.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-alpha",
    image: "https://placehold.co/400x250/1e293b/a78bfa?text=Project+Alpha",
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Mobile-first e-commerce site with a modern UI/UX.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "https://github.com/yourusername/project-beta",
    image: "https://placehold.co/400x250/1e293b/a78bfa?text=Project+Beta",
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "A data visualization dashboard using D3.js and React.",
    tech: ["React", "D3.js", "Python", "Flask"],
    github: "https://github.com/yourusername/project-gamma",
    image: "https://placehold.co/400x250/1e293b/a78bfa?text=Project+Gamma",
  },
  {
    id: 4,
    title: "Project Delta",
    description: "A CLI tool for developer productivity written in Go.",
    tech: ["Go", "CLI", "Shell Scripting"],
    github: "https://github.com/yourusername/project-delta",
    image: "https://placehold.co/400x250/1e293b/a78bfa?text=Project+Delta",
  },
];

const posts = [
  {
    id: 1,
    date: "2025-10-26",
    category: "Web Development",
    title: "Mastering React Hooks: A Deep Dive",
    summary: "Explore advanced patterns and best practices for using React Hooks to build robust applications.",
    link: "#",
  },
  {
    id: 2,
    date: "2025-09-15",
    category: "DevOps",
    title: "CI/CD with GitHub Actions: A Practical Guide",
    summary: "Learn how to set up continuous integration and deployment pipelines with GitHub Actions.",
    link: "#",
  },
  {
    id: 3,
    date: "2025-08-01",
    category: "AI/ML",
    title: "Introduction to Large Language Models",
    summary: "An overview of LLMs, their architecture, applications, and future trends.",
    link: "#",
  },
];

function App() {
  return (
    // 🚨🚨 核心修改：这里删除了 "dark" 和 "bg-slate-900" 🚨🚨
    // 之前的代码是: className="dark antialiased min-h-screen bg-slate-900 ..."
    // 现在的代码是:
    <div className="antialiased min-h-screen font-sans transition-colors duration-300">
      <Navbar />
      <Hero />
      <TechStack />
      <Portfolio projects={projects} />
      <BlogPosts posts={posts} />
      <Footer />
    </div>
  );
}

export default App;