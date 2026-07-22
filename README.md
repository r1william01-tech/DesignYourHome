# DesignYourHome

DesignYourHome (DYH) is a homeowner decision-support platform built around a persistent digital twin of the homeowner's own floor plan.

Milestone 0 establishes the deployable application shell, product constitution, architecture boundaries, and the structured scene contracts required for the approved vertical slice. It intentionally does not present upload, parsing, AI, or 3D capabilities as working before they are implemented and verified.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run lint
npm run build
```

## Deployment

The project is a standard Next.js application and can be imported into Vercel with the default settings:

- Framework preset: Next.js
- Build command: `npm run build`
- Output directory: default
- Install command: `npm install`

No secrets or external services are required for Milestone 0.

## Governing documents

- [PRODUCT_VISION.md](./PRODUCT_VISION.md) — the long-term product constitution.
- [PRODUCT_REQUIREMENTS.md](./PRODUCT_REQUIREMENTS.md) — traceable requirements and milestone protection.
- [ARCHITECTURE.md](./ARCHITECTURE.md) — system boundaries and source-of-truth rules.
- [MILESTONES.md](./MILESTONES.md) — incremental delivery plan.

## Source layout

```text
app/                  Next.js application shell and workspace routes
lib/scene/             Persistent digital-twin contracts and operation boundaries
public/                Static assets
PRODUCT_VISION.md      Product constitution
PRODUCT_REQUIREMENTS.md  Engineering requirements
ARCHITECTURE.md        Architectural decisions and invariants
MILESTONES.md          Delivery roadmap
```
