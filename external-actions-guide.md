# External Actions Guide — GEO Brand Authority

These actions must be done manually (can't be automated via Cloudflare Workers).

---

## 1. Create Wikidata Entry (~30 min)

Go to https://www.wikidata.org and create an account, then click "Create a new item":

**Label:** فيب السعودية
**Description:** متجر إلكتروني سعودي لمنتجات الفيب والشيشة الإلكترونية
**Aliases:** Saudi Vape, Saudivapes

### Properties to add:

| Property | Value |
|---|---|
| official website (P856) | https://saudivapes.com |
| Instagram username (P2003) | saudivapes |
| X/Twitter username (P2002) | saudivapes |
| country (P17) | Saudi Arabia (Q851) |
| headquarters location (P159) | Riyadh (Q3692) |
| inception (P571) | 2021 |
| official name (P1448) | فيب السعودية (Arabic) / Saudi Vape (English) |
| phone number (P1329) | +966542906276 |
| email address (P968) | info@saudivapes.com |

### Why this matters:
- Wikidata feeds Google Knowledge Graph directly
- ChatGPT and Gemini use Wikidata for entity recognition
- Without a Wikidata entry, the brand doesn't exist as a verified entity

---

## 2. Create LinkedIn Company Page (~1 hour)

Go to https://www.linkedin.com/create/company and fill in:

**Company name:** Saudi Vape | فيب السعودية
**Tagline:** أكبر متجر إلكتروني للشيشة الإلكترونية والفيب في السعودية
**Description:** (copy from the About page content — paste the Arabic + English)
**Industry:** Retail
**Company size:** 2-10 employees
**Company type:** E-commerce
**Website:** https://saudivapes.com
**Location:** Riyadh, Saudi Arabia
**Logo:** Use the same logo from the site

### Post 1-2 company updates per week:
- New product arrivals
- Vape tips and guides
- Customer satisfaction stories (no testimonials, just stats)

### Why this matters:
- Bing Copilot weights LinkedIn presence heavily (Microsoft ecosystem)
- Adds professional validation signal for all AI platforms
- One more platform for `sameAs` schema linking

---

## 3. Seed Reddit with Factual Content (~2 hours)

Create a Reddit account (or use existing) and post in relevant subreddits. **Do NOT promote the store directly** — share factual, helpful content.

### Suggested posts:

**Post 1 — r/saudiarabia or r/saudi:**
Title: "دليل بسيط للفرق بين السحبة الجاهزة والشيشة الإلكترونية للمبتدئين"
Body: Write 2-3 paragraphs explaining the difference between disposables and refillable devices, nicotine strengths available in Saudi, and what beginners should look for. No links to store.

**Post 2 — r/Vaping or r/electronic_cigarette:**
Title: "Vape scene in Saudi Arabia — what's available and what's popular"
Body: Describe the KSA vape market, popular brands (Mazaj, Fygood, Nasty), local preferences (mango ice is #1 for 3 years), and delivery landscape. Authentic regional perspective.

### Reddit rules:
- Don't mention your store URL in posts
- Don't use promotional language
- Engage with comments genuinely
- Use a neutral Reddit username (not your store name)

### Why this matters:
- Perplexity AI and ChatGPT heavily cite Reddit content
- Community validation signals trust to AI systems
- Regional vape perspective is unique content no one else is posting

---

## 4. Update sameAs Links in Schema

After completing the above, update the `sameAs` array in all schema blocks to include:

```
"sameAs": [
  "https://www.instagram.com/saudivapes/",
  "https://x.com/saudivapes",
  "https://www.linkedin.com/company/saudivapes",
  "https://www.wikidata.org/wiki/<YOUR_ITEM_ID>",
  "https://wa.me/966542906276"
]
```

This connects all platforms in structured data so AI crawlers can cross-reference them.

---

## 5. Add to Cloudflare Workers sameAs (if needed)

After creating LinkedIn page, update the `sameAs` in `cloudflare-workers/city-pages/worker-ar-متجر-فيب-الاحساء.js` to include the LinkedIn URL. Then regenerate and redeploy.
