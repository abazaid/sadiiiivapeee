# Cloudflare Workers Project Context

Last updated: 2026-04-22 (Policy updated)

## Scope and Rules
- The main website on `saudivapes.com` is connected to Salla.
- The base Salla site must remain unchanged.
- Workers are used only to serve custom pages on specific paths in the format `domain.com/page`.
- Ongoing work in this project is:
  - adding new Worker-powered pages
  - editing existing Worker-powered pages
- Do not add a catch-all route like `saudivapes.com/*` unless explicitly requested, because it can override normal Salla behavior.

## Current Zone
- Zone: `saudivapes.com`
- Zone ID: `ecd4715388639a9206afd6b5e5dc2a21`
- Account ID: `117214a7443cc7cc03eec66e6577ea14`

## Active Worker Routes
- `saudivapes.com/فيب*` -> `odd-block-e5db`
- `saudivapes.com/best-vape-store-ksa` -> `best-vape-store-ksa`
- `saudivapes.com/taste-burnt` -> `taste-burnt`
- `saudivapes.com/vct` -> `vct`
- `saudivapes.com/فيب-السعودية` -> `saudi-vape`
- `saudivapes.com/blog-vape*` -> `blog`
- `blog.saudivapes.com/*` -> `blogrerw`
- `saudivapes.com/ksavape` -> `ksavape`
- `saudivapes.com/robots.txt` -> `robots-fix`
- `saudivapes.com/llms.txt` -> `llms-txt` (301 to `/ar/llms.txt`)
- `saudivapes.com/ar/llms.txt` -> `llms-txt`

## Local Backup in This Project
All current Cloudflare Workers were downloaded into:
- `cloudflare-workers/`

Structure:
- one folder per Worker script
- each script content saved as `worker.js`
- inventory and mapping saved in `cloudflare-workers/inventory.json`

Downloaded scripts:
- `best-vape-store-ksa`
- `blog`
- `blogrerw`
- `ksavape`
- `odd-block-e5db`
- `robots-fix`
- `llms-txt`
- `saudi-vape`
- `taste-burnt`
- `vct`

## Working Method (Going Forward)
- Start from the local files in `cloudflare-workers/<worker-name>/worker.js`.
- Apply requested edits or create new page Workers.
- Keep route targeting specific paths to avoid impacting Salla pages.
- Re-deploy only the Worker/script that was changed.

## Publishing Policy (Critical)
- From now on, any request to publish pages, landing pages, or articles must be implemented via Cloudflare Workers routes.
- We do not have permission to modify the main Salla domain implementation directly.
- Therefore, all future content publishing/updates should be done through Workers only, on specific paths (for example: `saudivapes.com/page-slug`).

## Important Safety Notes
- Any broad route can change behavior of the main store.
- Changes to `robots.txt` route affect SEO crawling behavior.
- Keep this file as the single source of truth for project context.

## Arabic SEO Reference
- Operational SEO/content reference is documented in:
  - `PROJECT_REFERENCE_AR.md`
- Use it as the default guide for:
  - category intro/FAQ writing rules
  - internal linking priorities
  - terminology constraints (e-cig vs e-shisha, and pods as cartridges)
