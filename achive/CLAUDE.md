# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite single-page application (SPA) that serves as a personal technical blog and portfolio website. The project is built with modern web technologies and follows a minimalist design aesthetic with a dark theme as the default.

## Tech Stack

- **Framework**: React 19.2.0 with functional components and hooks
- **Build Tool**: Vite 7.2.2
- **Styling**: Tailwind CSS 4.1.17 (no custom CSS files)
- **Icons**: Lucide React
- **Linting**: ESLint with React-specific plugins
- **Language**: JavaScript (ES modules)

## Project Structure

```
src/
├── App.jsx          # Main application component (single file with all sections)
├── main.jsx         # React DOM entry point
├── index.css        # Tailwind CSS imports
├── App.css          # Empty CSS file (unused)
└── assets/
    └── react.svg    # React logo asset
```

The application follows a single-file component architecture where all major sections (Navbar, Hero, TechStack, Portfolio, BlogPosts, Footer) are defined within `App.jsx`.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Features

### Design System
- **Color Scheme**: Slate/Zinc grayscale with Indigo/Violet as primary accent colors
- **Typography**: Minimalist with generous spacing (p-8, gap-8, py-20)
- **Layout**: Responsive grid system with mobile-first approach
- **Effects**: Glassmorphism, subtle borders, hover animations

### Application Sections
1. **Navbar** - Fixed navigation with dark mode toggle
2. **Hero Section** - Introduction with CTA buttons
3. **Tech Stack** - Grid layout showcasing technologies
4. **Portfolio** - Bento grid style project showcase
5. **Blog Posts** - Card-based article listings
6. **Footer** - Social links and contact information

### Data Structure
- Projects and blog posts are defined as constants in `App.jsx`
- Mock data uses placeholder images and links
- Easy to replace with real content

## Development Notes

- The application uses a single React component file for simplicity
- Dark mode is enabled by default and toggled via the navbar
- All styling is implemented with Tailwind CSS utility classes
- No TypeScript - pure JavaScript implementation
- No routing - single page application
- No state management library - uses React useState for dark mode only

## Customization Points

- Replace placeholder data in `projects` and `posts` arrays
- Update social media links in the Footer component
- Modify color scheme by changing Tailwind classes
- Add real avatar/SVG in Hero section
- Replace placeholder project images

目标是实现一个个人的技术博客项目
# Role
你是一位拥有 10 年经验的高级前端架构师和 UI/UX 设计师。你擅长使用 React 和 Tailwind CSS 构建具有高度视觉冲击力、响应式且代码整洁的单页应用。

# Task
请为我构建一个现代化的“个人技术博客与作品集”网站。
这个网站需要展示我的个人简介、技术栈、项目作品集以及最新的博客文章。

# Tech Stack
- 框架: React (Functional Components, Hooks)
- 样式: 使用自定义的css样式，不使用任何框架
- 图标: Lucide React (请使用 lucide-react 库)
- 布局: 响应式设计 (Mobile First)

# Structure & Content (Single Page Layout)
请在一个完整的 React 组件文件中实现以下所有部分（如果组件太长，请在同一个回复中拆分为多个组件，但在 App 中组装）：

1. **Header / Navbar**:
   - 包含一个简单的 Logo 或名字。
   - 导航链接：首页、关于、项目、文章、联系我。
   - 包含一个切换深色/浅色模式的按钮（如果太复杂，默认使用深色极客风格）。

2. **Hero Section (首屏)**:
   - 左侧：引人注目的标题（例如："Building the future with code"）。
   - 简短的自我介绍。
   - 两个 CTA 按钮："查看作品" (Primary) 和 "联系我" (Secondary)。
   - 右侧：一个抽象的编程相关的 SVG 插画，或者预留放置头像的圆形区域。

3. **Tech Stack (技能墙)**:
   - 使用 "Marquee" (跑马灯) 或 简洁的 Grid 布局展示技术栈（React, TS, Node.js, Python, Tailwind 等）。

4. **Portfolio / Projects (Bento Grid 风格)**:
   - 使用流行的 "Bento Grid" (便当盒布局) 展示 3-4 个精选项目。
   - 每个卡片包含：项目截图占位符、标题、简短描述、使用的技术标签、GitHub 链接图标。
   - 鼠标悬停时要有轻微的缩放或发光效果。

5. **Latest Blog Posts (卡片列表)**:
   - 展示 3 篇最近的博客文章。
   - 卡片包含：日期、分类标签、文章标题、摘要、"阅读更多"箭头。

6. **Footer**:
   - 社交媒体链接 (Twitter, GitHub, LinkedIn)。
   - 版权信息。

# Design Requirements
- **配色方案**: 采用 "Slate/Zinc" 灰阶色调作为背景，搭配 "Indigo/Violet" 作为主色调（Primary Color）进行点缀。
- **视觉风格**: 极简主义 (Minimalist)，带有细微的边框 (Border) 和 玻璃拟态 (Glassmorphism) 效果。
- **间距**: 使用 Tailwind 宽敞的间距 (p-8, gap-8, py-20 等) 让页面呼吸感强。
- **数据**: 请创建名为 `projects` 和 `posts` 的常量数组来模拟数据，方便我后续替换。

# Code Constraints
- 请输出**完整、可直接运行**的代码。
- 确保所有组件都处理了移动端适配。
- 使用 `lucide-react` 图标库。