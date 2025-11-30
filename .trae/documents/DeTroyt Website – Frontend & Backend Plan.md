## Goals & Principles

* Create an immersive, fast, and mobile-first experience that exceeds typical portfolio sites

* Showcase services, work history, collaborations, certifications, media, and merch

* Maintain sub‑second interactions through static generation, CDN, and careful media optimization

* Respect autoplay/browser policies; use tasteful audio-reactive visuals and progressive enhancement

## Tech Stack

* Frontend: Next.js (App Router, Server Components), TypeScript, Tailwind CSS (or CSS Modules), Framer Motion for animation, optional Three.js (hero effect) with graceful fallback

* Media: Cloudinary for high‑res images/videos delivery (automatic responsive formats), SoundCloud embeds for audio

* Backend: Next.js API routes, SendGrid (or AWS SES) for email, Supabase Postgres for structured data (products, orders, messages)

* Payments: PayPal Checkout (Smart Buttons), Orders API + server capture

* Hosting & CDN: Vercel (Edge caching, Image Optimization, HTTP/3)

* CMS: Sanity (or Contentful) for content (bio, timeline, gigs, certifications, collaborations, media links)

## Information Architecture

* `/` Home: immersive hero (logo + full‑screen image/video), audio‑reactive or subtle motion, creative nav

* `/career` Journey & Experience: timeline, resume download, services summary

* `/work` Scope: collaborations, gigs/events, training & certifications

* `/gallery` Visuals & Audio: dynamic grid/lightbox, SoundCloud integration, optional intro audio on click

* `/contact` Form: booking inquiry; delivers email to `mr.troymgardner@gmail.com`

* `/shop` Merchandise & audio products: cart‑less quick checkout via PayPal buttons; secure digital delivery

* Utility: `/privacy`, `/terms`, `/sitemap.xml`, `/robots.txt`

## Visual Design & UX

* Brand: dark, modern palette with neon accents; typographic hierarchy for professional feel

* Navigation: creative radial or orbital menu on desktop; compact bottom dock on mobile; always accessible

* Motion: parallax on scroll, hover micro‑interactions, GSAP/Framer Motion for buttery transitions

* Accessibility: semantic HTML, keyboard navigation, focus states, color contrast compliance

## Feature Blueprint

* Home

  * Full‑bleed hero image/video with overlay logo

  * Optional Three.js particle field reacting to audio amplitude (fallback to CSS motion)

  * Quick links: Services, Work, Gallery, Shop, Contact

* Career

  * Interactive timeline (company, role, dates, achievements)

  * Resume download button (PDF served via CDN)

  * Services cards with CTA to Contact

* Work

  * Cards for collaborations with logos, testimonials

  * Gigs/events list with filters (type, year)

  * Certifications grid with issuing body, validity

* Gallery

  * Masonry grid with lazy‑loaded media; lightbox with video playback

  * SoundCloud embed (playlist or track). Autoplay gated behind user interaction

  * Optional “Play Visualizer” button enabling audio‑reactive scene

* Social Integrations

  * Instagram feed (oEmbed or via a server‑side fetch proxy to avoid rate limits)

  * YouTube playlist embeds with thumbnail prefetch

* Contact

  * Form: name, email, phone, service type, date, message, budget

  * Client validation, optional reCAPTCHA v3

  * Submits to server; sends transactional email to Tory and confirmation to sender; stores record in DB

* Shop

  * Product cards (physical merch and digital audio)

  * PayPal Checkout buttons (per product)

  * On successful capture: store order; for digital goods provide secure download link via signed URL; email receipt

  * Optional inventory management for physical items

## Backend API Endpoints (Next.js App Router)

* `POST /api/contact`: Validate payload → SendGrid/SES send → persist to `contact_messages` → rate‑limit

* `POST /api/paypal/create-order`: Validate product → call PayPal Orders API → return `orderID`

* `POST /api/paypal/capture-order`: Verify `orderID` → capture → write `orders` + `order_items` → issue download token for digital

* `GET /api/downloads?token=…`: Verify token → redirect to signed Cloudinary/S3 asset (expiry \~15 min)

* `POST /api/webhooks/paypal`: Verify webhook signature → mark orders delivered or investigate disputes

## Data Model (Supabase)

* `products`: id, name, type (`digital|physical`), price, currency, media, description, sku, inventory

* `orders`: id, paypal\_order\_id, status, buyer\_email, total, created\_at

* `order_items`: order\_id, product\_id, unit\_price, quantity

* `download_tokens`: token, product\_id, order\_id, expires\_at, redeemed\_at

* `contact_messages`: id, name, email, phone, service, date, message, budget, created\_at

* `gigs`, `collaborations`, `certifications`: title, org, dates, description, links, media

* `assets`: for gallery references if not fully in CMS

## CMS Schema (Sanity)

* `bio`: hero text, resume URL, headshot

* `timeline_entry`: role, org, start/end, achievements, media

* `gig`, `collaboration`, `certification`: fields as above

* `gallery_item`: type (image/video), source (Cloudinary/SoundCloud/YouTube), caption, tags

* `service`: title, description, rate range, CTA target

## Performance Strategy

* Static generation (SSG) for all public pages; ISR for content updates

* Use `next/image` with AVIF/WebP, responsive sizes, priority on hero asset, lazy elsewhere

* Code‑split heavy visualizers; load Three.js behind “Play Visualizer” action

* Preconnect to `images`, `soundcloud.com`, and PayPal domains; defer non‑critical scripts

* Cache API responses at edge where safe; compress with Brotli; ship minimal fonts (system stack or variable font)

* Service Worker for media caching (gallery thumbnails) and route prefetch

* Lighthouse performance budgets; monitor with Web Vitals and Vercel Analytics

## Accessibility & SEO

* Semantic structure, alt text automation via CMS, captions

* Keyboard‑accessible nav and lightbox; focus management

* Metadata per page: Open Graph, Twitter cards; JSON‑LD for `Person`, `Product`, `Event`

* Sitemap, robots; canonical URLs; clean routes and slugs

## Security & Compliance

* Input sanitization; server‑side validation (Zod)

* Rate limiting on contact and payment endpoints; reCAPTCHA for contact

* PayPal signature verification; no card data stored

* Signed URL delivery for digital assets; tokens scoped per order

* CORS locked to first‑party origins; headers (CSP with allowed domains for embeds)

## Deployment & Environments

* Vercel project with `production` and `preview` environments

* Env secrets: PayPal Client/Secret, SendGrid/SES key, Supabase keys, CMS tokens

* Cloudinary/S3 bucket for assets; CI checks and preview links for PRs

## Component Inventory

* `Navbar`, `MobileDock`, `Hero`, `AudioVisualizer`, `SectionHeader`

* `Timeline`, `ResumeDownloadButton`, `ServiceCard`

* `WorkCard`, `CertificationBadge`

* `GalleryGrid`, `MediaLightbox`, `SoundCloudEmbed`

* `ContactForm`

* `ProductCard`, `CheckoutButton`, `DownloadBadge`

* `Footer`

## Integration Details

* SoundCloud: embed widget; optional API to fetch track metadata server‑side for SSR

* Instagram/YouTube: official embeds with thumbnail preloading; consider server proxy for reliability

* PayPal: Smart Buttons (client), Orders API (server). Capture, verify, and fulfill with signed download URL

## Testing & Monitoring

* Unit tests (React Testing Library) for components and forms

* Integration tests for API routes (contract tests for PayPal flow)

* E2E tests (Playwright) for critical journeys: contact submission, purchase & download

* Error tracking with Sentry; logs for webhook/capture flows

## Differentiators vs Typical Portfolio

* Audio‑reactive visualizer and interactive timeline

* High‑fidelity gallery with cinematic lightbox

* Seamless PayPal purchase → instant secure downloads

* Performance‑first build with edge caching and strict budgets

## Next Steps (on approval)

* Scaffold Next.js project and core routes/components

* Wire CMS and Supabase schemas; migrate seed content

* Integrate PayPal and email; implement secure download delivery

* Polish visuals and motion; run accessibility and performance passes

