# 🏨 Aphrodite International Hotel Website

A stunning, luxury hotel website for **Aphrodite International Hotel** — a four-star hotel in the heart of Addis Ababa, Ethiopia. Built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion, featuring elegant animations, a gold-and-charcoal luxury color palette, and AI-generated imagery.

---

## ✨ Features

### Sections
- **Hero** — Full-screen auto-rotating slideshow with 3 slides, parallax overlay, and animated calls-to-action
- **Navigation** — Sticky navbar with transparent-to-solid scroll transition, mobile hamburger menu
- **About** — Hotel story, floating stats card (52+ rooms), feature badges (4-Star, Airport Shuttle, Safe & Secure, International Standard)
- **Rooms & Suites** — 4 room types with pricing, feature lists, and hover effects
- **Services** — Interactive tab navigation for 6 services (Restaurant & Bar, Conference & Events, Spa & Wellness, Fitness Center, Wedding Venue, Business Services)
- **Experience Counter** — Parallax stats section with key figures
- **Gallery** — Masonry grid layout with lightbox functionality
- **Testimonials** — Guest reviews with star ratings
- **Contact** — Working contact form with validation, Google Maps embed, all contact details
- **Footer** — 4-column layout with social links, services, quick links, and contact info

### Design & UX
- 🎨 Luxury **gold (#B8860B)**, **charcoal (#1A1A2E)**, and **cream (#FAF7F0)** color palette
- ✒️ **Playfair Display** serif for headings + **Inter** sans-serif for body text
- 🎬 **Framer Motion** animations — scroll reveals, hover effects, slide transitions
- 📱 Fully responsive across mobile, tablet, and desktop
- 🖼️ 12 AI-generated high-quality hotel images
- 🔤 Custom scrollbar, shimmer text effect, glass morphism, elegant hover underlines
- ♿ Semantic HTML with ARIA support for accessibility

---

## 🛏️ Room Types

| Room | Size | Bed | Price/Night |
|------|------|-----|-------------|
| Executive Suite | 75 sqm | King Bed | $135 |
| Deluxe Suite | 55 sqm | King Bed | $90 |
| Twin Room | 65 sqm | Twin Beds | $90 |
| Standard Room | 35 sqm | Queen Bed | $70 |

---

## 🧰 Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [TypeScript 5](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | UI component library |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [Lucide React](https://lucide.dev/) | Icon library |
| [z-ai-web-dev-sdk](https://www.npmjs.com/package/z-ai-web-dev-sdk) | AI image generation & web scraping |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ or [Bun](https://bun.sh/)
- npm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/let-it-be1221/aphrodite-hotel-website.git

# Navigate to the project directory
cd aphrodite-hotel-website

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start the development server
npm run dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── public/
│   └── images/               # AI-generated hotel images
│       ├── hotel-exterior.png
│       ├── executive-suite.png
│       ├── deluxe-suite.png
│       ├── twin-room.png
│       ├── standard-room.png
│       ├── hotel-lobby.png
│       ├── restaurant-bar.png
│       ├── conference-hall.png
│       ├── spa-wellness.png
│       ├── fitness-center.png
│       ├── wedding-venue.png
│       └── addis-skyline.png
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles & luxury theme
│   │   ├── layout.tsx         # Root layout with fonts
│   │   └── page.tsx           # Main page with all sections
│   ├── components/
│   │   └── ui/                # shadcn/ui components
│   ├── hooks/                 # Custom React hooks
│   └── lib/                   # Utility functions
├── prisma/                    # Database schema (if needed)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Gold | `#B8860B` | Primary accent, CTAs, highlights |
| Gold Light | `#D4A843` | Hover states, shimmer effects |
| Gold Dark | `#8B6508` | Active states, emphasis |
| Charcoal | `#1A1A2E` | Dark backgrounds, headings |
| Cream | `#FAF7F0` | Light backgrounds, sections |
| White | `#FFFFFF` | Cards, content areas |

---

## 📞 Hotel Contact Information

- **Address:** Kasanchis Business District, Guinea Conakry Street, Addis Ababa, Ethiopia
- **Phone:** +251 11 557 22 28 / 29
- **Mobile/WhatsApp:** +251 94 760 4545
- **Email:** info@aphroditeaddis.com
- **Reservations:** reservations@aphroditeaddis.com
- **Website:** [www.aphroditeaddis.com](https://www.aphroditeaddis.com/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <strong>Aphrodite International Hotel</strong><br>
  <em>Serving for Extraordinary Expectations</em>
</p>
