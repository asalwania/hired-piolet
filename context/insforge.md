# InsForge Setup and Working Guide

This is the project-level operating guide for InsForge. It is based on the live
InsForge MCP `fetch-docs` responses for `instructions` and `auth-sdk`, plus the
TypeScript auth response from `fetch-sdk-docs`, fetched on 2026-07-17. Live
documentation remains authoritative because SDK and tool contracts can change.

The live instructions advertise an `auth-components-nextjs` document, but the
currently connected MCP tool schema rejects that value. The missing Next.js
contract was therefore verified against the official published SDK README and
package exports. `@insforge/sdk@1.4.5` exports both `./ssr` and
`./ssr/middleware`.

---

## Backend

- API base URL: `https://xfx5ja9k.ap-southeast.insforge.app`
- Platform services: PostgreSQL/PostgREST, authentication, storage, functions,
  realtime WebSockets, and AI/OpenRouter integration
- Application credentials belong in `.env.local`; never commit API keys or anon
  keys

---

## Codex MCP Setup

The InsForge MCP server is installed globally for Codex as `insforge` and uses
stdio transport through `@insforge/mcp@latest`.

Verify the registration without printing credential values:

```powershell
codex.cmd mcp get insforge
```

Reference setup command for another Windows machine. Replace placeholders; do
not paste real keys into project files or shell history shared with others:

```powershell
codex.cmd mcp add insforge `
  --env API_KEY=<insforge-management-api-key> `
  --env API_BASE_URL=<insforge-api-base-url> `
  --env NODE_OPTIONS=--use-system-ca `
  -- npx.cmd -y @insforge/mcp@latest
```

`NODE_OPTIONS=--use-system-ca` is required on this development machine so Node
uses the trusted Windows certificate store. Keep TLS verification enabled;
never work around certificate errors with `NODE_TLS_REJECT_UNAUTHORIZED=0`.

The management `API_KEY` is for MCP infrastructure operations. It must never be
exposed to browser code or copied into `NEXT_PUBLIC_*` variables.

---

## Required Workflow Before InsForge Code

1. Read this file and the InsForge section in `context/library-docs.md`.
2. Call InsForge MCP `fetch-docs` with `docType: "instructions"` when starting a
   new InsForge integration or when the setup may have changed.
3. Call `fetch-docs` again for the feature being implemented. The currently
   advertised tool-schema values are:
   - `auth-sdk`
   - `db-sdk`
   - `storage-sdk`
   - `functions-sdk`
   - `ai-integration-sdk`
   - `real-time`
   - `deployment`
4. If the MCP advertises `fetch-sdk-docs`, use it for the target language and
   feature when more specific documentation is needed.
5. Implement only from the returned API contract. Do not infer InsForge methods
   from Supabase or from model memory.
6. If live docs conflict with project architecture, stop and record the decision
   before changing the architecture or dependencies.

---

## Application SDK Baseline

The live InsForge instructions currently specify the TypeScript SDK:

```bash
npm install @insforge/sdk@latest
```

Create the client with the project URL and anon key:

```typescript
import { createClient } from "@insforge/sdk";

export const insforge = createClient({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_URL!,
  anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!,
});
```

For Feature 02, use the SSR helpers shipped inside the approved SDK through
`@insforge/sdk/ssr` and `@insforge/sdk/ssr/middleware`. This is an export subpath,
not a separate dependency; do not install the previously proposed standalone
`@insforge/ssr` package. The verified browser/server session pattern is recorded
in `context/library-docs.md`.

The verified Next.js 16 boundary is:

- Server Actions use `createAuthActions()` for auth mutations.
- OAuth uses server-side PKCE initialization and an explicit
  `/api/auth/callback` exchange so the refresh token lands in an HTTP-only app
  cookie.
- Server Components use `createServerClient()` with `await cookies()`.
- Client Components may use `createBrowserClient()` only to consume an existing
  SSR session.
- `app/api/auth/refresh/route.ts` uses `createRefreshAuthRouter()`.
- `proxy.ts` uses `updateSession` from `@insforge/sdk/ssr/middleware` to refresh
  cookies before protected Server Components render.
- Session refresh and route authorization are separate concerns; protected
  server boundaries must still verify the current user.

Required application variables:

| Variable | Exposure | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_INSFORGE_URL` | Browser-safe | InsForge backend base URL |
| `NEXT_PUBLIC_INSFORGE_ANON_KEY` | Browser-safe anon credential | SDK client initialization |

Server-only management, OpenRouter, or provider keys must not use the
`NEXT_PUBLIC_` prefix.

---

## SDK vs MCP Responsibilities

Use the application SDK for runtime product behavior:

- authentication and session flows
- database reads and writes
- file upload and download
- function invocation
- realtime subscriptions
- payments or AI calls exposed to application users

Use MCP tools for development-time infrastructure:

- downloading an InsForge starter template
- reading backend metadata
- creating or inspecting database schema
- running raw SQL
- creating and managing storage buckets
- deploying and managing serverless functions
- deploying the frontend

Never call a management MCP tool from application runtime code.

---

## Working Rules From Live Instructions

- SDK operations return `{ data, error }`; handle `error` every time.
- Database inserts use array form: `[{ ... }]`, including a single-row insert.
- Scope every user-owned query to the authenticated `user_id`.
- Storage uploads go into a bucket; save the resulting URL in the database when
  the application needs to reference the file.
- A serverless function has one endpoint and does not support nested route paths.
- AI integrations call OpenRouter through its OpenAI-compatible API using a
  server-side `OPENROUTER_API_KEY`; never expose that key to the browser.
- Fetch current feature documentation before writing or editing integration code.

### Tailwind version conflict

The generic InsForge instructions recommend Tailwind CSS 3.4 for its templates.
HiredPilot is already built and documented on Tailwind CSS v4. Do not downgrade
or mix Tailwind versions during backend work. If an InsForge-provided UI or auth
component strictly requires 3.4, run `/architect` and decide on an integration
strategy before adding it.

---

## Feature Checklist

Before marking an InsForge-backed feature complete:

- [ ] Relevant live MCP docs were fetched
- [ ] No management or server-only key is exposed to client code
- [ ] Every SDK result handles `{ data, error }`
- [ ] User-owned queries include `user_id` scoping
- [ ] Inserts use the form required by the current docs
- [ ] Browser and server responsibilities match the fetched auth/session pattern
- [ ] Infrastructure changes were made through MCP tools, not application code
- [ ] `context/library-docs.md` was updated if the live contract changed
