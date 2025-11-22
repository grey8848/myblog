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