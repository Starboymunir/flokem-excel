# Flokem‑Excel — Next.js + Tailwind Starter

A vibrant single‑page landing built from the Figma layout spec.

## Quickstart
```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```

## What’s included
- Next.js App Router (app/)
- Tailwind with brand tokens (fx.*)
- Responsive sections: Hero, About, Services & Pricing, Gallery, Contact, Footer
- Sticky Call/WhatsApp bar
- tel: and wa.me pre‑wired (update number format if needed)

## Customize
- Colors in `tailwind.config.js` under `theme.extend.colors.fx`
- Text in `app/page.tsx`
- Components in `app/(site)/components/`

## Deployment
- Vercel: import repository → build command `next build` → output `.`
