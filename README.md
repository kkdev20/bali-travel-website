# 🌴 Bali Travel Portfolio Website

A professional, modern portfolio website for Bali travel and tourism services built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Beautiful, tropical-themed design with smooth animations
- **Dark/Light Mode**: Fully functional theme toggle with smooth transitions
- **Responsive**: Optimized for mobile, tablet, and desktop
- **Animations**: Smooth scroll animations and hover effects using Framer Motion
- **SEO Optimized**: Meta tags, OpenGraph, and proper heading hierarchy
- **Performance**: Image optimization, lazy loading, and code splitting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Zustand** - State management (for theme)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── layout/             # Navbar, Footer, ThemeToggle, ScrollProgress
│   ├── sections/           # All page sections (Hero, About, etc.)
│   ├── ui/                 # Reusable UI components
│   └── providers/          # Theme provider
└── public/                 # Static assets
```

## 🎨 Sections

1. **Hero** - Full-screen hero with parallax effect and CTAs
2. **About** - Why choose us with value propositions
3. **Destinations** - Grid of popular destinations with filters
4. **Services** - Service cards and pricing tiers
5. **Testimonials** - Carousel with customer reviews
6. **Gallery** - Masonry grid with lightbox modal
7. **Contact** - Contact form and info cards with map

## 🌈 Theme Colors

### Light Mode
- Background: Warm whites
- Brand: Tropical greens, ocean blues, sunset oranges
- Text: Dark grays

### Dark Mode
- Background: Deep navy/charcoal
- Brand: Gold accents, teal highlights
- Text: Light grays

## 📝 Customization

### Update Content
- Edit destination data in `components/sections/Destinations.tsx`
- Modify services in `components/sections/Services.tsx`
- Update testimonials in `components/sections/Testimonials.tsx`

### Change Colors
- Update Tailwind config in `tailwind.config.ts`
- Modify CSS variables in `app/globals.css`

### Add Sections
- Create new section component in `components/sections/`
- Import and add to `app/page.tsx`

## 🚢 Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the MIT License.

