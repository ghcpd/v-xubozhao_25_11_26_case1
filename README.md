# 🐭 12 Zodiac Interactive Dashboard

An interactive web dashboard to explore Chinese zodiac signs with a beautiful UI, multilingual support, and dark mode.

## 🌟 Features

### ✨ Core Features
- **12 Zodiac Cards Grid**: Display all Chinese zodiac animals (Rat → Pig) in a responsive grid
- **Card Hover Tooltips**: Show key traits on hover
- **Detail Panel**: Click any card to view full details including:
  - Zodiac name (English + Chinese)
  - Element (Metal, Wood, Water, Fire, Earth)
  - Years associated with the zodiac
  - Key personality traits
  - Detailed description
  - Smooth slide-in animation

### 🔍 Search & Filter
- **Element Filter Dropdown**: Instantly filter zodiac signs by element
- **Search Bar**: Search by name or keyword in both English and Chinese
- **Real-time Results**: No page reload needed - filters update instantly

### 🌐 Multilingual Support
- **English/Chinese Toggle**: Switch between EN and 中文
- **Dynamic Text Updates**: All text updates instantly on language change
- **Bilingual Data**: Each zodiac includes both English and Chinese descriptions

### 🎨 Theme Management
- **Light/Dark Mode**: Toggle between light and dark themes
- **Smooth Transitions**: Theme changes animate smoothly
- **Persistent Storage**: Theme preference saved to localStorage

### 💾 Local Storage
Automatically saves to browser storage:
- Language preference
- Theme preference
- Filter selection
- Search query
- Resumes from last state on page reload

### 📱 Responsive Design
- **Desktop**: 4-column grid (responsive)
- **Tablet**: 2-3 column grid
- **Mobile**: Single column vertical scroll
- **Smooth Breakpoints**: Automatic layout adjustment at 1200px, 768px, 480px

### ✨ Animations & Effects
- Card hover lift effect
- Panel slide-in animation
- Overlay fade effect
- Smooth all transitions (0.3s ease)
- Tooltip fade-in on hover

## 🚀 Quick Start

1. **Open in Browser**: Simply open `index.html` in any modern web browser
   ```bash
   # Windows
   start index.html
   
   # macOS
   open index.html
   
   # Linux
   xdg-open index.html
   ```

2. **Or use a local server** (recommended for best results):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server package)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Access**: Open browser to `http://localhost:8000`

## 📁 Project Structure

```
├── index.html       # Main HTML structure
├── style.css        # Styling with light/dark mode themes
├── script.js        # Core functionality & logic
└── README.md        # This file
```

## 🎯 How to Use

### View Zodiac Cards
1. Page loads with all 12 zodiac cards in a grid
2. Hover over a card to see the key trait tooltip
3. Click any card to open the detail panel

### Search & Filter
- **Search**: Type in the search box to find zodiacs by name or trait
- **Filter by Element**: Select from dropdown (Metal, Wood, Water, Fire, Earth)
- Both work together - combine for precise results

### Switch Language
1. Click the "EN / 中文" button in the header
2. All text updates instantly
3. Detail panel descriptions update if open

### Toggle Theme
1. Click the "☀️ / 🌙" button in the header
2. Theme smoothly transitions
3. Works with all pages and panels

### Detail Panel
1. Click any card to open the right-side panel
2. View complete information about the zodiac
3. Click the X button or overlay to close

## 🧬 Data Structure

Each zodiac object contains:
```javascript
{
    id: 1,
    nameEn: "Rat",
    nameZh: "鼠",
    icon: "🐭",
    element: "Water",
    years: "2024, 2012, 2000, 1988, 1976",
    trait: "Intelligent",
    description: "English description...",
    descriptionZh: "Chinese description..."
}
```

## 💾 localStorage Keys

- `language`: 'en' or 'zh'
- `theme`: 'light' or 'dark'
- `filter`: Element filter value
- `search`: Search query text

## 🎨 Color Scheme

### Light Mode
- Primary: Indigo (#6366f1)
- Secondary: Pink (#ec4899)
- Background: Slate-50 (#f8fafc)
- Text: Slate-900 (#1e293b)

### Dark Mode
- Primary: Indigo (maintained)
- Secondary: Rose (#be123c)
- Background: Slate-950 (#0f172a)
- Text: Slate-100 (#f1f5f9)

## ✅ Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations, CSS Variables
- **Vanilla JavaScript**: No dependencies, pure ES6+
- **localStorage API**: For persistence

## 📊 Zodiac Information

The dashboard includes complete information for all 12 zodiac signs:
- Rat, Ox, Tiger, Rabbit, Dragon, Snake
- Horse, Goat, Monkey, Rooster, Dog, Pig

Each with:
- Element associations
- Historical years
- Personality traits
- Detailed descriptions (EN + ZH)

## 🎯 Features Implementation Checklist

- ✅ 12-card grid display
- ✅ Card hover tooltips
- ✅ Detail panel with slide-in animation
- ✅ Element dropdown filter
- ✅ Search functionality (EN + ZH)
- ✅ Language toggle (EN/中文)
- ✅ Theme toggle (Light/Dark)
- ✅ localStorage persistence
- ✅ Responsive design (Desktop/Tablet/Mobile)
- ✅ Smooth animations & transitions
- ✅ Self-generated data (no external JSON)
- ✅ Fully runnable locally

## 🚀 Future Enhancements

Potential improvements:
- Add zodiac compatibility checker
- Implement fortune predictions
- Add share/export functionality
- Zodiac statistics visualization
- User preferences for card layout
- Sound effects toggle
- Print zodiac details
- Social media sharing

## 📝 Notes

- All data is self-generated and included in the JavaScript
- No external APIs or databases required
- Works completely offline
- Preferences persist across sessions
- All animations are GPU-accelerated for smooth performance

## 📄 License

Free to use and modify for personal and commercial projects.

---

**Enjoy exploring the 12 zodiacs! 🐭✨**
