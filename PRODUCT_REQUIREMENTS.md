# DYH Product Requirements

This document turns the product constitution into traceable engineering requirements. Statuses describe the repository today and must not be inferred from UI appearance.

## Status vocabulary

- **Planned:** defined for a later milestone.
- **In progress:** actively being built.
- **Implemented:** code exists for the requirement.
- **Verified:** implemented and tested against explicit acceptance criteria.

## Milestone 0 — foundation

| ID | Requirement | Status |
| --- | --- | --- |
| M0-001 | The app runs as a standard Next.js application. | Implemented |
| M0-002 | Vercel can build the app with the default Next.js preset and no secrets. | Implemented |
| M0-003 | The product constitution is stored in `PRODUCT_VISION.md`. | Implemented |
| M0-004 | Requirements, architecture, and milestones are documented separately. | Implemented |
| M0-005 | Architecture has typed contracts for a persistent scene and proposed operations. | Implemented |
| M0-006 | The landing page does not represent unimplemented features as working. | Implemented |
| M0-007 | A clean local install, lint, and production build succeed. | In progress |

## Milestone 1 — approved first vertical slice

| ID | Requirement | Status |
| --- | --- | --- |
| M1-001 | Accept arbitrary PDF, JPG, and PNG floor plans where supported. | Planned |
| M1-002 | Visibly render the exact uploaded source. | Planned |
| M1-003 | Establish structured walls, rooms, doors, and windows from the upload. | Planned |
| M1-004 | Show detected interpretation for user confirmation and correction. | Planned |
| M1-005 | Persist confirmed architecture as the project's source of truth. | Planned |
| M1-006 | Generate a real navigable 3D shell from confirmed geometry. | Planned |
| M1-007 | Select a room in the persistent scene. | Planned |
| M1-008 | Accept one natural-language design request. | Planned |
| M1-009 | Produce a homeowner explanation and structured operation proposal. | Planned |
| M1-010 | Validate proposals for collisions, clearance, openings, and room constraints. | Planned |
| M1-011 | Present multiple valid options and trade-offs. | Planned |
| M1-012 | Apply only the chosen operation to the same scene. | Planned |
| M1-013 | Refine only the selected object without changing unrelated architecture. | Planned |

## Cross-cutting requirements

### Source of truth

- The uploaded floor plan is the source input for each project.
- Confirmed structured geometry is the only architectural source of truth.
- The renderer is a projection of the structured scene.
- Generated images are never authoritative geometry.

### Persistence and determinism

- Each project owns one persistent scene.
- Scene edits are incremental and revisioned.
- Unrelated objects remain unchanged when a localized edit is applied.
- The same confirmed input and operation produce deterministic geometry.

### AI and spatial boundaries

- The AI interprets intent, identifies problems, generates candidates, explains trade-offs, and emits structured operations.
- The AI cannot directly mutate the scene.
- The spatial engine validates geometry and constraints before application.
- Invalid proposals are rejected with an understandable explanation and alternatives where possible.

### Trust and uncertainty

- Every measurement or recommendation has a confidence classification.
- Confirmed, inferred, estimated, and needs-verification information is visually distinguishable.
- Safety-critical recommendations require professional verification.
- The product must not imply site certainty from an approximate plan or calculated sunlight model.

### UX

- The user sees only decisions relevant to the current step.
- Quick DYH and Personalized DYH are both supported by the architecture.
- Plain-language explanations are the default.
- A user can correct the system without CAD knowledge.
- Missing capability is disclosed instead of simulated.

## Future capability register

The following are protected product requirements, not Milestone 1 commitments: lifestyle intelligence, existing-item capture, ergonomic analysis, sunlight and heat analysis, lighting states, utility placement, common design ideas, inspiration adaptation, style discovery, budget intelligence, maintenance analysis, electrical details, future-proofing, Home Fit scoring, satisfaction loops, and the final Design Brief.

## Governance rule

If a proposed implementation makes a current milestone easier but violates the Product Vision or an architectural invariant, reject the implementation and record the decision. The absence of a future capability in an early milestone does not remove it from the product.
