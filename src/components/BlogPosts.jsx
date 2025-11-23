import React from 'react';
import { ArrowRight } from 'lucide-react';

const BlogPosts = ({ posts }) => (
  <section id="blog" className="py-20 bg-zinc-50 border-t border-zinc-200 transition-colors duration-300">
    <div className="container">
      <h2 className="text-3xl md-text-4xl font-bold text-zinc-900 text-center mb-12">Latest <span className="text-indigo-600">Blog Posts</span></h2>
      <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl border border-zinc-200 p-6 shadow-lg
                       transform transition-all duration-300 hover-scale-1.02 hover-shadow-indigo-500-20"
          >
            <div className="flex justify-between items-center mb-4 text-zinc-500 text-sm">
              <span>{post.date}</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full border border-indigo-200">
                {post.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">{post.title}</h3>
            <p className="text-zinc-600 mb-4">{post.summary}</p>
            <a href={post.link} className="inline-flex items-center text-indigo-600 hover-text-indigo-700 font-semibold">
              阅读更多 <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPosts;