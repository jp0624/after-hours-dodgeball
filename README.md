# After Hours · 5v5 Dodgeball
Full-window first-person dodgeball by John Parker. You and four AI teammates face five AI opponents. Physical projectile flight, charged throws, timed catches, opponent eliminations and teammate returns, safe floor rebounds, autonomous ball pickup, two difficulty settings, radar, spectator recovery, warmup and best-of-three matches.

## Reproduce
Node 20.19+ or 22.12+. `npm ci`, `npm run dev`, `npm test`, `npm run build`. Vercel preset: Vite, output: dist. No backend, credentials, accounts, analytics or multiplayer service.

## Play
WASD move; drag the court or arrow keys look. E aims toward an opponent. Hold Throw (or F) then release to throw; Enter on Throw is a medium-power keyboard throw. Space opens a 0.42-second catch window with empty hands; face the incoming ball. Shift bursts forward/movement direction. P/Esc pauses. Pointer lock is optional; when locked, mouse aims and left hold/release throws. Touch uses the on-screen pad, drag aiming and action buttons. All balls on the floor are safe after their first bounce and collect automatically nearby. Warmup registers hits without eliminating the human player. Match stats persist locally. Reduced motion removes limb animation; camera has no automatic shake or head bob. Audio is opt-in.

## Engineering
Three.js WebGL rendering uses a procedural wood texture, standard materials, hemisphere/directional lighting and soft shadows. An automatic SVG 3D compatibility renderer uses the same camera, geometry and simulation on browsers lacking WebGL. The compatibility renderer has simpler flat shading. Player models and court geometry are code-native. Original generated photographic lobby artwork is used only on the intro screen; gameplay is rendered from the 3D world.

Simulation uses fixed 120Hz steps with segment-to-body collision checks, gravity, bounces, friction, strict team/court boundaries, AI interception estimates, possession, catch cooldowns and deterministic tests. Tests cover team size, throws, hits, safe balls, catch/revive rules, fast projectile intersections, AI full matches and reset. Game rules are simplified and fictional; this is a single-player simulation.
