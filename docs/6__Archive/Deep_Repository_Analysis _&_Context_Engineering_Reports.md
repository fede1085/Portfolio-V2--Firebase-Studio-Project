# Deep Repository Analysis & Context Engineering Reports

## 1) Project Scope Report

### Purpose & Current Functionality
- Personal portfolio web app built with **Next.js (App Router)** and **Firebase**.
- Acts as a **blog/log system** for an AI & Automation consultant: create, edit, and display “logs” (updates, case notes, mini case studies) with **text + multiple images**.
- Stores content in **Firestore**; images in **Firebase Storage**. Uses **server actions** for create/edit flows and **ISR revalidation** for list/home pages.

### In-Scope (Explicit)
- **CRUD for Logs:** title, description, main image, up to 8 supporting images (with captions), related log links.
- **Media Upload:** client form → server action → Storage upload → public URL saved in Firestore.
- **Next.js Features:** App Router, React Server Components, server actions (`"use server"`), middleware (present but currently bypassed).
- **UI:** modern components (Radix/shadcn-style), Tailwind utility classes, icons via lucide-react.

### In-Scope (Implicit) / Not Yet Fully Used
- **Public/Draft flag (`isPublic`)** exists; currently not consistently enforced in UI filtering.
- **Fuzzy search (`fuse.js`)** dependency exists; current search is simple client-side filter.

### Out-of-Scope (Current State)
- **User auth/roles** (only owner assumed; middleware BasicAuth is disabled).
- **E-commerce, booking, payments, multi-tenant** features.
- **AI generation** (genkit, google-ai deps present but not wired-in).

### Key Dependencies
- **Next.js 14 / React 18**, **TypeScript**, **Tailwind CSS**.
- **Firebase SDK** (Firestore + Storage), **date-fns**, **zod** (validation), **Radix UI / shadcn primitives**, **lucide-react**.

### Risks & Gaps
- **Auth/Security:** write endpoints likely public if URLs are known; BasicAuth bypassed. Recommend **Firebase Auth** or re-enable guarded middleware for admin routes.
- **Performance:** fetch-all + client-filtering; no pagination; related-title N+1 lookups. Recommend **limit/paginate** queries and **denormalize** related titles or fetch in batch.
- **Error UX:** server actions return generic messages; improve user-facing feedback and granular errors.
- **Debug/Noise:** leftover debug writes/logging in actions; remove for production.
- **Docs:** missing setup, env, deployment, and architecture docs (see Report 4).

---

## 2) Architecture & Information Flow Report

### High-Level Structure
- **`src/app/`** — Routes, layouts, pages (e.g., `/`, `/logs`, `/logs/[id]`, `/logs/new`, `/logs/[id]/edit`).
- **`src/components/`**
  - `components/ui/` — Reusable UI primitives (button, card, dialog, etc.).
  - Section/components (e.g., `LogList`, forms, layout shells).
- **`src/lib/`**
  - `firebase` init (`db`, `storage`).
  - `firestoreUtils.ts` — `getLogs()`, `searchLogs()` (query Firestore, post-process, related-title resolution).
  - `actions.ts` — `createLogAction`, `editLogAction` (server actions: validate, upload, write, revalidate).
- **`middleware.ts`** — BasicAuth scaffolding present; currently **bypassed** (pass-through).
- **`firebase/*`** — Storage rules (currently permissive for dev), hosting/emulator configs (as applicable).

### Information Flow (Create/Edit)
1. User opens **New/Edit** page → submits **form (FormData)**.
2. **Server action** validates (`zod`), uploads images to **Storage** (main + support), obtains URLs.
3. Writes/updates **Firestore** doc (title, desc, images[], related[], timestamps).
4. Calls **`revalidatePath("/")` and `revalidatePath("/logs")`** to refresh ISR.
5. UI shows success/failure (toast/note) and redirects/list refresh.

### Information Flow (List/View)
1. **List page / component** calls `getLogs()` (client or server) → Firestore query (sorted newest).
2. For each log: resolve **related log titles** (N+1 reads), shape data (ISO dates, defaults).
3. UI filters **client-side** by `?q=` on title/description; renders cards with **image grid + dialog**.
4. Related links navigate to **`/logs/[id]`** detail page.

### Data Model (Firestore: `logs`)
- `title` (string), `description` (string), `isPublic` (boolean, optional),
- `imageUrls`: array of `{ url: string | null, caption?: string }` (main + support),
- `relatedLogs`: array of log IDs (strings),
- `createdAt`, `updatedAt` (server timestamps).

### Bottlenecks / Duplications / Opportunities
- **N+1** related-title lookups in `getLogs()`; consider **batch fetch** or store `{id, title}` pairs within each doc.
- **Fetch-all** + client filter; move to **paginated queries** or **server search** (optionally with Fuse on server).
- **Middleware** has dead code path (early pass-through); **remove or guard** by env.
- **Debug writes/logging** in actions; **strip for prod**.
- **“isPublic”** not enforced; add filters (query or post-filter) for public pages.

### (ASCII) Simplified Architecture Diagram

- **Client (Next.js App)**
  - Pages: `/`, `/logs`, `/logs/[id]`, `/logs/new`, `/logs/[id]/edit`
  - Components: `LogList`, `LogCard`, `Dialog`, `Form`
  - Actions: form submit → server actions
- **Server (Next.js Server Actions)**
  - `createLogAction` / `editLogAction`
  - Validates (zod), uploads (Storage), writes (Firestore), revalidates ISR
- **Firebase**
  - **Firestore**: `logs` collection (documents with fields above)
  - **Storage**: images for logs (public URLs)
- **Middleware**
  - (Optional) BasicAuth; currently pass-through

Data flow:  
`Form → ServerAction → (Storage uploads) → Firestore write → revalidate → List fetch → UI render`

---

## 3) Testing Coverage Report

### Current Coverage
- **No automated tests detected** (no Jest/RTL/Cypress/Playwright setup, no `*.spec|test.*` files).
- Validation/CRUD logic, Firestore utils, and UI states are **untested**.

### Highest-Value Targets (Add First)
1. **Server Actions (`createLogAction`, `editLogAction`)**
   - Valid inputs create/update docs; invalid inputs return precise errors.
   - Edge cases: >9 images, invalid type/size, failed upload (Storage), missing ID on edit.
   - Use **Jest** with **module mocks** (mock Firestore/Storage) or **Firebase Emulator** in CI.

2. **Firestore Utils (`getLogs`, `searchLogs`)**
   - Given mocked snapshots, returns correctly shaped logs, ISO timestamps.
   - Related-titles resolution (simulate related docs).
   - Error mapping (e.g., unavailable → typed error).

3. **UI Components (Integration)**
   - `LogList` rendering states: loading, empty, error.
   - Search filter behavior (case-insensitive, matches title/desc).
   - Image dialog opens on click; related links present.

4. **E2E Flows (Playwright/Cypress)**
   - Create log: fill form + image → appears in list.
   - Edit log: modify title/desc/images → reflected in list/detail.
   - (If enabling auth) unauthorized vs authorized paths.

### Frameworks & Strategy
- **Unit/Integration:** Jest + React Testing Library; mock Firebase SDK or inject emulator connections.
- **E2E:** Playwright or Cypress; optional Firebase Emulator for realistic persistence.
- **CI:** GitHub Actions workflow (Node 20), run unit + E2E (emulator in service container).
- **Coverage Goals:** near-100% on `lib` (actions/utils), representative UI paths; guard regressions before deploy.

---

## 4) Documentation Gaps Report

### Missing / Weak
- **README.md** (or too minimal): no clear setup, env, run, deploy instructions.
- **Architecture overview**: no description of folders, flows, server actions, ISR, middleware.
- **Auth/Security note**: middleware BasicAuth exists but is bypassed; not documented.
- **Language consistency**: mixed English/Indonesian logs/comments; unify for maintainers.
- **Onboarding & contribution**: no DEV guide, no env template, no testing instructions.

### Add / Improve

**A. README Essentials**
- **Project summary** (what it is/who for).
- **Prereqs**: Node 20, pnpm/npm, Firebase project.
- **Setup**: `cp .env.example .env.local` then fill:
  - `NEXT_PUBLIC_FIREBASE_API_KEY`, `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID`, `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`, etc.
  - Optional BasicAuth: `BASIC_AUTH_USER_MW`, `BASIC_AUTH_PASS_MW`.
- **Run**: `npm i`, `npm run dev`.
- **Deploy**: Firebase Hosting (or Vercel) steps; emulator notes if used.

**B. Architecture Docs**
- **Folder map** with roles:
  - `src/app` (routes/layouts), `src/components/ui` (primitives), `src/components/...` (features), `src/lib` (firebase init, utils, actions).
- **Flow diagrams** (create/edit, list/view, revalidation).
- **Data model**: Firestore `logs` schema, Storage path conventions.

**C. Security**
- Document the **current state** (public) and the **option** to enable BasicAuth or proper **Firebase Auth** (recommendation).
- Storage & Firestore **rules**: ship dev rules + production tightening guide.

**D. Testing**
- How to run unit/integration/E2E.
- If using emulator: start commands + env pointing to emulator.
- CI integration (badge, workflow snippet).

**E. Style & Contrib**
- ESLint/Prettier commands; commit hooks (if any).
- PR checklist (tests passing, lint ok, docs updated).

---

## Quick Remediation Roadmap (Optional)

1) **Security**: Enable either Firebase Auth for admin pages or re-enable BasicAuth guarded by env; lock down Storage/Firestore rules for prod.  
2) **Performance**: Add pagination on `/logs`; batch or denormalize related-title lookups.  
3) **DX**: Strip debug logs/writes; centralize constants; unify language (EN).  
4) **Testing**: Add Jest/RTL + 2–3 E2E flows (create/edit).  
5) **Docs**: Write README + ARCHITECTURE.md + ENV template; add CI badges.  
6) **UX polish**: Better error toasts, empty states, drag-and-drop for images, progress indicators.

---
