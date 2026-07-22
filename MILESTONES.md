# DYH Milestones

## Milestone 0 — foundation

**Goal:** establish a truthful, deployable product foundation without simulating the vertical slice.

Delivered in this repository:

- Next.js application shell.
- Vercel-compatible scripts and configuration.
- Product constitution and requirements.
- Architecture boundaries and invariants.
- Milestone roadmap.
- Typed persistent-scene and operation contracts.
- A landing page that states what exists and what is next without fake product controls.

Exit criteria:

- `npm install` completes.
- `npm run lint` completes.
- `npm run build` completes.
- Vercel deploys the same build using default Next.js settings.

## Milestone 1 — first vertical slice

**Goal:** prove the end-to-end architecture with one genuinely working homeowner workflow.

```text
Upload arbitrary floor plan
→ render uploaded source
→ detect structured architecture
→ user confirms or corrects
→ create persistent geometry
→ generate navigable 3D shell
→ select a room
→ ask for one design change
→ generate and validate multiple options
→ select an option
→ apply it to the same scene
→ refine only the selected object
```

The milestone is complete only when the uploaded source is visibly used, the geometry is deterministic, the scene is navigable, options are spatially validated, and a follow-up edit preserves unrelated scene state.

## Milestone 2 — homeowner context

- Quick DYH and progressive personalization.
- Conversation facts with confidence labels.
- Household, routine, storage, work, and future-needs context.
- Existing furniture and appliance capture with cautious dimensions.

## Milestone 3 — proactive analysis

- Problem and opportunity discovery.
- Circulation and ergonomic checks.
- Utility and appliance placement checks.
- Multiple solution cards with trade-offs and recommendation rationale.

## Milestone 4 — environment and value

- Natural-light, sun, glare, and heat analysis.
- Day, evening, and night visualization states.
- Lighting design intent.
- Budget bands, reuse-first alternatives, maintenance warnings, and electrical details.

## Milestone 5 — inspiration and style

- Reference-image upload.
- Style-language extraction and adaptation to real architecture.
- Visual preference feedback.
- Common design ideas filtered by fit, maintenance, budget, and longevity.

## Milestone 6 — confidence and execution

- Weighted Home Fit assessment.
- Satisfaction and refinement loop.
- Structured Design Brief.
- Contractor questions, assumptions, unresolved decisions, and comparison-ready requirements.

## Scope protection

Milestones are gates, not disconnected demos. Each later capability must use the persistent scene and trust model established earlier. A feature is not complete because a button or visual exists; it is complete when its underlying behavior is functional, validated, and honestly represented in the UI.
