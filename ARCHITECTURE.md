# DYH Architecture

## System shape

```text
Uploaded floor plan
        ↓
Source renderer and parser
        ↓
Detected interpretation
        ↓
User confirmation and correction
        ↓
Persistent structured architecture
        ↓
Scene projection / 3D renderer
        ↓
Conversation and intent interpretation
        ↓
Candidate generation
        ↓
Spatial validation
        ↓
User decision
        ↓
Validated incremental scene operation
        ↓
Persistent scene revision
```

## Architectural invariants

1. **Floor plan is the source input.** Every project begins with a user-provided plan or an explicitly created project model.
2. **Structured geometry is authoritative.** Rooms, walls, openings, dimensions, orientation, and confirmed constraints live in deterministic data.
3. **The scene is persistent.** There is one scene per project. A prompt does not regenerate the home.
4. **Edits are operations.** Changes are typed, localized, validated, revisioned, and auditable.
5. **AI does not mutate geometry.** AI produces explanations and operation proposals; a spatial layer decides whether operations are valid.
6. **Rendering does not invent architecture.** The renderer visualizes the current scene and never silently changes it.
7. **Uncertainty is explicit.** Confirmed, inferred, estimated, and needs-verification facts are preserved in the model and surfaced in the UI.

## Domain model

The initial TypeScript contracts live in `lib/scene/model.ts` and `lib/scene/operations.ts`.

- `Architecture` contains rooms, walls, openings, and optional orientation.
- `Scene` contains architecture, scene objects, a project identifier, and a revision.
- `SceneObject` represents furniture, appliances, fixtures, and finishes with dimensions and ownership source.
- `SceneOperation` is the only intended mutation boundary for localized design changes.
- `OperationProposal` carries the natural-language explanation beside structured operations.
- `ValidationResult` carries validity and human-readable spatial issues.

The model is intentionally independent of the renderer. Three.js or another renderer can become a consumer without becoming the source of truth.

## Responsibility boundaries

### Upload and parsing

Responsible for preserving the original file, rendering it visibly, extracting candidates, and attaching confidence. It must not silently turn uncertain detections into confirmed geometry.

### Confirmation

Responsible for making detected elements understandable and correctable by a non-designer. Confirmation creates the authoritative architecture revision.

### Spatial engine

Responsible for collisions, clearances, door swings, window obstruction, circulation, ergonomics, service access, utilities, and other constraints. It must be deterministic for the same scene and proposal.

### Conversational engine

Responsible for intent, problem framing, candidate explanations, recommendations, and operation proposals. It may ask a focused question when a missing fact materially affects validity.

### Renderer

Responsible for projecting the current scene into top, dollhouse, room, and walkthrough views. It must not use generated images as architectural state.

## Persistence direction

Milestone 0 uses in-memory TypeScript contracts only. The first persistent implementation should store:

- projects and ownership,
- original uploads and derived render assets,
- architecture revisions,
- scene revisions,
- operation proposals and validation results,
- conversation facts and their confidence,
- user decisions and satisfaction feedback.

The storage adapter should be replaceable so a local development store can precede a hosted database without changing domain contracts.

## Deployment direction

The web application is a Next.js app suitable for Vercel. Stateless UI and request handlers should remain deployable without requiring a long-running server. Files, database access, and AI calls must be isolated behind adapters and configured through environment variables when introduced.

No external service is required for Milestone 0. Future services must be added only when the corresponding capability is genuinely implemented and verified.

## Security and trust direction

- Treat uploaded plans and images as untrusted input.
- Validate file type, size, and parsing boundaries server-side.
- Never expose provider keys to the browser.
- Scope projects and scene revisions to the authenticated owner when authentication is added.
- Keep an audit trail for applied operations.
- Clearly separate estimates from confirmed measurements.

## Decision records

The current decisions are:

- Next.js is the deployable web foundation.
- Structured TypeScript scene contracts precede a 3D renderer.
- Product truth is documented separately from milestone status.
- No mock upload, canned AI, or pseudo-3D is presented as a working capability.
