# Xai - Intelligence Workspace

A high-fidelity interactive product experience showing how Xai transforms raw data into structured intelligence, actionable insight, and AI automations.

## Live Demo
- Vercel: https://xai-intelligence-workspace-five.vercel.app/

## Figma
- Public Figma link: coming soon

## Tech Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion for React
- GSAP + ScrollTrigger
- React Three Fiber / Three.js

## Key Interactions
1. 3D raw-data cluster in the hero responds to cursor motion.
2. Scroll-linked insight flow explains the three-stage transformation.
3. Dashboard preview uses tab state transitions to feel like a product UI.
4. Signature interaction reorganizes scattered data into a structured intelligence graph.

## Run Locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Build
```bash
npm run build
npm run start
```

## Design Decisions
The interface uses a restrained dark visual system, precise spacing, and purposeful motion. Animations are used to explain product behavior instead of decorating the page.

## Known Limitations
- Mock data only; no backend.
- 3D visual is code-generated and intentionally lightweight for performance.
- Mobile layout is simplified to protect readability and performance.
