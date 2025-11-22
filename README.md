## ShopifyOrNot

ShopifyOrNot is a minimal, single-page web app that lets SalesOps and revenue teams quickly check whether a prospect’s website is running on Shopify. It wraps a focused, marketing-style UI around a fast Shopify detection API so reps can qualify leads in seconds.

### What it does

- Accepts any website URL and normalizes / follows redirects.
- Calls the detection API at `https://dev-api.makemypass.com/check?url=<INPUT_URL>`.
- Interprets the API response into a clear result card:
  - Is this a Shopify store?
  - Confidence score.
  - Resolved final URL.
  - Shopify `.myshopify.com` domain if detected.
  - Optional “Technical signals” (response headers and body markers) in an expandable section.

### Target users

- SaaS teams selling Shopify apps or plugins.
- SalesOps and SDRs qualifying cold / inbound leads.
- Growth and partnerships teams doing quick domain research.

### Running the app locally

```bash
npm install
npm run dev
```

- Visit `http://localhost:3000` to use the checker.
- The main experience is implemented in `app/page.tsx` and the supporting components under `app/components/`.

### Implementation notes

- Built with the Next.js App Router and TypeScript.
- UI styled to loosely follow Shopify marketing patterns (see `UI_DESIGN.md`).
- Shopify detection is centralized in the Edge route `app/api/check/route.ts`, which proxies to `https://dev-api.makemypass.com/check`.
- `app/hooks/useShopifyCheck.ts` encapsulates request/response wiring and transforms API JSON into the UI-friendly `ShopifyResult` shape.

### Project structure (high level)

- `app/` – main UI, pages, and API routes.
- `app/components/` – reusable UI components (hero, form, cards, alerts).
- `app/hooks/` – React hooks for Shopify detection and GitHub stars.
- `app/services/` – API service wrappers (Shopify checker).
- `app/types/` – shared TypeScript types for API responses.
- `app/utils/` – small utilities and helpers.
- `public/` – static assets.

### Scripts

- `npm run dev` – start local development.
- `npm run build` – create a production build.
- `npm start` – serve the production build.
- `npm run lint` – run ESLint (Next + TypeScript rules).

### Roadmap ideas

- Bulk upload / CSV support for checking many domains at once.
- Browser extension or CRM-side widget for one-click checks.
- Rate-limiting and API key support for teams embedding the checker.
- Additional platform detectors (e.g., WooCommerce, Magento) alongside Shopify.
