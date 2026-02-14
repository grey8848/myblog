import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

// Extended blog post data with full content
const blogPostsData = {
  1: {
    id: 1,
    date: "2025-10-26",
    category: "Web Development",
    title: "Mastering React Hooks: A Deep Dive",
    summary: "Explore advanced patterns and best practices for using React Hooks to build robust applications.",
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks revolutionized how we write React components by allowing us to use state and other React features without writing classes. In this comprehensive guide, we'll explore advanced patterns and best practices.</p>

      <h3>Understanding useState and useEffect</h3>
      <p>The useState hook is fundamental for managing component state, while useEffect handles side effects. Let's look at some advanced patterns:</p>

      <pre><code>const [state, setState] = useState(initialState);

useEffect(() => {
  // Side effect logic here
  return () => {
    // Cleanup logic
  };
}, [dependencies]);</code></pre>

      <h3>Custom Hooks for Reusability</h3>
      <p>Custom hooks allow you to extract component logic into reusable functions. Here's an example of a custom hook for API calls:</p>

      <pre><code>function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}</code></pre>

      <h3>Performance Optimization</h3>
      <p>Use useCallback and useMemo to optimize performance by memoizing functions and values:</p>

      <pre><code>const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);</code></pre>

      <h2>Conclusion</h2>
      <p>Mastering React Hooks is essential for modern React development. By understanding these patterns and best practices, you can write more maintainable and performant applications.</p>
    `
  },
  2: {
    id: 2,
    date: "2025-09-15",
    category: "DevOps",
    title: "CI/CD with GitHub Actions: A Practical Guide",
    summary: "Learn how to set up continuous integration and deployment pipelines with GitHub Actions.",
    content: `
      <h2>Getting Started with GitHub Actions</h2>
      <p>GitHub Actions provides a powerful platform for automating your software development workflows. In this guide, we'll walk through setting up a complete CI/CD pipeline.</p>

      <h3>Basic Workflow Structure</h3>
      <p>Every GitHub Actions workflow is defined in a YAML file in your repository's .github/workflows directory:</p>

      <pre><code>name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test</code></pre>

      <h3>Advanced Deployment Strategies</h3>
      <p>Learn how to deploy your applications to various platforms like Vercel, Netlify, or AWS:</p>

      <pre><code>deploy:
  needs: build
  runs-on: ubuntu-latest
  if: github.ref == 'refs/heads/main'
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
    - run: npm ci
    - run: npm run build
    - name: Deploy to Vercel
      uses: vercel/action@v1
      with:
        vercel-token: \${{ secrets.VERCEL_TOKEN }}</code></pre>

      <h2>Best Practices</h2>
      <p>Follow these best practices to ensure your CI/CD pipeline is efficient and secure:</p>
      <ul>
        <li>Use environment-specific secrets</li>
        <li>Implement proper caching strategies</li>
        <li>Set up proper branch protection rules</li>
        <li>Use matrix builds for multi-platform testing</li>
      </ul>
    `
  },
  3: {
    id: 3,
    date: "2025-08-01",
    category: "AI/ML",
    title: "Introduction to Large Language Models",
    summary: "An overview of LLMs, their architecture, applications, and future trends.",
    content: `
      <h2>What are Large Language Models?</h2>
      <p>Large Language Models (LLMs) are AI systems trained on vast amounts of text data to understand and generate human-like text. They represent a significant advancement in natural language processing.</p>

      <h3>Architecture Overview</h3>
      <p>Most modern LLMs are based on the Transformer architecture, which uses self-attention mechanisms to process sequences of text:</p>

      <pre><code># Simplified Transformer architecture
class Transformer(nn.Module):
    def __init__(self, vocab_size, d_model, nhead, num_layers):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, d_model)
        self.positional_encoding = PositionalEncoding(d_model)
        self.encoder_layers = nn.ModuleList([
            TransformerEncoderLayer(d_model, nhead)
            for _ in range(num_layers)
        ])
        self.decoder = nn.Linear(d_model, vocab_size)</code></pre>

      <h3>Key Applications</h3>
      <p>LLMs have numerous practical applications across various domains:</p>
      <ul>
        <li><strong>Content Generation:</strong> Writing articles, code, and creative content</li>
        <li><strong>Question Answering:</strong> Providing accurate responses to user queries</li>
        <li><strong>Code Assistance:</strong> Helping developers write and debug code</li>
        <li><strong>Language Translation:</strong> Translating between different languages</li>
        <li><strong>Text Summarization:</strong> Condensing long documents into key points</li>
      </ul>

      <h3>Future Trends</h3>
      <p>The field of LLMs continues to evolve rapidly. Some emerging trends include:</p>
      <ul>
        <li>Multimodal models that process text, images, and audio</li>
        <li>More efficient training and inference methods</li>
        <li>Improved reasoning and planning capabilities</li>
        <li>Better alignment with human values and preferences</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Large Language Models represent a transformative technology with wide-ranging applications. As the field continues to advance, we can expect even more sophisticated and capable AI systems in the future.</p>
    `
  },
  4: {
    id: 4,
    date: "2025-07-01",
    category: "Backend Development",
    title: "backend Development with Node.js and Express",
    summary: "an in-depth look at building scalable backend services using Node.js and Express framework.",
    content: `
      <h2>Getting Started with Node.js and Express</h2>
      <p>Node.js is a powerful JavaScript runtime built on Chrome's V8 engine, while Express is a minimal and flexible Node.js web application framework. Together, they provide a robust platform for building backend services.</p>
      <h3>Setting Up Your Environment</h3>
      <p>To get started, ensure you have Node.js installed. Then, create a new project and install Express:</p>
      <pre><code>mkdir my-backend
        cd my-backend
        npm init -y
        npm install express</code></pre>`
  }
};

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = blogPostsData[id];

  if (!post) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="container text-center">
          <h1 className="text-2xl font-bold text-zinc-900 mb-4">文章未找到</h1>
          <Link to="/" className="text-indigo-600 hover:text-indigo-700">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-zinc-200 bg-white sticky top-0 z-10">
        <div className="container py-4">
          <Link
            to="/"
            className="inline-flex items-center text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            返回博客列表
          </Link>
        </div>
      </nav>

      {/* Article Content */}
      <article className="py-12">
        <div className="container max-w-4xl">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-zinc-500 text-sm mb-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-1" />
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full border border-indigo-200">
                  {post.category}
                </span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              {post.summary}
            </p>
          </header>

          {/* Article Body */}
          <div
            className="prose prose-lg max-w-none text-zinc-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-zinc-200">
            <div className="flex justify-between items-center">
              <Link
                to="/"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
              >
                <ArrowLeft size={18} className="mr-2" />
                返回博客列表
              </Link>
              <div className="text-sm text-zinc-500">
                发布于 {post.date}
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogPostDetail;