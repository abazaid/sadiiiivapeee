# GEO Audit Report: فيب السعودية (Saudi Vape)

**Audit Date:** 2026-04-26
**URL:** https://saudivapes.com/ar
**Business Type:** E-commerce (Vape Products)
**Platform:** Salla on Cloudflare
**Pages Analyzed:** ~5,850 (homepage, 45+ categories, ~5,800 products, 12 blog posts, 7 city pages, static pages)
**Previous Score:** 33/100 (April 24, 2026)

---

## Executive Summary

**Overall GEO Score: 54/100 (Poor → Fair)**

The site has improved significantly from the previous audit (33 → 54), driven by the addition of llms.txt files, unblocking AI crawlers, and fresh content deployment. However, major gaps remain in brand authority (no Wikipedia, no LinkedIn, no YouTube), schema completeness (zero sameAs links, duplicate/invalid schemas), and content E-E-A-T (pseudonymous author, no external citations).

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 80/100 | 25% | 20.00 |
| Brand Authority | 13/100 | 20% | 2.60 |
| Content E-E-A-T | 48/100 | 20% | 9.60 |
| Technical GEO | 81/100 | 15% | 12.15 |
| Schema & Structured Data | 45/100 | 10% | 4.50 |
| Platform Optimization | 47/100 | 10% | 4.70 |
| **Overall GEO Score** | | | **54/100** |

### Score Interpretation

| Range | Rating | Status |
|---|---|---|
| 90-100 | Excellent | |
| 75-89 | Good | |
| 60-74 | Fair | |
| **40-59** | **Poor** | **← Current: 54 — borderline Fair** |
| 0-39 | Critical | Previous: 33 |

---

## Critical Issues (Fix Immediately)

| # | Issue | Category | Impact |
|---|---|---|---|
| C01 | **Zero sameAs links on any schema** — Organization, Store, Person schemas have no social/identity links. AI models cannot perform entity resolution. | Schema | -8 pts |
| C02 | **Organization schema bug** — Uses page title as org name on sub-pages (e.g., blog headline = org name). Invalid on all non-homepage pages. | Schema | -5 pts |
| C03 | **CCBot blocked in robots.txt** — Appears twice (Allow then Disallow). Disallow wins, blocking Common Crawl which feeds AI training data. | Technical | -4 pts |
| C04 | **No external citations in any blog post** — Zero outbound links to Saudi FDA, health authorities, or manufacturer specs. E-E-A-T severely weakened for health-adjacent category. | Content | -6 pts |

## High Priority Issues (Fix Within 1 Week)

| # | Issue | Category | Impact |
|---|---|---|---|
| H01 | **No Wikipedia/Wikidata presence** — Single highest-impact entity signal missing. | Brand Authority | -10 pts |
| H02 | **No LinkedIn company page** — Affects Bing Copilot and professional entity signals. | Brand Authority | -5 pts |
| H03 | **No YouTube channel** — Cripples Google Gemini visibility and Google ecosystem presence. | Platform | -5 pts |
| H04 | **Author "SAIF" is pseudonymous** — No real name, no verifiable credentials, no LinkedIn or photo. | Content | -4 pts |
| H05 | **Duplicate schemas** — BreadcrumbList x2 (http/https), Product x2, Organization auto-generated incorrectly on sub-pages. | Schema | -4 pts |
| H06 | **Missing `speakable` on Article schema** — AI assistant readability signal not used on any blog post. | Schema | -3 pts |
| H07 | **Article datePublished/dateModified missing timezone** — Non-ISO dates. Google rich result requirement. | Schema | -2 pts |
| H08 | **No Product schema with AggregateRating** — Empty array `[]` on product pages instead of valid schema. | Schema | -2 pts |
| H09 | **Crawl-delay: 10** — Very aggressive, slows AI crawler indexing throughput. | Technical | -2 pts |

## Medium Priority Issues

| # | Issue | Category |
|---|---|---|
| M01 | **No Google Business Profile** — Missing local entity signal for Gemini. | Platform |
| M02 | **No IndexNow/msvalidate meta** — Bing indexing not optimized. | Technical |
| M03 | **Blog lastmod dates from 2024** — Some content not recently refreshed. | Content |
| M04 | **No conflict of interest disclosure** — Blog posts recommend products sold by the store. | Content |
| M05 | **No hreflang on all pages** — ar/en/x-default found on homepage only; product pages may lack proper hreflang. | Technical |
| M06 | **Store schema missing openingHoursSpecification** — Incomplete local business data. | Schema |

## Low Priority Issues

| # | Issue | Category |
|---|---|---|
| L01 | **Content-Signal: ai-train=no** — Non-standard directive, not recognized by any major crawler. | Technical |
| L02 | **Blog content appears AI-assisted** — Template structure, repetitive phrasing reduces distinctiveness. | Content |
| L03 | **Missing wordCount/articleSection on Article schema** — Minor enhancement. | Schema |
| L04 | **About page thin (~320 words)** — Lacks team photos, milestones, physical address. | Content |
| L05 | **Some category URLs use numeric IDs** — e.g., /c215470303 instead of descriptive slug. | Technical |

---

## Category Deep Dives

### AI Citability (80/100) — Good

**Strongest category.** The site has several highly quotable content blocks.

**Citation-ready passages:**
- **llms.txt Key Stats** (93/100): 5,800+ products, 1,500+ customers, 200+ flavors, 30+ categories, shipping windows, payment methods — dense, structured, self-contained
- **Product review blocks** (73/100): Specific ratings (4.5/5, 4.7/5), wattage specs, localized KSA buying advice
- **Buying factors guide** (73/100): Five-factor guide with bold labels, numeric ranges, scannable format
- **Shipping info** (72/100): Express 4-8h, standard 24-72h, free over 500 SAR

**Weak areas:**
- Homepage "Quality" section (37/100): Generic, no data, no certifications
- Category navigation (30/100): Navigation aids only, no quotable content

**Priority:** Maintain current citability strength. The llms.txt is excellent — keep it updated.

---

### Brand Authority (13/100) — Critical

**Worst category.** Zero Wikipedia, Wikidata, YouTube, or LinkedIn presence. Only Instagram and Twitter/X are active.

**Quick wins:**
1. **Create a Wikidata entry** (15 min) — single highest-leverage action across ALL categories
2. **Create a LinkedIn company page** (30 min)
3. **Add sameAs links** to existing Organization schema pointing to Instagram and Twitter

---

### Content E-E-A-T (48/100) — Poor

| Dimension | Score |
|---|---|
| Experience | 11/25 |
| Expertise | 13/25 |
| Authoritativeness | 8/25 |
| Trustworthiness | 16/25 |

**Strengths:**
- Blog posts have Article schema with author attribution and dates
- Editorial policy page exists
- Contact info prominent (WhatsApp, email, Riyadh location)
- Payment includes local (Mada, Tamara, Tabby) + international
- Product authenticity guarantee with verification code

**Gaps:**
- Author "SAIF" is pseudonymous with no verifiable credentials
- Zero external citations in any blog post (no health authorities, no manufacturer specs)
- No conflict of interest disclosure (blog recommends products sold by store)
- About page thin — no team photos, milestones, or physical address
- No third-party review platform presence (Trustpilot, etc.)
- Returns policy restrictive (1-day window)

---

### Technical GEO (81/100) — Good

| Component | Score |
|---|---|
| Server-Side Rendering | 62/100 |
| Meta Tags & Indexability | 90/100 |
| Crawlability | 88/100 |
| Security Headers | 95/100 |
| Core Web Vitals Risk | 75/100 |
| Mobile Optimization | 95/100 |
| URL Structure | 80/100 |

**Key strengths:**
- AI crawlers explicitly ALLOWED (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended)
- llms.txt EXISTS and comprehensive at /llms.txt and /ar/llms.txt
- SSL with HSTS (180-day), strong security headers
- Mobile responsive with RTL Arabic support
- Server-rendered schemas visible in raw HTML
- Sitemap with ~5,849 URLs across 4 sitemaps

**Key issues:**
- CCBot blocked (Disallow wins over Allow)
- Crawl-delay: 10 — aggressive
- No explicit meta robots tag
- JS-rendered product listings invisible without JavaScript
- Some sitemaps missing lastmod

---

### Schema & Structured Data (45/100) — Poor

**10 schema types detected. Key issues:**
- Organization schema **uses page title as org name** on sub-pages
- **Zero sameAs links** across all schemas (no entity resolution possible)
- **Duplicate BreadcrumbList** on every page (http + https versions)
- Article dates missing timezone
- No `speakable` property on any Article
- Product schema has empty `aggregateRating: []`

**Entity Linking: 0/7 platforms linked**

---

### Platform Optimization (47/100) — Poor

| Platform | Score | Status |
|---|---|---|
| Google AI Overviews | 53/100 | Fair |
| ChatGPT Web Search | 55/100 | Fair |
| Perplexity AI | 56/100 | Fair |
| Google Gemini | 28/100 | Critical |
| Bing Copilot | 43/100 | Poor |

**Strongest:** Perplexity AI (56) — open crawler access, original product data for KSA vape queries, server-rendered content with dates.

**Weakest:** Google Gemini (28) — zero Google ecosystem presence (no YouTube, no GMB, no Knowledge Graph).

---

## Quick Wins (Implement This Week)

| # | Action | Effort | Impact | Category |
|---|---|---|---|---|
| 1 | **Add sameAs to Organization schema** — Instagram, Twitter/X | 15 min | +8 pts | Schema |
| 2 | **Fix CCBot robots.txt** — Remove from blocklist | 5 min | +4 pts | Technical |
| 3 | **Create Wikidata entry** — فيب السعودية entity | 15 min | +10 pts | Brand |
| 4 | **Reduce Crawl-delay to 3** — Improve AI indexing speed | 5 min | +2 pts | Technical |
| 5 | **Add explicit meta robots tag** — index, follow | 10 min | +1 pts | Technical |
| 6 | **Create LinkedIn company page** | 30 min | +5 pts | Brand |
| 7 | **Add speakable to Article schema** — CSS selector targeting blog body | 30 min | +3 pts | Schema |

## 30-Day Action Plan

### Week 1: Schema & Technical Foundation
- [ ] Fix Organization schema — add sameAs (Instagram, Twitter/X, future Wikipedia/LinkedIn)
- [ ] Fix CCBot robots.txt — remove from blocklist
- [ ] Reduce Crawl-delay from 10 to 3
- [ ] Add explicit `<meta name="robots" content="index, follow">` tag
- [ ] Fix duplicate BreadcrumbList — remove one, fix http → https
- [ ] Fix Article dates — add timezone offset
- [ ] Add speakable CSS selector to Article schema
- [ ] Remove empty aggregateRating from Product schema

### Week 2: Brand Authority & Entity Signals
- [ ] Create Wikidata entry for "فيب السعودية / Saudi Vape"
- [ ] Create LinkedIn company page with full profile
- [ ] Add sameAs to Organization schema pointing to Wikidata
- [ ] Submit site to Bing Webmaster Tools — add msvalidate.01
- [ ] Create Google Business Profile for Riyadh location

### Week 3: Content & E-E-A-T Enhancement
- [ ] Add external citations to 5 blog posts — Saudi FDA, brand official sites, health authorities
- [ ] Add conflict of interest / affiliate disclosure to all blog posts
- [ ] Expand author page with real name, credentials, photo, LinkedIn link
- [ ] Create Person schema with sameAs, knowsAbout, image, description
- [ ] Update 2 oldest blog posts with 2026 data

### Week 4: Platform Expansion & Content Depth
- [ ] Create YouTube channel — upload 3 Arabic vape review videos
- [ ] Add 2 comparison tables to blog posts (price, puff count, nicotine, battery columns)
- [ ] Convert 3 blog listicles to Q&A format (H2s as search questions + direct answers)
- [ ] Expand About page with full story, team, milestones

---

## Appendix: Pages Analyzed

| URL | Type | Key Issues |
|---|---|---|
| https://saudivapes.com/ar | Homepage | Org schema bug, no sameAs, JS-rendered products |
| https://saudivapes.com/ar/blog/* | Blog (12 posts) | No external citations, no speakable, placeholder author |
| https://saudivapes.com/ar/c* | Categories (45+) | Some use numeric IDs, thin content |
| https://saudivapes.com/ar/p/* | Static pages | About page thin (320 words) |
| https://saudivapes.com/ar/blog/author/1210468642 | Author | Person schema missing sameAs, image, knowsAbout |
| /llms.txt | AI resource | Excellent — comprehensive |
| /robots.txt | Crawler rules | CCBot conflict, Crawl-delay: 10 |
