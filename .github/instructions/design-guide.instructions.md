---
description: "Use when building or refining the Bingo Mixer UI. Guides design toward a cleaner, calmer cyberpunk neon aesthetic with high readability, subtle motion, and modern card layouts."
applyTo: ["src/**/*.tsx", "src/index.css"]
---
# Design Guide for Bingo Mixer

- Use a **dark background** with a restrained neon palette: soft indigo/blue, pink, and cyan accents.
- Prefer **muted surfaces** over bright fills. Keep cards and panels layered with subtle borders and gentle depth.
- Prioritize **readability**: high contrast for primary text, muted secondary text, and careful spacing around words.
- Use **modern card-based layouts** with rounded corners, clear sections, and consistent padding.
- Keep motion **soft and slow**. Use subtle transitions and low-intensity animations rather than flashy movement.
- Use **glow sparingly**: small accent highlights, button edges, or focused outlines rather than full-screen neon haze.
- Keep the UI **clean and usable**: avoid too many decorations, keep copy concise, and make controls obvious.
- Prefer Tailwind CSS tokens and CSS variables in `src/index.css` for colors, shadows, and spacing.
- Keep the app responsive: the board, cards, and buttons should adapt to mobile, tablet, and desktop sizes.
- Preserve existing game flow and focus design changes on visual polish, not new behavior.

## Style priorities
- Calm neon accents over loud color blasts
- Clear typography and minimal text hierarchy
- Visible controls with subtle hover states
- Soft glass or surface layering instead of heavy chrome

## When to use
- When changing component styles in `src/components`
- When updating global look in `src/index.css`
- When implementing new screens or interaction states for Bingo Mixer
