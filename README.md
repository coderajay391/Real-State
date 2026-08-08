# 🏠 RealEstate — Modern Real Estate Website

A fully responsive, modern, and professional real estate website built with **HTML5, CSS3, and Vanilla JavaScript**. RealEstate lets users browse luxury properties, filter listings in real time, save favorites, and explore detailed property pages — all wrapped in a polished, animated interface with dark/light mode support.

> "Find Your Dream Home With Confidence."

<image src="realstate1.png"></image>
<image src="realstate2.png"></image>
<image src="realstate3.png"></image>
<image src="realstate4.png"></image>
<image src="realstate5.png"></image>
<image src="realstate6.png"></image>

---

## ✨ Features

- **🏢 Multi-Page Layout** — Home, Properties, Property Details, About, Agents, and Contact pages.
- **🔍 Real-Time Search & Filtering** — Filter properties by keyword, city, property type, minimum bedrooms/bathrooms, and max price, with instant updates.
- **↕️ Sorting** — Sort listings by *Latest First*, *Price: Low to High*, or *Price: High to Low*.
- **❤️ Favorites / Wishlist** — Save and manage favorite properties, persisted in `localStorage` with a live badge counter.
- **🌙 Dark / Light Mode** — Toggleable theme with `localStorage` persistence and system preference detection.
- **📄 Detailed Property Pages** — Gallery with thumbnails, specs, amenities, floor plan, nearby facilities, location map, and agent inquiry sidebar.
- **👩‍💼 Agents Directory** — Browse agent profiles with contact cards and a contact modal.
- **📝 Form Validation** — Newsletters, contact, and inquiry forms with inline error messaging and toast notifications.
- **✨ Scroll Animations** — Intersection Observer-based reveal effects plus animated statistic counters.
- **🎠 Testimonials Slider** — Auto-sliding client reviews with dot navigation.
- **📱 Fully Responsive** — Mobile-friendly navigation (hamburger menu), sticky navbar, and responsive grids.
- **♿ Accessibility** — Semantic markup, ARIA labels, keyboard-friendly controls, and lazy-loaded images.

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `index.html` | Hero with search box, featured & latest properties, categories, why-choose-us, stats, testimonials, and newsletter. |
| **Properties** | `properties.html` | Full listing directory with advanced filters and sorting. |
| **Property Details** | `property-details.html` | Deep-dive into a single property including gallery, specs, amenities, and agent inquiry form. |
| **About** | `about.html` | Company story, mission & vision, timeline, and awards. |
| **Agents** | `agents.html` | Team of licensed real estate specialists with contact options. |
| **Contact** | `contact.html` | Contact form and company information. |

---

## 🛠 Tech Stack

- **HTML5** — Semantic page structure
- **CSS3** — Custom styling, design system, and responsive layouts
- **Vanilla JavaScript (ES Modules)** — App logic, filtering, animations, and interactivity
- **Vite** — Development server and multi-page build tooling
- **TypeScript** — Type checking for build configuration
- **Tailwind CSS** — Utility styling (via Vite plugin)
- **React** — Scaffolding for the project entry point
- **Font Awesome** — Icon library

---

## 📁 Project Structure

```
Real-State/
├── index.html               # Home page
├── properties.html          # Properties listing & filters
├── property-details.html    # Single property details view
├── about.html               # About the company
├── agents.html              # Agent directory
├── contact.html             # Contact page
├── package.json             # Dependencies & scripts
├── vite.config.ts           # Vite multi-page configuration
├── tsconfig.json            # TypeScript configuration
├── metadata.json            # Project metadata
├── assets/                  # Local media (realstate.mp4, screenshots)
├── css/
│   ├── style.css            # Main styles & design system
│   ├── responsive.css       # Responsive / breakpoint styles
│   └── animations.css       # Animation keyframes & utilities
├── js/
│   ├── app.js               # Global init, rendering, toasts, UI handlers
│   ├── properties-data.js   # Central property, category, agent, testimonial data
│   ├── filter.js            # Real-time search & filter engine
│   ├── favorites.js         # Favorites / wishlist (localStorage)
│   ├── darkmode.js          # Dark / light theme toggle
│   ├── validation.js        # Form validation
│   ├── slider.js            # Testimonials & gallery sliders
│   └── animations.js        # Scroll reveals & stat counters
└── src/
    ├── App.tsx              # React entry point
    ├── index.css
    └── main.tsx
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or later) and **npm** installed.

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd Real-State

# 2. Install dependencies
npm install
```

### Run in Development

Start the Vite development server (port `3000`):

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Lint / Type Check

```bash
npm run lint
```

---

## 🧩 How It Works

### Data Source
All property, category, agent, and testimonial data lives in a single module: **`js/properties-data.js`**. The app imports this data and renders cards, details, and filters dynamically.

### Filtering
The **`js/filter.js`** module listens to filter inputs and re-renders the property grid in real time. It supports keyword, city, type, bedrooms, bathrooms, max price, and sorting. Filters can also be pre-filled via URL query parameters (e.g., `properties.html?type=Villa`).

### Favorites
The **`js/favorites.js`** module stores a list of favorite property IDs in `localStorage` under the key `realestate_favorites`. The heart badge in the navbar updates live, and a modal lists all saved properties.

### Theming
The **`js/darkmode.js`** module toggles the `data-theme` attribute on the `<html>` element and persists the user's choice in `localStorage`.

---

## 🎨 Customization

### Add / Edit Properties
Open **`js/properties-data.js`** and modify the `propertiesData` array. Each property supports:

```js
{
  id: 1,
  title: "Grand Azure Sunset Villa",
  type: "Villa",
  status: "For Sale",
  price: "$2,850,000",
  priceValue: 2850000,
  address: "742 Evergreen Terrace, Beverly Hills",
  city: "Los Angeles",
  bedrooms: 5,
  bathrooms: 6,
  area: 5800,
  builtYear: 2023,
  garage: 3,
  featured: true,
  latest: true,
  image: "https://...",
  gallery: ["https://...", "https://..."],
  description: "...",
  amenities: ["Infinity Pool", "Smart Home", ...],
  floorPlanImage: "https://...",
  nearby: { schools: "...", hospitals: "...", shopping: "...", airport: "..." },
  agent: {
    id: 101,
    name: "Sophia Martinez",
    role: "Luxury Property Specialist",
    phone: "+1 (310) 892-3341",
    email: "sophia.m@realestate.com",
    avatar: "https://...",
    experience: "8+ Years",
    rating: 4.9,
    propertiesCount: 24
  }
}
```

### Styling
- **Colors, spacing, and design tokens** — `css/style.css` (CSS custom properties / variables).
- **Responsive behavior** — `css/responsive.css`.
- **Animations** — `css/animations.css`.

---

## 📄 License

This project is provided for educational and demonstration purposes. All rights reserved to the respective owners of the assets and content used.
