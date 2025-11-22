import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer';

// Dummy Data ... (保持你的数据不变)
const projects = [ /* ... */ ];
const posts = [ /* ... */ ];

function App() {
  return (
    // ⚠️ 关键修改：
    // 1. 删除了 "dark" -> 防止强制深色模式
    // 2. 删除了 "bg-slate-900" -> 防止背景锁死为黑色
    // 3. 删除了 "text-zinc-100" -> 防止文字锁死为白色
    // 现在颜色完全由 index.css 中的 body 样式动态控制
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