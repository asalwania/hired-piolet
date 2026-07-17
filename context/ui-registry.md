# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here
2. If yes — match its exact classes
3. If no — build it following ui-rules.md and ui-tokens.md, then add it here

After building any component — update this file with the component name, file path, and exact classes used.

---

## Components

No UI components were added or changed by the InsForge MCP setup and
documentation update. Existing component patterns remain authoritative.

### Navbar

**Path:** `components/layout/Navbar.tsx`

White full width header with a token border, responsive primary navigation, the HiredPilot logo, and the dark landing call to action.

**Classes:** `border-b border-border bg-surface`, `mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8`, `hidden items-center gap-8 md:flex`, `rounded-sm text-sm font-medium text-text-dark transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`, `landing-button-primary min-h-11 px-4 py-2`.

### Footer

**Path:** `components/layout/Footer.tsx`

Responsive logo and utility link footer matching the landing page frame.

**Classes:** `border-x border-b border-border bg-surface`, `mx-auto flex min-h-40 max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 sm:flex-row lg:px-10`, `flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-text-dark`.

### Hero

**Path:** `components/homepage/Hero.tsx`

Centered gradient hero and full dashboard product preview.

**Classes:** `landing-hero-glow border-x border-t border-border px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24`, `mx-auto max-w-3xl`, `text-4xl font-semibold tracking-tight text-text-black sm:text-5xl lg:text-6xl`, `landing-button-primary`, `landing-button-secondary`, `border-x border-t border-border bg-surface-tertiary px-4 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16`, `landing-browser-shadow mx-auto h-auto w-full`.

### HowItWorks

**Path:** `components/homepage/HowItWorks.tsx`

Two column feature explanation with three bordered rows and the supplied jobs list preview.

**Classes:** `grid border-x border-t border-border bg-surface lg:grid-cols-2`, `px-8 py-12 text-3xl font-semibold tracking-tight text-text-primary sm:px-16 sm:py-16 lg:px-20 lg:text-5xl`, `border-l-2 border-b border-border px-8 py-8 last:border-b-0 sm:px-16 lg:px-20`, `flex items-center justify-center border-t border-border bg-surface-muted p-8 sm:p-14 lg:border-l lg:border-t-0 lg:p-16`, `landing-card-shadow h-auto w-full max-w-2xl`.

### Features

**Path:** `components/homepage/Features.tsx`

Mirrored two column feature explanation with the supplied agent log preview.

**Classes:** `grid border-x border-border bg-surface lg:grid-cols-2`, `order-2 flex items-center justify-center border-t border-border bg-surface-muted p-8 sm:p-14 lg:order-1 lg:border-r lg:border-t-0 lg:p-16`, `order-1 flex flex-col justify-center lg:order-2`, `border-l-2 border-b border-border px-8 py-8 last:border-b-0 sm:px-16 lg:px-20`, `landing-card-shadow h-auto w-full max-w-2xl`.

### Testimonial

**Path:** `components/homepage/Testimonial.tsx`

Centered customer quote and portrait attribution.

**Classes:** `border-x border-border bg-surface px-6 py-20 text-center sm:py-24`, `text-xs font-semibold uppercase tracking-widest text-accent-dark`, `mx-auto mt-8 max-w-4xl text-2xl font-medium leading-9 text-text-dark sm:text-3xl sm:leading-10`, `mt-8 flex items-center justify-center gap-3`.

### FinalCta

**Path:** `components/homepage/FinalCta.tsx`

Closing gradient call to action with the same paired buttons as the hero.

**Classes:** `landing-hero-glow border-x border-border px-6 py-20 text-center sm:py-24`, `mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-text-black sm:text-5xl lg:text-6xl`, `landing-button-primary`, `landing-button-secondary`.

### Landing page shared patterns

**Path:** `app/globals.css`

Reusable landing patterns: `landing-hero-glow`, `landing-divider`, `landing-card-shadow`, `landing-browser-shadow`, `landing-button-primary`, and `landing-button-secondary`. All colors reference project tokens. Motion respects `prefers-reduced-motion`.
