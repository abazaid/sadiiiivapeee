---
name: vape-city-page
description: >
  Generates a complete, publish-ready Arabic SEO content page for the keyword pattern
  "Ù…ØªØ¬Ø± ÙÙŠØ¨ ÙÙŠ [X]" â€” where [X] is a Saudi city, neighborhood, or location keyword.
  Use this skill whenever the user provides a city name, location, or the keyword "[X]"
  and asks to generate a vape store SEO page, a city landing page, or any programmatic
  SEO content for the vape/e-cigarette niche in Saudi Arabia. Also triggers when the
  user says "Ø§Ø¹Ù…Ù„ ØµÙØ­Ø© Ù„Ù€ [Ù…Ø¯ÙŠÙ†Ø©]", "generate page for [X]", "build the page for [city]",
  or any variation of building a city-specific vape store page. Output is a full HTML document, ready to publish.
---

# Skill: Vape City Page Generator

Generates one complete, publish-ready SEO page for the keyword pattern **"Ù…ØªØ¬Ø± ÙÙŠØ¨ ÙÙŠ [X]"**.

Takes a single `[X]` input (city, neighborhood, or location). Outputs a full Markdown page with real content â€” no placeholders.

---

## Workflow (follow in order)

### Step 1 â€” Extract the location

Read the user's message. Extract `[X]` â€” the city or location they want. If ambiguous, ask once: "Ø£ÙŠ Ù…Ø¯ÙŠÙ†Ø© Ø£Ùˆ Ù…Ù†Ø·Ù‚Ø© ØªØ±ÙŠØ¯ØŸ"

Common inputs:
- City name: `Ø§Ù„Ø±ÙŠØ§Ø¶`, `Ø¬Ø¯Ø©`, `Ø§Ù„Ø¯Ù…Ø§Ù…`, `Ù…ÙƒØ©`, `Ø§Ù„Ø·Ø§Ø¦Ù`
- Neighborhood search: `Ø´Ù…Ø§Ù„ Ø§Ù„Ø±ÙŠØ§Ø¶`, `Ø­ÙŠ Ø§Ù„Ù…Ù„Ù‚Ø§`
- Behavioral keyword: `ÙŠÙˆØµÙ„ Ù„Ù„Ù…Ù†Ø²Ù„`, `Ø§ÙˆÙ†Ù„Ø§ÙŠÙ†`

### Step 2 â€” Run web search (required)

Before writing, search for two things:

**Search 1:** `Ù…ØªØ¬Ø± ÙÙŠØ¨ [X] 2025`
**Search 2:** `ÙÙŠØ¨ [X] ØªÙˆØµÙŠÙ„ Ø£Ø³Ø¹Ø§Ø±`

Extract from results:
- What competitors are in this city (name 1-2 if found)
- Any city-specific delivery times or logistics mentioned
- Any trending products mentioned for this region

If no city-specific results found â†’ use national Saudi data and note the low competition angle.

### Step 3 â€” Generate the page

Follow the **Page Template** in `references/page-template.md` exactly.

Substitute all `[X]` and `[CITY]` variables with the actual location.

Apply the **Voice Rules** below to every sentence written.

### Step 4 â€” Output

Return the full HTML document (`<!DOCTYPE html> ... </html>`). No preamble, no explanation. Just the page.

---

## Voice Rules (apply to every sentence)

These rules define the brand's writing style. Never break them.

1. **Short sentences.** Max 15-20 words. Break anything longer.
2. **Active voice.** "Ù†ÙˆØµÙ‘Ù„ Ù„Ø¨Ø§Ø¨Ùƒ" not "ÙŠØªÙ… Ø§Ù„ØªÙˆØµÙŠÙ„ Ø¥Ù„Ù‰ Ø¨Ø§Ø¨Ùƒ".
3. **No marketing fluff.** Delete: "Ø§Ù„Ø£ÙØ¶Ù„ Ø¹Ù„Ù‰ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚", "ØªØ¬Ø±Ø¨Ø© Ù„Ø§ Ù…Ø«ÙŠÙ„ Ù„Ù‡Ø§", "Ø¬ÙˆØ¯Ø© Ø¹Ø§Ù„Ù…ÙŠØ© ÙØ§Ø¦Ù‚Ø© Ø§Ù„Ø¬ÙˆØ¯Ø©".
4. **Honest.** If something is a tradeoff, say so. ("Ø§Ù„Ø³Ø­Ø¨Ø© Ø£ÙˆÙØ± Ø¨Ø§Ù„Ø³Ø¹Ø±ØŒ Ù„ÙƒÙ† Ø§Ù„Ø¬Ù‡Ø§Ø² Ø£ÙˆÙØ± Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø¯Ù‰ Ø§Ù„Ø¨Ø¹ÙŠØ¯.")
5. **Practical.** Every sentence answers "so what?" for the reader.
6. **Arabic-first.** Write in Arabic. Brand names and model names stay in English (Elf Bar, Lost Mary, etc.).
7. **No exclamation marks in body text.** CTAs only.

**Bad example:** "Ù†Ù‚Ø¯Ù… Ù„ÙƒÙ… ØªØ¬Ø±Ø¨Ø© ØªØ³ÙˆÙ‚ Ø§Ø³ØªØ«Ù†Ø§Ø¦ÙŠØ© Ù„Ø§ Ù…Ø«ÙŠÙ„ Ù„Ù‡Ø§ Ù…Ù† Ø£Ø¬ÙˆØ¯ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„Ø£ØµÙ„ÙŠØ© Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠØ©!"
**Good example:** "ÙƒÙ„ Ù…Ù†ØªØ¬ Ø¹Ù†Ø¯Ù†Ø§ Ø£ØµÙ„ÙŠ. ÙƒÙˆØ¯ Ø§Ù„ØªØ­Ù‚Ù‚ Ù…ÙˆØ¬ÙˆØ¯ Ø¹Ù„Ù‰ ÙƒÙ„ Ø¹Ø¨ÙˆØ©."

---

## Page Structure (summary)

Full template is in `references/page-template.md`. Structure at a glance:

```
1. SEO Metadata Block (title, description, canonical, JSON-LD)
2. H1 â€” exact keyword "Ù…ØªØ¬Ø± ÙÙŠØ¨ ÙÙŠ [X]"
3. Intro paragraph â€” 3 sentences max, direct answer
4. Quick-Answer Box â€” 4 bullet facts (indexed by AI tools)
5. Products Section â€” 3-4 specific products with prices
6. Comparison Table â€” 5 disposables with specs + SAR prices
7. Buyer Guide â€” 3 sections (Ø§Ù„Ù†ÙŠÙƒÙˆØªÙŠÙ†ØŒ Ø§Ù„Ø£ØµØ§Ù„Ø©ØŒ Ø§Ù„Ø¬Ù‡Ø§Ø² vs Ø§Ù„Ø³Ø­Ø¨Ø©)
8. Delivery Section â€” areas + estimated times for [X]
9. Inline CTA â€” natural, not forced
10. FAQ â€” 5 questions in Q&A format (Schema-ready)
11. Footer blurb â€” 2 sentences, city-specific
```

---

## Pricing Reference (update if stale)

Use these as defaults. If web search returns different prices, use the fresher data.

| Ø§Ù„Ù…Ù†ØªØ¬ | Ø§Ù„Ø³Ø¹Ø± Ø¨Ø§Ù„Ø±ÙŠØ§Ù„ |
|--------|--------------|
| Elf Bar BC5000 | Ù§Ù¥ Ø±ÙŠØ§Ù„ |
| Lost Mary MO5000 | Ù¨Ù  Ø±ÙŠØ§Ù„ |
| Geek Bar Pulse 15000 | Ù¡Ù¢Ù  Ø±ÙŠØ§Ù„ |
| Randm Tornado 7000 | Ù©Ù  Ø±ÙŠØ§Ù„ |
| Vozol Vista 20000 | Ù¡Ù¥Ù  Ø±ÙŠØ§Ù„ |
| Ù†ÙƒÙ‡Ø© Ø³ÙˆÙ„Øª 30ml | Ù£Ù¥ Ø±ÙŠØ§Ù„ |
| Ø¬Ù‡Ø§Ø² Caliburn G4 | Ù¡Ù¨Ù  Ø±ÙŠØ§Ù„ |

---

## Delivery Times by City

| Ø§Ù„Ù…Ø¯ÙŠÙ†Ø© | ØªÙˆØµÙŠÙ„ Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ø¯ÙŠÙ†Ø© | Ø´Ø­Ù† Ø®Ø§Ø±Ø¬ÙŠ |
|---------|-------------------|-----------|
| Ø§Ù„Ø±ÙŠØ§Ø¶ | 3-5 Ø³Ø§Ø¹Ø§Øª | â€” |
| Ø¬Ø¯Ø© | 3-5 Ø³Ø§Ø¹Ø§Øª | â€” |
| Ø§Ù„Ø¯Ù…Ø§Ù… / Ø§Ù„Ø®Ø¨Ø± | 4-6 Ø³Ø§Ø¹Ø§Øª | â€” |
| Ù…ÙƒØ© / Ø§Ù„Ø·Ø§Ø¦Ù | 4-6 Ø³Ø§Ø¹Ø§Øª | â€” |
| Ø§Ù„Ù…Ø¯ÙŠÙ†Ø© Ø§Ù„Ù…Ù†ÙˆØ±Ø© | ÙŠÙˆÙ… Ø¹Ù…Ù„ | â€” |
| Ø¨Ø§Ù‚ÙŠ Ø§Ù„Ù…Ø¯Ù† | â€” | 24-48 Ø³Ø§Ø¹Ø© |

---

## Quality Checklist

Before outputting, verify:

- [ ] Zero `[X]` or `[CITY]` placeholders remain in the output
- [ ] H1 contains the exact keyword "Ù…ØªØ¬Ø± ÙÙŠØ¨ ÙÙŠ [X]"
- [ ] Prices are in Saudi Riyal (Ø±ÙŠØ§Ù„), written as Arabic numerals + ÙƒÙ„Ù…Ø© "Ø±ÙŠØ§Ù„"
- [ ] At least one inline CTA linking to a product category
- [ ] FAQ section has 5 questions minimum
- [ ] JSON-LD schema block is present (FAQPage + LocalBusiness)
- [ ] No marketing fluff phrases (see Voice Rules)
- [ ] Delivery times are city-specific

---

## Read Next

â†’ Full page template with all sections written out: `references/page-template.md`
â†’ Good/bad output examples: `references/examples.md`

## Dynamic Product Data Rule (Project Mandatory)
- For each generated city page, pull product cards from sitemap_exports/2026-04-22_22-35-07/products.csv.
- Use real url and irst_image from the CSV for every product card.
- Do not reuse the same fixed product set across all cities.
- Keep category and footer links strictly from real Saudivapes /ar/ URLs in project references.

## Dynamic Delivery Rule (City Type)
- Classify city as `main_city` for: الرياض، جدة، مكة، المدينة، الدمام، الخبر، الطائف. Otherwise `edge_city`.
- `main_city`: in-city 2-5h, suburbs 4-6h, nationwide 24-48h.
- `edge_city`: in-city 4-8h, suburbs 6-12h, nationwide 24-72h.
- Delivery blocks must use generic city buckets: وسط/شمال/شرق/غرب/جنوب/ضواحي/الأحياء الطرفية + باقي مدن السعودية.
- Never reuse neighborhoods from another city.
