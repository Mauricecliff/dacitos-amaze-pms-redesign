# Amaze PMS — Premium Website Redesign

> **Dacitos Technologies Pvt. Ltd. — Web Developer / UI Developer Hiring Assessment**

A world-class, premium SaaS-grade redesign of [AmazePMS.com](https://www.amazepms.com) — India's premier integrated facility management company.

---

## 🎯 Project Overview

This project is a complete **UX audit + full redesign** of the AmazePMS website, transforming it from a basic informational site into a premium, modern, enterprise-quality web experience.

### Business Context
**Amaze PMS Pvt Ltd** is a Property Management division of the Action Group of Companies, founded in 2001. They provide comprehensive integrated facility management services across India — including Security, Housekeeping, MEP, Pest Control, Gardening, Swimming Pool Maintenance, and more — serving **100+ clients** with a **15,000+ professional** workforce managing **20M+ sq ft** of premium properties.

---

## 🏆 UX Audit Summary

### Strengths of the Original Site
- Clear service categories
- Comprehensive client list
- Strong business credentials

### Problems Identified & Solutions Implemented

| Problem | Solution |
|---|---|
| No animations or interactions | Framer Motion + GSAP scroll animations |
| Poor visual hierarchy | Redesigned typography scale and layout grid |
| No hero section | Premium hero with animated dashboard, floating cards, parallax |
| Static, outdated design | Dark glassmorphism design language |
| Poor mobile experience | Fully responsive, mobile-first layout |
| No statistics section | Animated CountUp stats section |
| No testimonials | Rotating testimonial carousel |
| No client marquee | Auto-scrolling client brand strip |
| No FAQ section | Animated accordion FAQ |
| No careers section | Career benefits + open positions |
| Dead navigation links | Smooth-scroll SPA navigation |
| No CTAs | Multiple contextual conversion CTAs |
| Poor SEO | Meta tags, OG tags, structured data |
| No smooth scrolling | Lenis smooth scroll integration |

---

## ✨ Features

### Design System
- **Dark theme** with deep navy backgrounds (`#030712`)
- **Glassmorphism** cards with `backdrop-filter: blur()`
- **Blue gradient** accent color palette
- **Inter** typeface for optimal readability
- **Consistent spacing** scale using Tailwind utilities
- **Grid + dot patterns** for depth and texture
- **Glow effects** for interactive elements

### Animations
- **Hero**: Mouse parallax floating cards, animated dashboard, scroll fade
- **Stats**: CountUp number animations on scroll entry
- **Services**: Stagger reveal, hover lift, modal detail overlays
- **Industries**: Interactive tab switching with animated transitions
- **Clients**: Auto-scrolling marquee in both directions
- **Testimonials**: Auto-advancing carousel with manual navigation
- **FAQ**: Smooth accordion with AnimatePresence
- **Global**: Lenis smooth scrolling, scroll-triggered reveals

### Sections
1. **Navbar** — Transparent → glass on scroll, dropdown menus, mobile drawer
2. **Hero** — Full-screen, animated dashboard preview, floating stat cards, parallax
3. **Stats** — 6 animated counters (20M sq ft, 15K+ staff, 100+ clients, etc.)
4. **Services** — 12 service cards with modal detail views
5. **About** — Company history, highlights, team photo, values
6. **Industries** — 6 sectors with interactive tab + client list
7. **Strength** — 8 differentiators + 4-stage onboarding process + audit framework
8. **Testimonials** — 4 client testimonials with auto-carousel
9. **Clients** — Animated marquee + 100+ client grid
10. **Careers** — Benefits + welfare program + open positions
11. **FAQ** — 6 accordion items
12. **CTA** — Contact + location + phone + email
13. **Footer** — Full footer with navigation, presence, contact

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** (App Router) | Framework, SSG, routing |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | UI animations, scroll effects, transitions |
| **Lenis** | Smooth scrolling |
| **GSAP** | Advanced animation (available) |
| **Lucide React** | Icon library |
| **React CountUp** | Animated number counters |
| **React Intersection Observer** | Scroll-triggered animations |
| **PostgreSQL + Drizzle ORM** | Database (health check endpoint) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/health/       # Health check endpoint
│   ├── globals.css       # Design system, animations, utilities
│   ├── layout.tsx        # Root layout with metadata & SEO
│   └── page.tsx          # Main page orchestration
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Sticky navigation with mobile drawer
│   │   ├── Footer.tsx    # Full footer
│   │   └── SmoothScroll.tsx  # Lenis wrapper
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── IndustriesSection.tsx
│   │   ├── StrengthSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ClientsSection.tsx
│   │   ├── CareersSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       ├── Button.tsx    # Reusable button with variants
│       ├── Badge.tsx     # Pill badges
│       ├── GlassCard.tsx # Glassmorphism card
│       └── SectionLabel.tsx  # Section eyebrow labels
├── data/
│   └── index.ts         # All content data (services, clients, stats, etc.)
├── hooks/
│   ├── useLenis.ts       # Lenis smooth scroll hook
│   ├── useScrollAnimation.ts  # Intersection observer hook
│   └── useMouseParallax.ts   # Mouse parallax effect hook
├── lib/
│   └── utils.ts         # cn() utility
└── types/
    └── index.ts         # TypeScript interfaces
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd amaze-pms-redesign

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your DATABASE_URL

# Apply database schema
npx drizzle-kit push

# Start development server
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

---

## 🎨 Design Decisions

### Dark Theme
Chosen to convey **premium, modern, enterprise** quality — consistent with Linear, Vercel, and Framer's design language. Creates strong contrast for animated elements and glassmorphism effects.

### Glassmorphism
Used strategically for cards, navigation, and overlays. The `backdrop-filter: blur()` creates depth without heavy backgrounds, keeping the interface clean.

### Animation Philosophy
- **Purposeful**: Every animation improves comprehension or delight
- **Performant**: CSS transforms only, no layout-triggering animations
- **Progressive**: Animations degrade gracefully without JS
- **Respectful**: Smooth, never jarring or excessive

### Typography Scale
- Headlines: `font-black` (900 weight) for maximum impact
- Body: Regular (400) with generous line-height for readability
- Labels: Uppercase, tracked, small — for hierarchy

---

## 📊 Performance Strategy

- Static generation for main page
- Lazy-loaded sections via `react-intersection-observer`
- CSS animations using GPU-accelerated transforms
- Next.js Image optimization for all images
- Font preloading with `display: swap`
- Code splitting per route

---

## ♿ Accessibility

- Semantic HTML5 elements (`nav`, `main`, `section`, `footer`)
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios ≥ 4.5:1
- Focus-visible styles
- Screen reader-friendly content structure

---

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm (640px)`, `md (768px)`, `lg (1024px)`, `xl (1280px)`
- Mobile navigation: Full-screen drawer
- Floating hero cards: Desktop only (`xl:`)
- Grid layouts: 1-col → 2-col → 3-col → 4-col

---

## 🌐 SEO

- Title and meta description optimized
- Open Graph and Twitter Card tags
- Structured data-ready markup
- Semantic heading hierarchy (H1 → H2 → H3)
- Alt text on all images
- Geographic keywords for local SEO

---

## 👨‍💻 Author

Built as part of the **Dacitos Technologies Pvt. Ltd.** Web Developer / UI Developer Hiring Assessment.

Demonstrates expertise in:
- Modern Frontend Development (Next.js App Router)
- Premium UI/UX Design (Glassmorphism, Dark Theme)
- Animation Engineering (Framer Motion, Lenis)
- TypeScript & Component Architecture
- Responsive Design & Accessibility
- Performance Optimization

---

*© 2024 Amaze Property Management Solutions Pvt Ltd. All rights reserved.*


## 🌐 Live Demo

Coming Soon

---

## 📸 Screenshots

Screenshots will be added upon completion.

---

## 📄 License

This repository was developed solely for the Dacitos Technologies Pvt. Ltd. technical assessment and portfolio purposes.

---

## 👨‍💻 Developer

**Maurice Oseh**

Frontend Developer | Next.js Developer

GitHub: https://github.com/Mauricecliff

LinkedIn: https://www.linkedin.com/in/oseh-maurice-537b2210a
