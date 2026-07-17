# HiredPilot Design Direction

**Source**: `context/designs/landing-page.png`

## Character

Calm, precise, and encouraging. The interface uses generous white space, soft cool surfaces, fine borders, and restrained purple and blue accents. Product previews carry the visual detail while the surrounding page stays simple and editorial.

## Build mandate

Match the supplied landing page faithfully. Use a centered wide canvas, strong two line headings, compact supporting copy, dark primary calls to action, and quiet section dividers. Keep product imagery crisp and prominent. Do not add decoration, effects, or content that is absent from the reference.

## Composition

The public homepage follows this order:

1. Compact white navbar with the HiredPilot logo, three product links, and a dark call to action.
2. Soft multicolor hero with a centered headline, supporting text, and two calls to action.
3. Cool surface dashboard preview with a large browser image.
4. Two column job search section with three explanatory rows and the jobs list preview.
5. Two column confidence section with the agent log preview and three explanatory rows.
6. Centered customer quote with a small portrait and attribution.
7. Soft multicolor closing call to action.
8. Minimal white footer with the logo and utility links.

## Component patterns

Cards use white surfaces, fine cool borders, large rounded corners, and subtle depth. Feature rows use a quiet divider and a thin accent line only for the highlighted item. Buttons use compact labels and clear focus rings. Product preview images sit inside pale framed panels and keep their original proportions.

## Responsive behavior

Desktop uses the two column composition from the reference. Tablet and mobile stack each feature section with text before its supporting image. Navigation wraps safely without a drawer in this static first feature. Calls to action become full width on narrow screens.

## Tokens

All token values live in `app/globals.css`. `context/ui-tokens.md` and `context/ui-rules.md` define the project wide usage rules.
