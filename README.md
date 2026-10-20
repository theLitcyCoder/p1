# Djenic Photography — Starter Website

A Next.js App Router starter for the public-facing Djenic Photography website. Includes Home, About, Portfolio, Services and Contact pages, responsive styling, shared navigation/footer, per-page metadata, sitemap and robots rules.

## Requirements
- Node.js LTS
- npm

## Run locally
1. Open this folder in Visual Studio Code.
2. In the terminal, run `npm install`.
3. Run `npm run dev`.
4. Visit http://localhost:3000.

## Important before launch
- This is a design-stage starter. All Unsplash images are temporary placeholders; replace them with Djenic's licensed/owned photographs.
- The contact form currently uses a `mailto:` action and is not connected to a form service/backend. Replace the action before launch.
- Confirm the real domain, business email, service location, social profiles, services and pricing.
- The default canonical base URL is `https://www.djenicphotography.com`. Set `NEXT_PUBLIC_SITE_URL` to the real domain in `.env.local` and hosting settings before production.
- The project does not include booking, deposits, analytics, a database or admin features yet.

## Suggested next steps
1. Confirm the brand direction and replace placeholder text/images.
2. Connect a real contact form provider or API route.
3. Add consent-aware analytics if desired.
4. Add structured business data once business details and service area are confirmed.
5. Test keyboard navigation, contrast, mobile layouts, image performance and metadata.
