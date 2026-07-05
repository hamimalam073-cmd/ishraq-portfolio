# Ishraq Alam Portfolio

Personal portfolio positioning Ishraq Alam as "a sales rep who builds sales tech."
Built with Astro + React + TypeScript, deployed on Netlify.

Contact: alam.ishraq25@gmail.com · https://www.linkedin.com/in/ishraq-alam23/

## Pages

- `/` : Home (hero, proof strip, case study teasers, enterprise band)
- `/case-studies/` : index, plus:
  - `/case-studies/cqc-dashboard/` : CQC Research Dashboard (flagship)
  - `/case-studies/lead-enrichment/` : Lead Enrichment Pipeline (in progress)
  - `/case-studies/competitive-intel/` : Competitive Intelligence Matrix
- `/about/` : From Bangladesh to Portsmouth
- `/enterprise/` : Enterprise & B2B campaigns + inquiry form (Netlify Forms)
- `/thanks/` : form success page

## Writing rule

No em dashes or en dashes anywhere in site copy or code content. Use commas,
colons, semicolons, or sentence breaks instead.

## Local development

Node.js is installed portably at `C:\Users\IshraqAlam\.claude\tools\node`
(not on the system PATH). Either add that folder to PATH, or use the wrapper:

```
dev.cmd          # starts the dev server on http://localhost:4321
```

With Node on PATH:

```
npm install
npm run dev      # dev server
npm run build    # static build to dist/
```

## Deploying to Netlify

1. Push this folder to a GitHub repo.
2. In Netlify: "Add new site", then import the repo. `netlify.toml` already sets
   the build command (`npm run build`) and publish dir (`dist`).
3. After the first deploy, the `enterprise-inquiry` form appears under
   Site > Forms. Enable email notifications there to get inquiries forwarded.
4. Update `site` in `astro.config.mjs` to the real production URL so canonical
   and Open Graph URLs are correct, then redeploy.

## Phase 2 (planned)

- Writing/Notes section: short posts on cold outreach frameworks and
  CQC/care-sector data work.
- An Open Graph image (1200x630 PNG) for richer social previews.
