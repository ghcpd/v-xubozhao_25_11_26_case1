You are a front-end developer working for a cultural-tech startup.  
The company wants to build an **interactive 12-Zodiac web dashboard** — users can explore zodiac animals visually, click to view details, filter by element, and switch between languages.

You will receive the dataset: auto-generated from zero (no external file needed).

---

## Requirements

### 1. Zodiac Cards Display
- Create a **12-card grid** (Rat → Pig).  
- Each card shows:
  - Zodiac icon or placeholder image  
  - Zodiac name (English + 中文)  
- Hovering on a card displays a **short tooltip** with one key trait.  

### 2. Zodiac Detail Panel
- Clicking a card opens a **slide-in panel or modal** showing:
  - Zodiac name (English + 中文)  
  - Element (Metal/Wood/Water/Fire/Earth)  
  - Short personality description  
  - Optional small background animation (e.g., glow or fade)  

### 3. Filters & Search
- Add:
  - Element dropdown filter  
  - Search bar (by name or keyword, EN + 中文)  
- Filtering should be **instant and client-side** (no page reload).  

### 4. Language Toggle
- Add an **English / 中文 toggle**; all text should update dynamically.

### 5. Theme Mode
- Add a **light/dark mode switch** with smooth transition animation.

### 6. Bonus (Optional)
- Animated transitions when switching zodiac cards or opening detail panels  
- Responsive layout:
  - Desktop: 4×3 grid  
  - Mobile: vertical scroll  
- Save last used language, theme, and filter selections in localStorage  

---

## 💾 Deliverables
- `index.html`, `style.css`, `script.js` (or framework of choice)  
- Data must be **self-generated**, no external JSON required  
- Fully runnable locally in a browser
- Readme
