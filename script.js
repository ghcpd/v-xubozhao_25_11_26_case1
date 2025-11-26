// script.js - 12 Zodiac Dashboard

(() => {
  // Simple dataset for 12 zodiac animals (self-generated)
  const zodiacs = [
    { id: 'rat', en: 'Rat', cn: '鼠', element: 'Water', trait: 'Quick-witted', desc_en: 'Smart, adaptable, and charming. Able to find opportunities quickly.', desc_cn: '机敏、适应力强、富有魅力，善于发现机会。', icon: '🐀' },
    { id: 'ox', en: 'Ox', cn: '牛', element: 'Earth', trait: 'Dependable', desc_en: 'Strong, reliable, and hardworking — steady and trustworthy.', desc_cn: '坚韧、可靠、勤劳，稳重和值得信赖。', icon: '🐂' },
    { id: 'tiger', en: 'Tiger', cn: '虎', element: 'Wood', trait: 'Bold', desc_en: 'Courageous, enthusiastic, and charismatic. A natural leader.', desc_cn: '勇敢、热情、有魅力，天生的领导者。', icon: '🐯' },
    { id: 'rabbit', en: 'Rabbit', cn: '兔', element: 'Wood', trait: 'Gentle', desc_en: 'Calm, elegant, and kind-hearted — values peace and beauty.', desc_cn: '温和、优雅、善良，重视和谐与美感。', icon: '🐇' },
    { id: 'dragon', en: 'Dragon', cn: '龙', element: 'Fire', trait: 'Ambitious', desc_en: 'Confident and ambitious; energetic with a strong presence.', desc_cn: '自信、有雄心；充满活力，气场强大。', icon: '🐉' },
    { id: 'snake', en: 'Snake', cn: '蛇', element: 'Fire', trait: 'Wise', desc_en: 'Deep thinker, wise and graceful — mysterious and insightful.', desc_cn: '深思熟虑、睿智优雅，神秘而富有洞察力。', icon: '🐍' },
    { id: 'horse', en: 'Horse', cn: '马', element: 'Fire', trait: 'Energetic', desc_en: 'Active, free-spirited, and loves adventure.', desc_cn: '活跃、自由奔放，喜欢冒险。', icon: '🐎' },
    { id: 'goat', en: 'Goat', cn: '羊', element: 'Earth', trait: 'Creative', desc_en: 'Gentle, creative, and compassionate with artistic sensibilities.', desc_cn: '温顺、有创造力、富有同情心，有艺术气质。', icon: '🐐' },
    { id: 'monkey', en: 'Monkey', cn: '猴', element: 'Metal', trait: 'Curious', desc_en: 'Witty, playful and highly intelligent—always exploring.', desc_cn: '机智、淘气而聪明，总是喜欢探索。', icon: '🐒' },
    { id: 'rooster', en: 'Rooster', cn: '鸡', element: 'Metal', trait: 'Observant', desc_en: 'Practical, confident, and hardworking with clear focus.', desc_cn: '务实、自信、勤奋，专注明确。', icon: '🐓' },
    { id: 'dog', en: 'Dog', cn: '狗', element: 'Earth', trait: 'Loyal', desc_en: 'Honest, loyal, and kind — a true friend and protector.', desc_cn: '诚实、忠诚、善良，是值得信赖的朋友和守护者。', icon: '🐕' },
    { id: 'pig', en: 'Pig', cn: '猪', element: 'Metal', trait: 'Generous', desc_en: 'Sincere, generous, and easygoing — values comfort and harmony.', desc_cn: '真诚、慷慨、随和，重视舒适与和谐。', icon: '🐖' }
  ];

  // UI elements
  const cardsGrid = document.getElementById('cardsGrid');
  const elementFilter = document.getElementById('elementFilter');
  const searchInput = document.getElementById('searchInput');
  const langToggle = document.getElementById('langToggle');
  const themeToggle = document.getElementById('themeToggle');
  const detailPanel = document.getElementById('detailPanel');
  const overlay = document.getElementById('overlay');
  const closePanel = document.getElementById('closePanel');

  // detail elements
  const detailIcon = document.getElementById('detailIcon');
  const detailName = document.getElementById('detailName');
  const detailElement = document.getElementById('detailElement');
  const detailDesc = document.getElementById('detailDesc');

  // App state
  let state = {
    lang: 'en', // 'en' or 'cn'
    theme: 'light', // 'light' or 'dark'
    element: 'all',
    query: ''
  };

  // Local Storage
  const LS_KEY = 'zodiac_dashboard_settings_v1';

  function savePrefs(){
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  }
  function loadPrefs(){
    try{const raw = localStorage.getItem(LS_KEY); if(raw){Object.assign(state, JSON.parse(raw));}}
    catch(e){console.warn('localStorage load error',e)}
  }

  // Init
  function init(){
    loadPrefs();
    applyTheme();
    applyLang();
    buildElementOptions();
    renderCards();
    attachEvents();
  }

  function buildElementOptions(){
    const elements = ['All', ...new Set(zodiacs.map(z=>z.element))];
    elementFilter.innerHTML = '';
    const elCN = {Metal:'金',Wood:'木',Water:'水',Fire:'火',Earth:'土'};
    elements.forEach(el => {
      const option = document.createElement('option');
      option.value = el === 'All' ? 'all' : el; // keep original capitalization for elements
      option.textContent = el === 'All' ? 'All Elements / 所有元素' : `${el} / ${elCN[el] || ''}`;
      elementFilter.appendChild(option);
    });
    // set saved value if present (case-insensitive match)
    const saved = (state.element || 'all').toLowerCase();
    const match = Array.from(elementFilter.options).find(o => (o.value||'').toLowerCase() === saved);
    elementFilter.value = match ? match.value : 'all';
  }

  // Render cards based on filters and search
  function renderCards(){
    const q = (state.query||'').trim().toLowerCase();
    const el = state.element;

    const filtered = zodiacs.filter(z => {
      const matchesElement = (el === 'all') || (z.element === el);
      const text = `${z.en} ${z.cn} ${z.trait} ${z.desc_en} ${z.desc_cn}`.toLowerCase();
      const matchesQuery = !q || text.includes(q);
      return matchesElement && matchesQuery;
    });

    // Clear grid
    cardsGrid.innerHTML = '';

    filtered.forEach(z => {
      const card = document.createElement('article');
      card.className = 'card';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.dataset.id = z.id;

      const iconWrap = document.createElement('div');
      iconWrap.className = 'icon-bg';
      iconWrap.innerHTML = `<div class="icon">${z.icon}</div>`;

      const enName = document.createElement('div');
      enName.className = 'name';
      enName.textContent = z.en;

      const cnName = document.createElement('div');
      cnName.className = 'cn';
      cnName.textContent = z.cn;

      // Tooltip element
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      // show trait text based on language
      const traitLabel = (state.lang === 'en') ? z.trait : zhTrait(z.trait);
      tooltip.textContent = traitLabel;

      // accessibility title (fallback) and label
      card.title = `${z.en} • ${z.cn} — ${traitLabel}`;

      // Append children
      card.appendChild(iconWrap);
      card.appendChild(enName);
      card.appendChild(cnName);
      card.appendChild(tooltip);

      // Event listeners
      card.addEventListener('click', ()=>openPanel(z));
      card.addEventListener('keydown', (e)=>{if(e.key==='Enter' || e.key===' '){e.preventDefault(); openPanel(z);}});

      cardsGrid.appendChild(card);
    });

  }

  function zhTrait(trait){
    // Basic mapping for traits to Chinese for the demo
    const map = {
      'Quick-witted':'机智',
      'Dependable':'可靠',
      'Bold':'大胆',
      'Gentle':'温和',
      'Ambitious':'有野心',
      'Wise':'睿智',
      'Energetic':'充满活力',
      'Creative':'有创造力',
      'Curious':'好奇',
      'Observant':'善于观察',
      'Loyal':'忠诚',
      'Generous':'慷慨'
    };
    return map[trait] || trait;
  }

  function openPanel(z){
    // Fill detail panel depending on language
    detailIcon.textContent = z.icon;
    detailName.innerHTML = `${z.en} • ${z.cn}`;
    detailElement.textContent = `${(state.lang==='en')?('Element: '+z.element):('元素：'+toCNElement(z.element))}`;

    detailDesc.textContent = state.lang === 'en' ? z.desc_en : z.desc_cn;
    detailPanel.classList.add('open');
    detailPanel.setAttribute('aria-hidden','false');
    overlay.classList.remove('hidden');

    document.body.style.overflow = 'hidden';
    savePrefs();
  }

  function toCNElement(el){
    const m = {Metal:'金',Wood:'木',Water:'水',Fire:'火',Earth:'土'}; return m[el] || el;
  }

  function closePanelFn(){
    detailPanel.classList.remove('open');
    detailPanel.setAttribute('aria-hidden','true');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function applyLang(){
    // Update language-specific labels and UI text
    // Toggle button label
    langToggle.textContent = state.lang === 'en' ? 'EN / 中文' : 'EN / 中文';
    // Search placeholder
    searchInput.placeholder = state.lang === 'en' ? 'Search name or keyword...' : '搜索名字或关键词...';

    // Element filter labels change: rebuild options with localized All text if needed
    buildElementOptions();
    // Re-render with updated tooltip/desc
    renderCards();
  }

  function applyTheme(){
    if(state.theme === 'dark'){
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      themeToggle.setAttribute('aria-pressed','true');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      themeToggle.setAttribute('aria-pressed','false');
    }
  }

  // Attach events
  function attachEvents(){
    // Filter
    elementFilter.addEventListener('change', (e) => {
      state.element = e.target.value === 'all' ? 'all' : e.target.value;
      savePrefs();
      renderCards();
    });

    // Search
    searchInput.addEventListener('input', (e) => {
      state.query = e.target.value;
      renderCards();
    });

    // Language toggle
    langToggle.addEventListener('click', () => {
      state.lang = state.lang === 'en' ? 'cn' : 'en';
      applyLang(); savePrefs();
    });

    // Theme toggle
    themeToggle.addEventListener('click', () => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      applyTheme(); savePrefs();
    });

    // Close detail
    closePanel.addEventListener('click', closePanelFn);
    overlay.addEventListener('click', closePanelFn);
    window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closePanelFn(); });

    // Make grid keyboard navigable: focus ring on cards
    cardsGrid.addEventListener('keydown', (e)=>{
      const focused = document.activeElement;
      if(!focused || !focused.classList.contains('card')) return;
      if(e.key === 'ArrowRight'){
        moveFocus(1);
      } else if(e.key === 'ArrowLeft'){
        moveFocus(-1);
      } else if(e.key === 'ArrowDown'){
        moveFocus(3);
      } else if(e.key === 'ArrowUp'){
        moveFocus(-3);
      }
    });

  }

  function moveFocus(offset){
    const cards = Array.from(cardsGrid.querySelectorAll('.card'));
    const idx = cards.indexOf(document.activeElement);
    if(idx === -1) return;
    const next = cards[Math.max(0,Math.min(cards.length-1, idx + offset))];
    if(next) next.focus();
  }

  // Start
  init();

})();

