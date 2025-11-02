<!--
Purpose: short, actionable instructions for AI coding agents (Copilot-style) to be immediately productive in this repo.
Keep this file concise (20–50 lines). Do not include aspirational rules—document only discoverable, repo-specific patterns.
-->

# Copilot / AI Agent Instructions — CarCommunity

Quick context
- Angular (v20.x) single-page app generated with Angular CLI. Uses TypeScript, SCSS, and Karma/Jasmine for tests.
- App entry: `src/main.ts` uses `bootstrapApplication(App, appConfig)` (standalone bootstrap). Important: tracing was wired into `main.ts` (`src/app/tracing.ts`) — preserve that call when changing bootstrap order.
- API base URL is defined in `src/environments/environment.ts` (key: `apiUrl`) and should be used when calling backend services.

Key files & patterns (where to look)
- `src/main.ts` — application bootstrap and early init (tracing, feature flags). Keep side-effect imports here minimal.
- `src/app/app.config.ts`, `src/app/app.routes.ts`, `src/app/app.ts` — app configuration, routes, and root component.
- Feature modules live under `src/app/<feature>/` (example: `cars/`, `auth/`, `dashboard/`). Many features have both `<feature>-module.ts` and `<feature>-routing-module.ts`.
- Services: place under the feature folder (e.g., `src/app/cars/car.service.ts`, `src/app/dashboard/dashboard.service.ts`). Use provided services instead of global singletons unless the pattern already exists.
- Interceptors: `src/app/core/interceptors/TokenInterceptor.ts` — all outgoing HTTP calls go through this interceptor for auth headers. When changing HTTP behavior, update or reuse this interceptor.
- Tests: `*.spec.ts` live next to their implementation files. Test runner: `ng test` (Karma + Jasmine).

Developer workflows and commands (explicit)
- Start dev server: `npm run start` (alias for `ng serve`). App served at `http://localhost:4200`.
- Build: `npm run build` (`ng build`).
- Unit tests: `npm run test` (`ng test`).
- Install dependencies: `npm install`. If peer-dependency conflicts appear (common with `zone.js` vs some instrumentations), use `npm install --legacy-peer-deps`.

Conventions an AI should follow in edits
- File naming: kebab-case (e.g., `car-list.ts`, `car-details.ts`), test files as `<name>.spec.ts` next to source.
- Styling: SCSS per-component (`*.scss` alongside `*.html` and `*.ts`). Prefer existing component styles over global overrides.
- Routing and modules: add new routes in a feature routing module (`*-routing-module.ts`) and import that routing module in the feature module; follow existing feature-module structure.
- DI / Services: register services with `providedIn` or at module level consistent with nearby examples (inspect `auth.service.ts`, `car.service.ts`).

Integration points & external dependencies
- Backend: configured via `environment.apiUrl`. Do not hardcode backend URLs; read from environment files.
- Auth: `auth` feature manages login/register/profile. TokenInterceptor attaches tokens — updating auth flows requires coordinated changes to `auth` and `core/interceptors/TokenInterceptor.ts`.
- UI: `@angular/material` is installed and used. Follow existing component patterns for dialogs, form controls, and theming.

What to preserve / risk areas
- The project mixes a `src/app/app.module.ts` file and standalone bootstrap in `main.ts`; avoid removing legacy NgModule files unless making a deliberate migration. Prefer minimal changes that keep both working.
- `zone.js` is present and required by Angular; some third-party instrumentations may have peer-version constraints—avoid changing `zone.js` without testing the app.
- The tracing bootstrap `src/app/tracing.ts` was added; keep its call at the top of `main.ts` so traces initialize early.

Examples (use these as templates)
- Add a new route: see `src/app/cars/cars-routing-module.ts` for pattern. Create `FeatureModule`, `FeatureRoutingModule`, and add lazy route to `app.routes.ts`.
- Add service call: look at `src/app/cars/car.service.ts` for how HTTPClient is used and how `environment.apiUrl` is composed.

If you modify build/dev config
- Update `package.json` scripts and ensure `ng build` still works. After edits, run `npm run build` and `npm run test` locally.

When stuck or for verification
- Run: `npm run start` then open `http://localhost:4200` to smoke-test UI changes.
- Check HTTP flows against `environment.apiUrl` and inspect TokenInterceptor logic for authentication issues.

Ask for feedback: after applying changes, leave a short PR description referencing the relevant files changed (e.g., `main.ts`, feature module, routing module, service, and test). Request the maintainer to run `ng serve` and `ng test` to confirm.
