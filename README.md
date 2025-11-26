# 12-Zodiac Dashboard — Interactive Demo

This is a small, self-contained front-end demo that displays the 12 Chinese Zodiac animals in a responsive, interactive dashboard.

Features
- 12-card grid (Rat → Pig) with emoji placeholders
- Hover tooltips showing a single trait
- Click a card to open a slide-in detail panel with extra info and background animation
- Element filter (Metal/Wood/Water/Fire/Earth)
- Search (English + 中文 + keywords) — client-side and instant
- Language toggle (English / 中文)
- Light/Dark theme toggle with smooth transitions
- Responsive layout: 4×3 on desktop, stacked on mobile
- Saves last used language, theme, search and element filter to localStorage

Files
- index.html — main page
- style.css — layouts, themes, animations
- script.js — dataset and app logic (fully auto-generated data; no external files needed)

How to run
1. Open `index.html` in your browser (double-click or use "Open File")
2. Or serve it locally with a simple HTTP server (optional):

  - Python 3:

    ```pwsh
    python -m http.server 8000
    # then open http://localhost:8000 in your browser
    ```

Notes
- All data is generated in `script.js`, so there is no external dataset or server required.
- Icons are emoji placeholders; swap them with images or SVGs if needed for production.

Enjoy the demo! 🎉
