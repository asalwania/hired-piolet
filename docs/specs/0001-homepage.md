# 0001. Homepage

**Date**: 2026-07-16
**Status**: Accepted

## Summary

Build the public homepage to match the supplied landing page image. Use the existing visual tokens and the supplied images in `public/`. Keep the page static and server rendered until authentication is available.

## Context

The project needs a polished public entry point that explains the product and leads users toward login. The supplied landing page image fixes the visual direction, section order, copy, and asset placement.

This is the first feature in the Facade build sequence recorded in `context/build-plan.md`. The visible interface must be complete before authentication logic is connected.

## Requirements

**User stories**:

* As a job seeker, I want to understand the product quickly so that I can decide whether to start.
* As a visitor, I want clear calls to action so that I can enter the product flow.

**Acceptance criteria**:

* **AC-1**: The desktop homepage matches `context/designs/landing-page.png` in section order, spacing, typography, color, borders, and imagery.
* **AC-2**: The page includes the navbar, hero, dashboard preview, two feature sections, testimonial, final call to action, and footer shown in the design.
* **AC-3**: The page uses the supplied logo, dashboard, jobs list, agent log, and user images from `public/` through `next/image`.
* **AC-4**: Navigation and call to action controls use Next.js links with valid project routes.
* **AC-5**: The layout remains readable and usable on tablet and mobile widths without horizontal page overflow.
* **AC-6**: The page uses Inter, semantic landmarks, meaningful image text, visible keyboard focus, and reduced motion safe interactions.
* **AC-7**: The implementation uses project color tokens and contains no raw Tailwind color utilities or component level hex values.

## Options considered

### Option 1: Compose the page from supplied assets

Build the page structure in semantic React and use the supplied images for the detailed product previews.

**Pros**:

* Closely matches the reference while keeping real page content accessible.
* Reuses project assets and avoids new dependencies.

**Cons**:

* Responsive spacing still needs careful tuning around fixed aspect ratio images.

### Option 2: Render the full design as one image

Place the landing page image directly on the route.

**Pros**:

* Produces an immediate pixel match at one width.

**Cons**:

* Text, navigation, accessibility, responsiveness, and interaction would be lost.

## Decision

**Chosen option**: Option 1: Compose the page from supplied assets

Build a semantic server rendered page and use the detailed supplied previews where they carry the visual content.

## Rationale

The design and assets already settle the visual choices. Composing the page preserves accessible text and working navigation while the supplied previews retain the detailed visual fidelity that would be wasteful to recreate in markup.

## Feature design

**Data model sketch**:

No persisted entities. Page copy and presentation data are static module constants.

**API surface**:

No API surface. The route is a static public Server Component at `/`.

**Key invariants**:

* Section order and copy follow the supplied design.
* Project tokens provide all component colors.
* Supplied assets keep their intrinsic aspect ratios.
* No client side state is introduced.

**Security model**:

The page is public and performs no reads or writes of user data.

**Critical test scenarios**:

* Happy path: a desktop visitor sees the complete reference composition and can activate each link, verifies **AC-1**, **AC-2**, **AC-3**, and **AC-4**.
* Responsive case: a mobile visitor can read every section with no page overflow, verifies **AC-5**.
* Accessibility case: keyboard navigation, reduced motion, semantic structure, and image text remain usable, verifies **AC-6**.
* Standards case: lint and source review find no forbidden color usage, verifies **AC-7**.

## Build plan

1. [x] Apply Inter and product metadata in the root layout, satisfies **AC-6**.
2. [x] Build the homepage structure and responsive composition with the supplied assets, satisfies **AC-1**, **AC-2**, **AC-3**, and **AC-5**.
3. [x] Add route links, semantic labels, focus behavior, and reduced motion handling, satisfies **AC-4** and **AC-6**.
4. [x] Verify lint, production build, asset rendering, and color token compliance, satisfies **AC-1**, **AC-5**, **AC-6**, and **AC-7**.
5. [x] Record the completed components and feature status in the project context, satisfies **AC-2** and **AC-7**.

## Consequences

**Positive**:

* The first public surface is complete and visually testable before auth work begins.
* The detailed preview artwork stays consistent with the design.

**Negative / tradeoffs**:

* Preview images are presentation snapshots and will not reflect live product data.
* Fine layout changes may require coordinated updates to both markup and asset framing.

**Neutral**:

* Authentication aware redirects remain part of the later auth feature.
