# Nithu S Kishore — Portfolio

Next.js (App Router) port of the static reference site in `reference/`.

## Local development

```bash
pnpm install
pnpm dev      # start the dev server at http://localhost:3000
pnpm build    # production build
pnpm lint     # ESLint
```

## Environment variables

Copy `.env.example` to `.env.local` and set:

```
NEXT_PUBLIC_SITE_URL=https://nithu.design
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. In Vercel: **Add New → Project →** import the repo. The framework preset is Next.js and the defaults are fine.
3. Add the environment variable `NEXT_PUBLIC_SITE_URL` with the final domain.
4. Deploy, then add a custom domain under **Settings → Domains** if you have one.
5. Confirm Analytics and Speed Insights are receiving data.
