// Self-generated Zodiac data
const ZODIAC_DATA = (() => {
  const items = [
    ['Rat','鼠','Water','Quick-witted','Smart, resourceful, adaptable, and perceptive.','🐀','机智','聪明、机敏、适应力强、洞察力高。'],
    ['Ox','牛','Earth','Reliable','Strong, thorough, reliable, and determined.','🐂','可靠','坚实、有责任心、踏实且意志坚定。'],
    ['Tiger','虎','Wood','Brave','Courageous, enthusiastic, confident, and charismatic.','🐯','勇敢','勇敢、热情、自信、有魅力。'],
    ['Rabbit','兔','Wood','Gentle','Quiet, elegant, kind, and responsible.','🐰','温和','温柔、优雅、善良、有责任感。'],
    ['Dragon','龙','Earth','Confident','Confident, intelligent, enthusiastic, and bold.','🐲','自信','自信、聪明、热情、大胆。'],
    ['Snake','蛇','Fire','Wise','Enigmatic, intelligent, wise, and intuitive.','🐍','恬静','神秘、聪明、睿智、直觉强。'],
    ['Horse','马','Fire','Energetic','Animated, active, and energetic.','🐎','活力','生机勃勃、积极、充满活力。'],
    ['Goat','羊','Earth','Peaceful','Calm, gentle, sympathetic, and amicable.','🐑','平和','平静、温和、有同情心、友善。'],
    ['Monkey','猴','Metal','Witty','Sharp, smart, curious, and inventive.','🐵','机灵','机智、聪明、好奇、善于创造。'],
    ['Rooster','鸡','Metal','Honest','Observant, hardworking, and courageous.','🐓','直率','机警、勤劳、有勇气。'],
    ['Dog','狗','Earth','Loyal','Loyal, honest, and prudent.','🐕','忠诚','忠诚、诚实、审慎。'],
    ['Pig','猪','Water','Compassionate','Gentle, compassionate, diligent, and tolerant.','🐖','仁爱','温和、仁慈、勤恳、宽容。']
  ];
    return items.map((it, i) => ({
    id: i+1,
    en: it[0],
    zh: it[1],
    element: it[2],
    trait: it[3],
    desc: it[4],
    traitZh: it[6],
    descZh: it[7],
    emoji: it[5],
  }));
})();

// Element labels for multi-language
const ELEMENTS = [
  { key: 'all', en: 'All', zh: '全部' },
  { key: 'Wood', en: 'Wood', zh: '木' },
  { key: 'Fire', en: 'Fire', zh: '火' },
  { key: 'Earth', en: 'Earth', zh: '土' },
  { key: 'Metal', en: 'Metal', zh: '金' },
  { key: 'Water', en: 'Water', zh: '水' },
];

// DOM elements
const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');
const elementFilter = document.getElementById('elementFilter');
const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const detailPanel = document.getElementById('detailPanel');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeDetail');
const detailName = document.getElementById('detailName');
const detailNameZh = document.getElementById('detailNameZh');
const detailElement = document.getElementById('detailElement');
const detailDesc = document.getElementById('detailDesc');
const detailEmoji = document.getElementById('detailEmoji');

let state = {
  lang: localStorage.getItem('zodiacLang') || 'en',
  theme: localStorage.getItem('zodiacTheme') || 'light',
  element: localStorage.getItem('zodiacFilter') || 'all',
  query: localStorage.getItem('zodiacQuery') || ''
};

// Setup initial UI state
(function init() {
  // apply theme and lang
  document.body.classList.toggle('dark', state.theme === 'dark');
  themeToggle.checked = state.theme === 'dark';
  langToggle.checked = state.lang === 'zh';
  elementFilter.value = state.element;
  searchInput.value = state.query;

  // add event listeners
  searchInput.addEventListener('input', e => { state.query = e.target.value; renderCards(); });
  elementFilter.addEventListener('change', e => { state.element = e.target.value; localStorage.setItem('zodiacFilter', state.element); renderCards(); });
  langToggle.addEventListener('change', e => { state.lang = e.target.checked ? 'zh' : 'en'; localStorage.setItem('zodiacLang', state.lang); applyLang(); renderCards(); });
  themeToggle.addEventListener('change', e => { state.theme = e.target.checked ? 'dark' : 'light'; localStorage.setItem('zodiacTheme', state.theme); applyTheme(); });

  overlay.addEventListener('click', closePanel);
  closeBtn.addEventListener('click', closePanel);

  applyLang();
  applyTheme();
  renderCards();
  renderElementOptions();
})();

function applyLang() {
  // header title, labels
  const title = document.getElementById('title');
  const searchLabel = document.querySelector('label[for="search"]');
  const elemLabel = document.querySelector('label[for="elementFilter"]');
  title.textContent = state.lang === 'zh' ? '十二生肖面板' : '12-Zodiac Dashboard';
  searchLabel.textContent = state.lang === 'zh' ? '搜索' : 'Search';
  elemLabel.textContent = state.lang === 'zh' ? '五行筛选' : 'Element';
  // placeholder
  searchInput.placeholder = state.lang === 'zh' ? '按名称或特征搜索' : 'Search by name or trait';
  // toggle labels
  // update toggle label text (first is language, second is theme)
  const toggleLabels = document.querySelectorAll('.toggle .toggle-label');
  toggleLabels[0].textContent = state.lang === 'zh' ? '中文' : 'EN';
  toggleLabels[1].textContent = state.lang === 'zh' ? '深色' : 'Dark';
  // element dropdown content
  renderElementOptions();
  renderCards();
}

function renderElementOptions() {
  const current = state.element || 'all';
  elementFilter.innerHTML = '';
  ELEMENTS.forEach(el => {
    const opt = document.createElement('option');
    opt.value = el.key;
    opt.textContent = state.lang === 'zh' ? el.zh : el.en;
    if (el.key === current) opt.selected = true;
    elementFilter.appendChild(opt);
  });
}

function applyTheme() {
  document.body.classList.toggle('dark', state.theme === 'dark');
}

function renderCards() {
  grid.innerHTML = '';
  // search and filter
  const q = (state.query || '').toLowerCase().trim();
  const elFilter = state.element;
  const filtered = ZODIAC_DATA.filter(z => {
    const matchFilter = elFilter === 'all' || z.element === elFilter;
    const text = (z.en + ' ' + z.zh + ' ' + z.trait + ' ' + z.desc).toLowerCase();
    const matchesQuery = !q || text.includes(q);
    return matchFilter && matchesQuery;
  });

  // build grid
  filtered.forEach(z => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-element', z.element);
    card.setAttribute('tabindex', 0);
    const emoji = document.createElement('div');
    emoji.className = 'emoji'; emoji.textContent = z.emoji;
    const names = document.createElement('div'); names.className = 'names';
    const en = document.createElement('div'); en.className = 'en'; en.textContent = z.en;
    const zh = document.createElement('div'); zh.className = 'zh'; zh.textContent = z.zh;
    names.appendChild(en); names.appendChild(zh);
    const tooltip = document.createElement('div'); tooltip.className = 'tooltip';
    tooltip.textContent = state.lang === 'zh' ? `${z.zh}：${z.traitZh || z.trait}` : z.trait;

    card.appendChild(emoji); card.appendChild(names); card.appendChild(tooltip);

    // click opens detail
    card.addEventListener('click', () => openDetail(z));
    card.addEventListener('keypress', (e) => { if (e.key === 'Enter') openDetail(z); });
    // tooltip position adjustment
    card.addEventListener('mouseenter', () => {
      window.requestAnimationFrame(() => {
        const tooltipEl = card.querySelector('.tooltip');
        if (!tooltipEl) return;
        const cardRect = card.getBoundingClientRect();
        const tooltipWidth = tooltipEl.offsetWidth || 160;
        // if tooltip would overflow on the right, adjust to the right side
        if (cardRect.left + 12 + tooltipWidth > window.innerWidth) {
          tooltipEl.classList.add('right-adjust');
        } else {
          tooltipEl.classList.remove('right-adjust');
        }
      });
    });
    grid.appendChild(card);
  });
}

function openDetail(z) {
  detailName.textContent = z.en;
  detailNameZh.textContent = z.zh;
  const elemLabel = ELEMENTS.find(e => e.key === z.element) || {en: z.element, zh: z.element};
  detailElement.textContent = (state.lang === 'zh' ? '五行：' : 'Element: ') + (state.lang === 'zh' ? elemLabel.zh : elemLabel.en);
  detailDesc.textContent = state.lang === 'zh' ? `${z.descZh || z.desc}（${z.traitZh || z.trait}）` : `${z.desc} (${z.trait})`;
  detailEmoji.textContent = z.emoji;
  detailPanel.classList.add('open');
  overlay.classList.remove('hidden');
  detailPanel.setAttribute('aria-hidden', 'false');
}

function closePanel() {
  detailPanel.classList.remove('open');
  overlay.classList.add('hidden');
  detailPanel.setAttribute('aria-hidden', 'true');
}

// Save some user inputs in localStorage (simple debounce for search)
let searchDebounce;
searchInput.addEventListener('input', () => {
  window.clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => localStorage.setItem('zodiacQuery', searchInput.value), 450);
});

// keyboard ESC to close panel
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePanel(); });

// on resize, make sure any visible tooltip is still within the viewport
window.addEventListener('resize', () => {
  document.querySelectorAll('.card').forEach(card => {
    if (card.matches(':hover')) {
      const tooltipEl = card.querySelector('.tooltip');
      if (!tooltipEl) return;
      const cardRect = card.getBoundingClientRect();
      const tooltipWidth = tooltipEl.offsetWidth || 160;
      if (cardRect.left + 12 + tooltipWidth > window.innerWidth) tooltipEl.classList.add('right-adjust');
      else tooltipEl.classList.remove('right-adjust');
    }
  });
});
