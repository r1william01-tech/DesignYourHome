# DYH — DesignYourHome Product Constitution

## Mission

DesignYourHome exists for ordinary homeowners making one of the largest and most emotional purchases of their lives. Many cannot visualize a floor plan in 3D, understand design terminology, compare alternatives, judge fit, protect their budget, or know what to ask a contractor.

DYH helps homeowners explore, understand, and design their home before committing money. It removes fear and uncertainty from home design through a persistent digital twin, conversational reasoning, spatial analysis, and trustworthy explanations.

The homeowner should be able to answer:

1. What problems does my home need to solve?
2. What will actually fit?
3. What are my possible solutions?
4. Why is one solution better for my lifestyle?
5. What will it look and feel like?
6. What can I reuse?
7. What am I forgetting?
8. What compromises am I making?
9. What should I ask a designer or contractor to execute?
10. Am I confident enough to spend money on this decision?

## Core operating model

Every meaningful recommendation follows:

```text
PROBLEM → ANALYZING → ARCHITECTURE → SOLUTIONS → DECISION
→ VISUALIZATION → SATISFACTION → REFINE
```

DYH is not a prompt-to-pretty-image product. The uploaded floor plan is the source architecture for each project. Structured geometry is persistent, and design changes are validated operations against the same scene.

## Target user

The primary user is a busy homeowner with little or no architecture or interior-design knowledge. They may have five minutes initially, existing furniture, family-specific routines, budget concerns, and uncertainty about what to ask.

The application must never require the homeowner to become an interior designer. It should explain unfamiliar ideas in plain language, ask only questions that materially affect a decision, and allow personalization to grow over time.

## Guided experience

DYH is a premium, modern, multi-step journey rather than one large dashboard:

```text
WELCOME → UPLOAD YOUR HOME → VERIFY YOUR HOME → TELL US HOW YOU LIVE
→ WHAT DO YOU ALREADY OWN? → WHAT MATTERS TO YOU? → DYH ANALYSIS
→ PROBLEMS / OPPORTUNITIES → SOLUTIONS → 3D VISUALIZATION
→ ASK DYH → SATISFACTION / REFINE → FINAL HOME → DESIGN BRIEF
```

Two paths are supported:

- **Quick DYH:** approximately five minutes to upload a plan, choose priorities, receive useful initial concepts, and explore in 3D.
- **Personalized DYH:** optional deeper context about lifestyle, routines, family, furniture, appliances, profession, storage, sunlight, lighting, future needs, and budget.

A Quick DYH user can progressively personalize later.

## Product capabilities

### 1. Floor plan to digital twin

Accept PDF, JPG, PNG, and photographed plans where feasible. Visibly render the uploaded source and detect where possible: walls, rooms, dimensions, doors and swings, windows, balconies, toilets, wet areas, kitchen and service areas, structural features, and orientation.

Show the interpretation visually and allow simple confirmation and correction without requiring CAD skills. After confirmation, create deterministic structured geometry. Architecture must not randomly change between designs.

### 2. Persistent 3D

Generate a real navigable digital twin supporting orbit, zoom, pan, top view, dollhouse view, room view, and eventually first-person walkthrough. Architecture remains persistent. Design changes modify scene objects; they do not regenerate the entire home for every prompt.

### 3. Ask DYH conversational brain

The permanent conversational interface accepts plain English such as “make this room feel bigger,” “where should my washing machine go,” “I already own this sofa,” “my daughter plays here,” and “show this at 7 PM.”

AI produces two outputs:

1. A human explanation covering the problem, reasoning, options, recommendation, and trade-offs.
2. Structured design or scene operations.

The spatial engine validates operations before execution. AI reasons, the spatial engine validates, and the 3D engine visualizes.

### 4. Lifestyle intelligence

Capture relevant household, routine, work, cooking, children, elderly, storage, clutter, laundry, privacy, and future-needs context conversationally. Never stereotype by profession; suggest likely needs and confirm relevance.

### 5. Problem discovery

Proactively identify issues a user may not know exist, including narrow circulation, insufficient storage, oversized furniture, poor TV geometry, door and wardrobe collision, weak laundry workflow, glare, afternoon heat, poor task lighting, wasted corners, inaccessible storage, privacy issues, and future adaptability.

Explain what the problem is, why it matters, and what happens if it is ignored.

### 6. Multiple solutions

For meaningful problems, provide approximately two to four valid options. Each option explains what it solves, why it works, advantages, disadvantages, circulation and storage impact, lifestyle fit, maintenance impact, budget category where reliable, existing-furniture reuse, and future adaptability. Recommend based on the homeowner's priorities while keeping the decision with the user.

### 7. Existing furniture and appliances

Allow photos or uploads of owned sofas, dining sets, beds, wardrobes, TVs, refrigerators, washing machines, desks, cabinets, decor, and appliances. Identify items, request dimensions when needed, and mark cautious estimates clearly. Classify each item as KEEP, MODIFY, or REPLACE based on spatial fit, function, style, and value.

### 8. Space and ergonomic intelligence

Validate actual dimensions, walking clearance, door swings, shutters, drawers, seating pull-out, bed circulation, TV viewing distance, work ergonomics, child movement, elder accessibility, balcony access, and service access. Flag designs that fit physically but create poor usability. Users may override a warning, but the trade-off must be visible.

### 9. Light, sun, and heat

Where available, capture location, north orientation, floor, and surrounding obstruction information. Analyze approximate exposure, glare, heat, and daylight. Distinguish calculated exposure from confirmed site conditions.

### 10. Lighting

Every room considers natural, ambient, task, and accent lighting, including fixture position, glare, activity, colour temperature, ceiling design, maintenance, child and elder needs, and night navigation. Eventually support day, evening, night, and selected times.

### 11. Utilities and appliances

Utility placement considers water, drainage, electrical points, ventilation, vibration, noise, drying route, service access, moisture, and workflow. The same model eventually covers refrigerators, dishwashers, RO systems, geysers, AC units, routers, robot-vacuum docks, and charging points.

### 12. Common design ideas

DYH shows common ideas for foyers, living rooms, dining rooms, bedrooms, and kitchens, but every idea must pass spatial fit, lifestyle fit, maintenance, budget, and longevity checks. Popular does not mean appropriate.

### 13. Inspiration to my home

Reference images from Pinterest, Instagram, photos, or interiors contribute style, materials, palette, design language, furniture character, and lighting character. The language is adapted to the user's real architecture; reference geometry is never copied into the home.

### 14. Style discovery

Use visual examples and “I like this” or “I don't like this” feedback to infer preferences gradually. Mixed styles are valid. Style never overrides functionality.

### 15. Budget and value

Eventually support approximate budgets, must-have versus nice-to-have, reuse-first alternatives, cost bands, and high-impact low-cost alternatives. Identify savings, maintenance costs, high-value spend, cosmetic spend, and choices that are hard to change later.

### 16. Maintenance and real life

Consider dust, fingerprints, cleaning access, open shelves, glossy surfaces, child marks, grease, moisture, difficult corners, replaceable parts, and hardware durability. Warn when attractive choices create a maintenance burden.

### 17. Electrical details

Eventually account for outlets, switches, charging, bedside power, TV and data, router placement, appliance outlets, workstations, cleaning equipment, and night lights. Furniture must not block required access.

### 18. Future-proofing

Prefer adaptable solutions where appropriate for children growing, study, aging parents, WFH changes, reversible rooms, resale, rental, and storage growth.

### 19. Home Fit score

Eventually provide a personalized assessment across spaciousness, storage, lifestyle fit, child and elder friendliness, lighting, natural light, maintenance, budget, furniture reuse, and future adaptability. Weights follow homeowner priorities. There is no universal best interior—only the best fit for this home, these people, this lifestyle, this budget, and this future.

### 20. Satisfaction loop

Ask whether the original problem was solved, whether the room feels spacious enough, whether storage is sufficient, whether the design fits the routine, and what still feels wrong. Satisfaction loops back into a new problem, analysis, solutions, decision, visualization, and satisfaction.

### 21. Final design brief

When satisfied, generate a structured brief with the floor plan, selected design, room decisions, problems solved, furniture placement, reused and modified items, new items, lighting intent, storage intent, material and style direction, assumptions, unresolved decisions, budget categories, and contractor questions.

The homeowner should be able to approach multiple contractors with the same requirement and compare quotations without being forced to commit to one company to obtain a design.

## Trust principles

Never present assumptions as measurements. Label information as **CONFIRMED**, **INFERRED**, **ESTIMATED**, or **NEEDS VERIFICATION**. Structural, electrical, plumbing, and safety-critical recommendations require professional verification before execution.

Do not create false precision or optimize only for beautiful renders. A beautiful but impractical home is a failed DYH outcome.

## Success metric

DYH succeeds when a homeowner can say:

- I understand what my home needs.
- I know why this layout works.
- I saw the alternatives.
- I know the compromises.
- I visualized it before spending.
- I know what I already own can be reused.
- I know what to ask my contractor.
- I am confident about my decision.

The goal is not to generate a beautiful 3D image. The goal is to remove fear and uncertainty from designing a dream home.

## Engineering principle

Build capabilities incrementally. Every capability shown as working in the UI must genuinely work. There must be no fake upload, CSS pseudo-3D presented as a digital twin, canned AI responses presented as reasoning, non-functional buttons, or random rooms that violate floor-plan geometry. Milestone 1 remains the approved first vertical slice, and its architectural decisions must support this constitution.
