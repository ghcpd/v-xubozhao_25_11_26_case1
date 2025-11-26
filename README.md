# 12-Zodiac Dashboard

This is a simple interactive frontend that displays the 12 Chinese zodiac animals with search, element filtering, language toggle (English / 中文), dark/light theme, and a detail slide-in panel.

Features
- 12-card grid (Rat → Pig) with emoji icons and English + 中文 names
- Hover tooltip with a key trait
- Click a card to open a slide-in detail panel with element, description and minor animation
- Element dropdown filter and search (EN + 中文)
- English/中文 language toggle that updates labels and tooltips
- Light/dark theme toggle with smooth transitions
- Responsive layout: 4×3 grid on desktop, vertical list on small screens
- Last used language, theme, and element filter saved in localStorage

How to run
1. Open `index.html` in your browser (double-click or right-click -> Open with)
2. Search and filter are client-side and instant
3. Toggle language and theme — preferences are saved automatically

How to use the app
- Hover any zodiac card to see a short tooltip (key trait)
- Click a card to open details. Close the panel using the close button or Esc
- Use the search bar to search by English or Chinese name or by traits and descriptions
- Use the element dropdown to filter by the five elements

Customization & Notes
- Data for the 12 zodiacs is generated in `script.js` inside the `ZODIAC_DATA` array — easy to expand
- No external assets or network requests.

Development
- Files: `index.html`, `style.css`, `script.js`.
- To make enhancements, open `script.js` and modify `ZODIAC_DATA` or UI rendering methods.

License
This project is provided as-is for demonstration and coding exercise purposes.
