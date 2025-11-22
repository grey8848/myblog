import React from 'react';
import { ArrowRight } from 'lucide-react';

const BlogPosts = ({ posts }) => (
  <section id="blog" className="py-20 bg-slate-800 border-t border-zinc-700">
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Latest <span className="text-indigo-400">Blog Posts</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-zinc-800 bg-opacity-70 rounded-xl border border-zinc-700 p-6 shadow-xl
                       transform transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/30"
          >
            <div className="flex justify-between items-center mb-4 text-zinc-400 text-sm">
              <span>{post.date}</span>
              <span className="px-3 py-1 bg-indigo-600 bg-opacity-40 text-indigo-200 text-xs font-medium rounded-full border border-indigo-500">
                {post.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
            <p className="text-zinc-300 mb-4">{post.summary}</p>
            <a href={post.link} className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold">
              阅读更多 <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPosts;