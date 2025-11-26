# 12-Zodiac Interactive Dashboard

A lightweight, responsive, and interactive 12-Zodiac dashboard built with vanilla HTML/CSS/JS.

Features
- 12-card grid (Rat → Pig) showing icons and both English/Chinese names
- Hover tooltip with a short trait
- Click a card to open a slide-in detail panel with element and description
- Client-side instant filtering by Element and Search (EN + 中文)
- English / 中文 toggle for UI and descriptions
- Light / Dark theme with smooth transition
- Responsive layout (4×3 desktop, vertical stack on mobile)
- LocalStorage persistence for language, theme, and filter selection
- Animated transitions (card hover, panel slide-in, icon glow)

Data
- Self-generated dataset inside `script.js` — no external JSON required

Quick Start (local)
1. Open `index.html` in your browser.
2. Interact with the UI: hover cards to see traits, click to view details, use filters or search.
3. Theme and language preferences are saved automatically.

Files included
- `index.html` — main HTML structure
- `style.css` — styles and transitions
- `script.js` — data, rendering logic, event handlers

Notes & Tips
- Search supports both English and Chinese terms (name, trait, description).
- The dataset is intentionally small and simple — replace or extend it inside `script.js` if you'd like.

License
- MIT
