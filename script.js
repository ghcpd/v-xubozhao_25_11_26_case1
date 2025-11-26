(() => {
  const PREF_KEY = 'zodiacDashboardPrefs';

  const UI_TEXT = {
    en: {
      title: '12 Zodiac Dashboard',
      subtitle: 'Explore the animals of the Chinese zodiac',
      searchLabel: 'Search',
      searchPlaceholder: 'Search zodiac...',
      elementLabel: 'Element',
      elementAll: 'All Elements',
      languageLabel: 'Language',
      themeLight: 'Light',
      themeDark: 'Dark',
      detailElement: 'Element',
      detailTrait: 'Key Trait',
      noResults: 'No matching zodiac found.',
      close: 'Close'
    },
    zh: {
      title: '十二生肖仪表盘',
      subtitle: '探索中华生肖的故事',
      searchLabel: '搜索',
      searchPlaceholder: '搜索生肖或关键词...',
      elementLabel: '五行',
      elementAll: '全部五行',
      languageLabel: '语言',
      themeLight: '明亮',
      themeDark: '暗黑',
      detailElement: '五行',
      detailTrait: '性格特质',
      noResults: '没有找到匹配的生肖。',
      close: '关闭'
    }
  };

  const ELEMENT_TRANSLATIONS = {
    en: { Metal: 'Metal', Wood: 'Wood', Water: 'Water', Fire: 'Fire', Earth: 'Earth' },
    zh: { Metal: '金', Wood: '木', Water: '水', Fire: '火', Earth: '土' }
  };

  const zodiacData = [
    {
      id: 'rat', order: 1, icon: '🐀',
      names: { en: 'Rat', zh: '鼠' }, element: 'Water',
      trait: { en: 'Quick-witted', zh: '机智' },
      description: {
        en: 'Clever, resourceful, and adaptable; thrives in changing environments.',
        zh: '聪明机灵，善于变通，在变化中寻找机会。'
      },
      keywords: ['smart', 'agile', 'adaptive', 'quick', '机灵', '聪明']
    },
    {
      id: 'ox', order: 2, icon: '🐂',
      names: { en: 'Ox', zh: '牛' }, element: 'Earth',
      trait: { en: 'Diligent', zh: '勤奋' },
      description: {
        en: 'Steady, reliable, and hardworking; a pillar of perseverance.',
        zh: '踏实稳重，勤勉可靠，是坚持与耐力的象征。'
      },
      keywords: ['steady', 'reliable', 'strong', 'loyal', '勤劳', '坚韧']
    },
    {
      id: 'tiger', order: 3, icon: '🐅',
      names: { en: 'Tiger', zh: '虎' }, element: 'Wood',
      trait: { en: 'Brave', zh: '勇敢' },
      description: {
        en: 'Courageous and charismatic; a natural leader who pursues bold visions.',
        zh: '勇猛果断，魅力十足，天生的领导者，追逐宏大愿景。'
      },
      keywords: ['bold', 'leader', 'confident', 'heroic', '勇猛', '魄力']
    },
    {
      id: 'rabbit', order: 4, icon: '🐇',
      names: { en: 'Rabbit', zh: '兔' }, element: 'Wood',
      trait: { en: 'Graceful', zh: '温润' },
      description: {
        en: 'Gentle, elegant, and empathetic; brings harmony to relationships.',
        zh: '温柔体贴，优雅敏感，善于营造和谐关系。'
      },
      keywords: ['gentle', 'graceful', 'kind', 'empathetic', '温柔', '雅致']
    },
    {
      id: 'dragon', order: 5, icon: '🐉',
      names: { en: 'Dragon', zh: '龙' }, element: 'Earth',
      trait: { en: 'Visionary', zh: '睿智' },
      description: {
        en: 'Magnetic, ambitious, and visionary; ignites inspiration and change.',
        zh: '魅力非凡，雄心勃勃，目光长远，激发灵感与变革。'
      },
      keywords: ['powerful', 'majestic', 'visionary', 'ambitious', '雄心', '魅力']
    },
    {
      id: 'snake', order: 6, icon: '🐍',
      names: { en: 'Snake', zh: '蛇' }, element: 'Fire',
      trait: { en: 'Wise', zh: '睿智' },
      description: {
        en: 'Intuitive and perceptive; observes deeply and acts with finesse.',
        zh: '直觉敏锐，洞察深刻，出手稳准细腻。'
      },
      keywords: ['intuitive', 'mystic', 'calm', 'strategic', '洞察', '直觉']
    },
    {
      id: 'horse', order: 7, icon: '🐎',
      names: { en: 'Horse', zh: '马' }, element: 'Fire',
      trait: { en: 'Free-spirited', zh: '热忱' },
      description: {
        en: 'Energetic and free-spirited; thrives on adventure and momentum.',
        zh: '热情奔放，精力充沛，热爱冒险与前进。'
      },
      keywords: ['energetic', 'spirited', 'adventurous', 'dynamic', '热情', '活力']
    },
    {
      id: 'goat', order: 8, icon: '🐐',
      names: { en: 'Goat', zh: '羊' }, element: 'Earth',
      trait: { en: 'Artistic', zh: '温雅' },
      description: {
        en: 'Creative and compassionate; finds beauty in the everyday.',
        zh: '富有创意，温柔善良，日常亦能发现美好。'
      },
      keywords: ['creative', 'gentle', 'kind', 'harmonious', '创意', '柔和']
    },
    {
      id: 'monkey', order: 9, icon: '🐒',
      names: { en: 'Monkey', zh: '猴' }, element: 'Metal',
      trait: { en: 'Playful', zh: '机敏' },
      description: {
        en: 'Inventive and witty; loves puzzles, play, and clever solutions.',
        zh: '聪慧机敏，喜欢解谜与玩乐，善于巧妙解决问题。'
      },
      keywords: ['clever', 'inventive', 'fun', 'curious', '机灵', '幽默']
    },
    {
      id: 'rooster', order: 10, icon: '🐓',
      names: { en: 'Rooster', zh: '鸡' }, element: 'Metal',
      trait: { en: 'Confident', zh: '自信' },
      description: {
        en: 'Vibrant and meticulous; speaks boldly and acts with precision.',
        zh: '活力自信，言辞大胆，行事一丝不苟。'
      },
      keywords: ['precise', 'vibrant', 'bold', 'organized', '自律', '光彩']
    },
    {
      id: 'dog', order: 11, icon: '🐕',
      names: { en: 'Dog', zh: '狗' }, element: 'Earth',
      trait: { en: 'Loyal', zh: '忠诚' },
      description: {
        en: 'Faithful and protective; a steadfast companion and guardian.',
        zh: '忠诚守护，信义为先，是值得信赖的伙伴。'
      },
      keywords: ['faithful', 'trustworthy', 'protective', 'honest', '可靠', '守护']
    },
    {
      id: 'pig', order: 12, icon: '🐖',
      names: { en: 'Pig', zh: '猪' }, element: 'Water',
      trait: { en: 'Generous', zh: '豁达' },
      description: {
        en: 'Warm-hearted and generous; appreciates comfort and good company.',
        zh: '宽厚豁达，热心好客，珍视美好陪伴。'
      },
      keywords: ['warm', 'kind', 'open', 'compassionate', '宽厚', '善良']
    }
  ];

  // State
  const state = {
    lang: 'en',
    theme: 'light',
    element: 'all',
    search: ''
  };

  // Elements
  const body = document.body;
  const gridEl = document.getElementById('zodiacGrid');
  const searchInput = document.getElementById('searchInput');
  const searchLabel = document.getElementById('searchLabel');
  const elementFilter = document.getElementById('elementFilter');
  const elementLabel = document.getElementById('elementLabel');
  const langButtons = Array.from(document.querySelectorAll('.lang-btn'));
  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = document.getElementById('themeLabel');
  const appTitle = document.getElementById('appTitle');
  const appSubtitle = document.getElementById('appSubtitle');

  // Detail elements
  const detailOverlay = document.getElementById('detailOverlay');
  const detailClose = document.getElementById('detailClose');
  const detailIcon = document.getElementById('detailIcon');
  const detailTitle = document.getElementById('detailTitle');
  const detailTitleAlt = document.getElementById('detailTitleAlt');
  const detailElementLabel = document.getElementById('detailElementLabel');
  const detailElementValue = document.getElementById('detailElementValue');
  const detailTraitLabel = document.getElementById('detailTraitLabel');
  const detailTraitValue = document.getElementById('detailTraitValue');
  const detailDescription = document.getElementById('detailDescription');

  function validateElements() {
    const essentials = {
      gridEl,
      searchInput,
      searchLabel,
      elementFilter,
      elementLabel,
      themeToggle,
      themeLabel,
      appTitle,
      appSubtitle,
      detailOverlay,
      detailClose,
      detailIcon,
      detailTitle,
      detailTitleAlt,
      detailElementLabel,
      detailElementValue,
      detailTraitLabel,
      detailTraitValue,
      detailDescription
    };
    const missing = Object.entries(essentials)
      .filter(([, el]) => !el)
      .map(([name]) => name);
    if (missing.length) {
      console.error('Zodiac dashboard: missing DOM elements', missing);
      return false;
    }
    return true;
  }

  function uniqueElements() {
    return [...new Set(zodiacData.map(z => z.element))];
  }

  function loadPrefs() {
    try {
      const saved = JSON.parse(localStorage.getItem(PREF_KEY) || '{}');
      if (saved.lang) state.lang = saved.lang;
      if (saved.theme) {
        state.theme = saved.theme;
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        state.theme = 'dark';
      }
      if (saved.element) state.element = saved.element;
      if (typeof saved.search === 'string') state.search = saved.search;
    } catch (e) {
      // ignore
    }
  }

  function savePrefs() {
    try {
      localStorage.setItem(PREF_KEY, JSON.stringify({
        lang: state.lang,
        theme: state.theme,
        element: state.element,
        search: state.search
      }));
    } catch (e) {
      // ignore
    }
  }

  function getElementLabel(element) {
    return ELEMENT_TRANSLATIONS[state.lang][element] || element;
  }

  function applyUIStrings() {
    const t = UI_TEXT[state.lang];
    appTitle.textContent = t.title;
    appSubtitle.textContent = t.subtitle;
    searchLabel.textContent = t.searchLabel;
    searchInput.placeholder = t.searchPlaceholder;
    elementLabel.textContent = t.elementLabel;
    themeLabel.textContent = state.theme === 'dark' ? t.themeDark : t.themeLight;
    detailElementLabel.textContent = `${t.detailElement}:`;
    detailTraitLabel.textContent = `${t.detailTrait}:`;
    detailClose.setAttribute('aria-label', t.close);
    // Update selection label for "all"
    const firstOption = elementFilter.querySelector('option[value="all"]');
    if (firstOption) firstOption.textContent = t.elementAll;
  }

  function renderElementOptions() {
    const t = UI_TEXT[state.lang];
    elementFilter.innerHTML = '';
    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = t.elementAll;
    elementFilter.appendChild(allOpt);

    uniqueElements().forEach(el => {
      const opt = document.createElement('option');
      opt.value = el;
      opt.textContent = getElementLabel(el);
      elementFilter.appendChild(opt);
    });

    elementFilter.value = state.element;
  }

  function matchesSearch(zodiac, query) {
    if (!query) return true;
    const q = query.trim().toLowerCase();
    const bag = [
      zodiac.names.en,
      zodiac.names.zh,
      zodiac.trait.en,
      zodiac.trait.zh,
      zodiac.description.en,
      zodiac.description.zh,
      ...(zodiac.keywords || [])
    ].join(' ').toLowerCase();
    return bag.includes(q);
  }

  function getFilteredZodiacs() {
    return zodiacData.filter(z => {
      const elementOK = state.element === 'all' || z.element === state.element;
      const searchOK = matchesSearch(z, state.search);
      return elementOK && searchOK;
    });
  }

  function renderGrid() {
    const items = getFilteredZodiacs();
    gridEl.innerHTML = '';

    if (!items.length) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.textContent = UI_TEXT[state.lang].noResults;
      gridEl.appendChild(empty);
      return;
    }

    items.sort((a, b) => a.order - b.order).forEach((z, idx) => {
      const card = document.createElement('article');
      card.className = 'zodiac-card';
      card.dataset.id = z.id;
      card.dataset.tooltip = z.trait[state.lang];
      card.style.animationDelay = `${idx * 40}ms`;
      card.innerHTML = `
        <div class="zodiac-icon">${z.icon}</div>
        <h3 class="zodiac-name">${z.names[state.lang]}</h3>
        <p class="zodiac-name-alt">${z.names[state.lang === 'en' ? 'zh' : 'en']}</p>
      `;
      card.addEventListener('click', () => openDetail(z));
      gridEl.appendChild(card);
    });
  }

  function openDetail(zodiac) {
    const t = UI_TEXT[state.lang];
    detailIcon.textContent = zodiac.icon;
    detailTitle.textContent = zodiac.names[state.lang];
    detailTitleAlt.textContent = zodiac.names[state.lang === 'en' ? 'zh' : 'en'];
    detailElementValue.textContent = getElementLabel(zodiac.element);
    detailTraitValue.textContent = zodiac.trait[state.lang];
    detailDescription.textContent = zodiac.description[state.lang];

    detailOverlay.classList.remove('hidden');
    requestAnimationFrame(() => detailOverlay.classList.add('show'));
    detailOverlay.setAttribute('aria-hidden', 'false');
    body.classList.add('no-scroll');
  }

  function closeDetail() {
    detailOverlay.classList.remove('show');
    const transitionMs = 300;
    setTimeout(() => {
      detailOverlay.classList.add('hidden');
      detailOverlay.setAttribute('aria-hidden', 'true');
      body.classList.remove('no-scroll');
    }, transitionMs);
  }

  function applyTheme() {
    body.setAttribute('data-theme', state.theme);
    themeToggle.checked = state.theme === 'dark';
    themeLabel.textContent = state.theme === 'dark'
      ? UI_TEXT[state.lang].themeDark
      : UI_TEXT[state.lang].themeLight;
  }

  function applyLanguage() {
    document.documentElement.lang = state.lang;
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === state.lang);
    });
    renderElementOptions();
    applyUIStrings();
    renderGrid();
  }

  function bindEvents() {
    searchInput.addEventListener('input', (e) => {
      state.search = e.target.value;
      savePrefs();
      renderGrid();
    });

    elementFilter.addEventListener('change', (e) => {
      state.element = e.target.value;
      savePrefs();
      renderGrid();
    });

    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const newLang = btn.dataset.lang;
        if (state.lang === newLang) return;
        state.lang = newLang;
        savePrefs();
        applyLanguage();
      });
    });

    themeToggle.addEventListener('change', (e) => {
      state.theme = e.target.checked ? 'dark' : 'light';
      savePrefs();
      applyTheme();
    });

    detailClose.addEventListener('click', closeDetail);
    detailOverlay.addEventListener('click', (e) => {
      if (e.target === detailOverlay) closeDetail();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !detailOverlay.classList.contains('hidden')) {
        closeDetail();
      }
    });
  }

  function init() {
    loadPrefs();
    if (!validateElements()) return;
    searchInput.value = state.search;
    elementFilter.value = state.element;
    applyTheme();
    applyLanguage();
    bindEvents();
  }

  // Kick off
  document.addEventListener('DOMContentLoaded', init);
})();
