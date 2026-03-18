

# Mango Insurance — Landing Page & Quote Calculator

## Overview
A professional, trust-focused landing page with an interactive quote calculator for extended car warranties and GAP insurance. Designed to eventually integrate with a Shopify storefront.

---

## Page Structure

### 1. Sticky Header
- Mango Insurance logo (from uploaded file) on the left
- Navigation links: Products, About, For Car Owners, For Business
- "Get a Quote" CTA button in mango orange

### 2. Hero Section
- Full-width dark background (inspired by mangouw.eu) with a subtle car/city overlay
- Bold headline: **"Total Protection for Your Vehicle"**
- Subtext: "Extended warranties & GAP insurance — peace of mind starts here."
- Prominent **Quote Calculator Card** positioned as an elevated widget with an orange top-border accent

### 3. Quote Calculator Widget
A clean, single-card form with the following inputs:
- **Car Make** — searchable dropdown (e.g., BMW, Toyota, Audi, Mercedes, VW)
- **Car Model** — dependent dropdown that updates based on selected make
- **Year** — dropdown (2015–2025)
- **Engine Type** — select (Petrol, Diesel, Hybrid, Electric)
- **Current Vehicle Value (€)** — number input with formatting
- **"Calculate My Quote"** button with a shield icon

### 4. Loading & Results State
- On submit: 200ms transition to a **skeleton loading** state (3 pulsing card placeholders)
- After ~1.5s mock delay, display **3 pricing cards** in a responsive grid:
  - **Basic Warranty** — essential coverage, lowest price
  - **Premium Warranty** — comprehensive coverage, mid-tier, highlighted as **"Most Popular"** with an orange badge
  - **GAP Insurance** — total loss protection, highest value
- Each card shows: plan name, coverage highlights (checkmarks in emerald green), monthly price, and a prominent **"Add to Cart"** button
- Add to Cart buttons `console.log` the selected plan + dynamic price (Shopify-ready)

### 5. Trust & Social Proof Section
- Row of trust signals: shield icons, "Secure Checkout", "Licensed & Regulated", "24/7 Claims Support"
- Brief "How It Works" — 3 steps with icons: Get Quote → Choose Plan → Drive Protected

### 6. Footer
- "Powered by Fortegra" lockup
- Company info, links, and copyright
- Mango Insurance logo repeated

---

## Design Tokens
- **Primary accent:** `#FF9D00` (Mango Orange) for CTAs and active states
- **Background:** White `#FFFFFF` with `#F8FAFC` section layering
- **Text:** `#0F172A` headings, `#475569` body
- **Trust green:** `#10B981` for checkmarks and badges
- **Font:** Inter (Google Fonts)
- **Border radius:** 6–8px (professional, not playful)
- **Light theme only**

## Technical Notes
- All built with React + Tailwind CSS + shadcn/ui components
- Mock API function with configurable delay returning computed prices
- Responsive design (mobile-first)
- Shopify integration prep: button handlers ready for Storefront API wiring

