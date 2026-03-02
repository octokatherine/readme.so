# Copilot Instructions

## Build & Test Commands

- **Dev server:** `npm run dev` (runs on localhost:3000)
- **Build:** `npm run build` (static export to `out/` directory)
- **Test all:** `npm test`
- **Test single file:** `npx jest __tests__/editor.test.js` or `npx jest components/__tests__/Nav.test.js`
- **Test watch:** `npm run test:watch`
- **Lint:** `npm run lint` (runs Next.js linter + Prettier check)
- **Format:** `npm run format` (Prettier auto-fix)

## Architecture

This is a static Next.js app (exported to `out/`) that lets users build README.md files by selecting, editing, and reordering markdown section templates.

### Data flow

All state lives in `pages/editor.js` and is passed down via props — there is no global state management library. The key state:

- **`templates`** — array of `{ slug, name, markdown }` objects representing all available sections with their current markdown content
- **`selectedSectionSlugs`** — ordered array of slug strings the user has added to their readme
- **`focusedSectionSlug`** — which section is currently being edited
- **`sectionSlugs`** — slugs not yet added (the "available" pool)

User edits persist to `localStorage` via the `useLocalStorage` hook (key: `readme-backup`), which debounces saves by 1 second. The selected section list is also stored in `localStorage` under `current-slug-list`.

### Section templates

Defined in `data/section-templates-{locale}.js` as exported arrays of `{ slug, name, markdown }` objects. The `data/index.js` file maps locale keys to template sets, though the editor currently hardcodes `en_EN`.

Custom sections get a slug prefixed with `custom-` (e.g., `custom-my-section`). This prefix is checked when resetting a section to distinguish custom from built-in templates.

### Three-column layout

1. **SectionsColumn** (left) — lists selected sections (drag-to-reorder via `@dnd-kit`) and available sections to add
2. **EditorColumn** (center) — Monaco editor on desktop, `<textarea>` on mobile
3. **PreviewColumn** (right) — rendered markdown preview (via `react-markdown` + `remark-gfm`) or raw markdown view

Mobile uses a tab-based UI instead of side-by-side columns.

## Conventions

- **Formatting:** Prettier with no semicolons, single quotes, trailing commas (es5), 2-space indent, 100 char print width
- **Styling:** TailwindCSS utility classes with `class` dark mode strategy. Color palette is limited to emerald, gray, black, white, transparent, and current
- **Components:** Functional components only. Mix of named exports (`export const Foo`) and default exports — no consistent pattern
- **Testing:** Jest + React Testing Library. Tests live in `__tests__/` (page-level) and `components/__tests__/` (component-level). Coverage is collected for `components/*` and `pages/editor.js`
- **Static export:** The app uses `output: 'export'` in `next.config.js` — no server-side features (no API routes, no SSR, no `getServerSideProps`)
