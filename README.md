# 🐉 Chinese Zodiac Explorer

An interactive web dashboard for exploring the 12 Chinese Zodiac animals with beautiful animations, bilingual support, and theme customization.

## ✨ Features

### 🎴 Zodiac Cards Display
- **12-card grid layout** displaying all zodiac animals (Rat → Pig)
- Each card shows:
  - Large animated zodiac icon
  - English and Chinese names
  - Element badge (Metal/Wood/Water/Fire/Earth)
- **Hover tooltips** displaying key personality traits
- Smooth floating animations on zodiac icons

### 📱 Detail Panel
- Click any card to open a **slide-in detail panel**
- Displays comprehensive information:
  - Zodiac name in both languages
  - Element classification with gradient badge
  - Full personality description
- Smooth animations with scale and fade effects
- Close via button, overlay click, or ESC key

### 🔍 Filters & Search
- **Element dropdown filter**: Filter by Metal, Wood, Water, Fire, Earth, or All
- **Live search bar**: Search by:
  - Zodiac name (English or Chinese)
  - Keywords in trait descriptions
- **Instant client-side filtering** with no page reload
- Empty state message when no results found

### 🌐 Language Toggle
- **Bilingual support**: English ↔ 中文
- Toggle button switches all text dynamically:
  - Card names and tooltips
  - Detail panel content
  - UI labels and placeholders
  - Filter options
- Smooth transitions between languages

### 🌙 Theme Mode
- **Light/Dark mode toggle** with smooth transitions
- Persistent theme across all UI elements:
  - Background colors
  - Text colors
  - Card shadows
  - Border styles
- Theme-appropriate icons (🌙 / ☀️)

### 💾 LocalStorage Persistence
- Automatically saves user preferences:
  - Selected language
  - Active theme (light/dark)
  - Current element filter
  - Search query
- Preferences restored on page reload

### 📐 Responsive Design
- **Desktop (≥1200px)**: 4×3 grid layout
- **Tablet (768-1199px)**: Adaptive grid
- **Mobile (<768px)**: Single-column vertical scroll
- Full-width detail panel on mobile
- Touch-friendly controls

### 🎨 Animations & Effects
- Card hover effects with lift and shadow
- Floating animations on zodiac icons
- Smooth slide-in detail panel
- Fade-in overlay backdrop
- Scale animation on detail icon
- Gradient backgrounds on elements
- Smooth theme transitions

## 📂 Project Structure

```
Chinese-Zodiac-Explorer/
├── index.html      # Main HTML structure
├── style.css       # All styling and animations
├── script.js       # Application logic and data
└── README.md       # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No dependencies or build tools required

### Installation

1. **Download or clone the files:**
   ```bash
   git clone <repository-url>
   cd chinese-zodiac-explorer
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

3. **Access the application:**
   - Direct: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

## 🎮 How to Use

### Browsing Zodiacs
1. **View all 12 zodiac cards** in the main grid
2. **Hover over any card** to see a quick trait tooltip
3. **Click a card** to open detailed information

### Filtering & Searching
1. **Use the element dropdown** to filter by element type
2. **Type in the search bar** to find specific zodiacs
3. **Search works in both languages** (English and Chinese)

### Customization
1. **Click the moon/sun icon** to toggle between light/dark themes
2. **Click the language button** (EN/中文) to switch languages
3. **Your preferences are automatically saved**

### Detail Panel
1. **Click any zodiac card** to open the detail panel
2. **Read full personality descriptions**
3. **Close by**:
   - Clicking the X button
   - Clicking the dark overlay
   - Pressing the ESC key

## 💡 Technical Highlights

### Self-Generated Dataset
- All zodiac data is embedded in `script.js`
- No external JSON files or API calls needed
- Complete information for all 12 zodiacs:
  - English and Chinese names
  - Elements (五行)
  - Personality traits and descriptions
  - Emoji icons

### Modern Web Technologies
- **Vanilla JavaScript** (ES6+)
- **CSS Grid & Flexbox** for layouts
- **CSS Custom Properties** for theming
- **LocalStorage API** for persistence
- **No frameworks or libraries** required

### Performance Optimized
- Client-side filtering (instant results)
- CSS animations (GPU-accelerated)
- Efficient DOM manipulation
- Minimal reflows and repaints

## 🎨 Customization

### Changing Colors
Edit CSS custom properties in `style.css`:
```css
:root {
    --accent-primary: #e74c3c;  /* Primary color */
    --accent-secondary: #c0392b; /* Secondary color */
    /* Modify other variables as needed */
}
```

### Adding More Zodiacs
Add new entries to the `zodiacData` array in `script.js`:
```javascript
{
    id: 13,
    name: 'NewZodiac',
    nameZh: '新生肖',
    icon: '🔮',
    element: 'Metal',
    // ... other properties
}
```

### Modifying Layout
Adjust grid settings in `style.css`:
```css
.zodiac-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
}
```

## 🌟 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Chinese Zodiac cultural information
- Modern web design principles
- Accessibility best practices

## 📧 Contact

For questions or suggestions, please open an issue in the repository.

---

**Enjoy exploring the Chinese Zodiac! 🐉✨**
