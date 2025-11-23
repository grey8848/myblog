import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => (
  <footer id="contact" className="bg-white py-12 border-t border-zinc-200 transition-colors duration-300">
    <div className="container text-center">
      <h2 className="text-3xl md-text-4xl font-bold text-zinc-900 mb-8">Let's <span className="text-indigo-600">Connect</span></h2>
      <div className="flex justify-center gap-6 mb-8">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover-text-indigo-600 transition-colors duration-300">
          <Github size={32} />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover-text-indigo-600 transition-colors duration-300">
          <Twitter size={32} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover-text-indigo-600 transition-colors duration-300">
          <Linkedin size={32} />
        </a>
      </div>
      <p className="text-zinc-600 text-sm">&copy; {new Date().getFullYear()} YourName. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;