// Auto-generated dataset for the 12 Chinese Zodiac animals
const ZODIACS = [
  {id:'rat', en:'Rat', zh:'鼠', element:'Water', emoji:'🐀', trait:'Quick-witted', traitZh:'机智', desc:{en:'A clever and resourceful personality who adapts quickly and seizes opportunities.', zh:'机智灵活，反应快，善于抓住机会。'}, keywords:['clever','resourceful','quick','机智']},
  {id:'ox', en:'Ox', zh:'牛', element:'Earth', emoji:'🐂', trait:'Dependable', traitZh:'可靠', desc:{en:'Steady, hard-working and reliable — the calm foundation people can trust.', zh:'沉稳踏实，勤勉可靠，是一个值得信赖的基石。'}, keywords:['steady','hardworking','dependable','踏实']},
  {id:'tiger', en:'Tiger', zh:'虎', element:'Wood', emoji:'🐯', trait:'Brave', traitZh:'勇敢', desc:{en:'Bold and adventurous, a natural leader who acts with courage and passion.', zh:'勇敢冒险，天生的领导者，充满激情与魄力。'}, keywords:['brave','leader','bold','勇敢']},
  {id:'rabbit', en:'Rabbit', zh:'兔', element:'Wood', emoji:'🐇', trait:'Gentle', traitZh:'温和', desc:{en:'Kind, courteous and creative — prefers harmony and thoughtful decisions.', zh:'善良有礼，富有创造力，喜欢和谐与深思熟虑的决策。'}, keywords:['gentle','creative','kind','温和']},
  {id:'dragon', en:'Dragon', zh:'龙', element:'Earth', emoji:'🐉', trait:'Ambitious', traitZh:'雄心', desc:{en:'Charismatic and confident; large dreams and strong presence.', zh:'有魅力、自信，抱负大，气场强。'}, keywords:['ambitious','charismatic','confident','雄心']},
  {id:'snake', en:'Snake', zh:'蛇', element:'Fire', emoji:'🐍', trait:'Wise', traitZh:'聪慧', desc:{en:'Intuitive, deep thinking and mysterious — values knowledge and strategy.', zh:'直觉敏锐、深沉神秘，重视智慧与策略。'}, keywords:['wise','intuitive','mysterious','智慧']},
  {id:'horse', en:'Horse', zh:'马', element:'Fire', emoji:'🐎', trait:'Energetic', traitZh:'活力', desc:{en:'Energetic and freedom-loving; enjoys movement and new experiences.', zh:'充满活力，热爱自由，喜欢旅行与新鲜体验。'}, keywords:['energetic','free','travel','活力']},
  {id:'goat', en:'Goat', zh:'羊', element:'Earth', emoji:'🐐', trait:'Creative', traitZh:'温柔', desc:{en:'Compassionate, artistic and gentle — appreciates beauty and comfort.', zh:'有同情心、富有艺术感，性情温和，喜欢美与舒适。'}, keywords:['creative','compassionate','artistic','温柔']},
  {id:'monkey', en:'Monkey', zh:'猴', element:'Metal', emoji:'🐒', trait:'Inventive', traitZh:'机智', desc:{en:'Curious, playful and inventive — a quick thinker who loves puzzles.', zh:'好奇顽皮，擅长发明与解决问题，思维敏捷。'}, keywords:['inventive','curious','playful','机智']},
  {id:'rooster', en:'Rooster', zh:'鸡', element:'Metal', emoji:'🐔', trait:'Confident', traitZh:'自信', desc:{en:'Organized, honest and observant — often vocal about their beliefs.', zh:'有条理、诚实且细心，常会明确表达自己的想法。'}, keywords:['confident','observant','honest','有条理']},
  {id:'dog', en:'Dog', zh:'狗', element:'Earth', emoji:'🐕', trait:'Loyal', traitZh:'忠诚', desc:{en:'Faithful and sincere; values friendship and standing up for others.', zh:'忠诚真诚，重视友情并常常为他人挺身而出。'}, keywords:['loyal','faithful','sincere','忠诚']},
  {id:'pig', en:'Pig', zh:'猪', element:'Water', emoji:'🐖', trait:'Generous', traitZh:'善良', desc:{en:'Warm-hearted, generous and easygoing — enjoys comfort and good company.', zh:'心地善良，乐于分享，随和，喜欢美好与陪伴。'}, keywords:['generous','warm','easygoing','善良']}
];

/* ---- App State and elements ---- */
const state = {
  language: localStorage.getItem('zodiac:lang') || 'en',
  theme: localStorage.getItem('zodiac:theme') || 'light',
  element: localStorage.getItem('zodiac:element') || 'all',
  search: localStorage.getItem('zodiac:search') || ''
}

const el = {
  grid: document.getElementById('zodiac-grid'),
  search: document.getElementById('search'),
  filterElement: document.getElementById('filter-element'),
  langToggle: document.getElementById('lang-toggle'),
  themeToggle: document.getElementById('theme-toggle'),
  detail: document.getElementById('detail'),
  detailOverlay: document.getElementById('overlay'),
  detailName: document.getElementById('detail-name'),
  detailNameZh: document.getElementById('detail-name-zh'),
  detailElement: document.getElementById('detail-element'),
  detailDesc: document.getElementById('detail-desc'),
  detailHero: document.getElementById('detail-hero'),
  closeBtn: document.getElementById('close-detail')
}

function applyTheme(theme){
  if(theme === 'dark') document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
  state.theme = theme; localStorage.setItem('zodiac:theme', theme);
  el.themeToggle.textContent = theme === 'dark' ? 'Dark' : 'Light';
  el.themeToggle.setAttribute('aria-pressed', theme === 'dark');
}

function applyLanguage(lang){
  state.language = lang; localStorage.setItem('zodiac:lang', lang);
  el.langToggle.textContent = lang === 'en' ? '中文' : 'EN';
  el.langToggle.setAttribute('aria-pressed', lang !== 'en');
  updateUIStrings();
  renderGrid();
}

function renderCard(z){
  const node = document.createElement('div');
  node.className = 'card';
  node.dataset.id = z.id;

  const traitText = state.language === 'en' ? z.trait : (z.traitZh || z.trait);

  node.innerHTML = `
    <div class="icon">${z.emoji}</div>
    <div class="meta">
      <div class="name">${z.en}</div>
      <div class="name-zh">${z.zh}</div>
    </div>
    <div class="tooltip">${traitText}</div>
  `;

  // handle clicks
  node.addEventListener('click', ()=>openDetail(z));
  return node;
}

function openDetail(z){
  // put content
  el.detailName.textContent = state.language === 'en' ? z.en : z.en; // keep EN title both places to show both
  el.detailNameZh.textContent = z.zh;
  el.detailElement.textContent = z.element;
  el.detailDesc.textContent = state.language === 'en' ? z.desc.en : z.desc.zh;
  el.detailHero.textContent = z.emoji;

  // add background glow animation
  el.detailHero.style.animation = 'pulse 2s infinite ease-in-out';

  // open slide panel
  el.detail.classList.remove('hidden');
  el.detail.classList.add('open');
  el.detail.setAttribute('aria-hidden','false');
  el.detailOverlay.classList.remove('hidden');
}

function closeDetail(){
  el.detail.classList.remove('open');
  el.detail.setAttribute('aria-hidden','true');
  el.detailOverlay.classList.add('hidden');
  setTimeout(()=>{
    el.detail.classList.add('hidden');
  },300);
}

function matchesFilter(z){
  const elt = state.element;
  if(elt && elt !== 'all' && z.element !== elt) return false;
  const q = (state.search || '').trim().toLowerCase();
  if(!q) return true;
  // search english, chinese and keywords
  if(z.en.toLowerCase().includes(q) || z.zh.includes(q)) return true;
  return z.keywords.some(k=>k.toLowerCase().includes(q));
}

function renderGrid(){
  el.grid.innerHTML = '';
  const filtered = ZODIACS.filter(matchesFilter);
  if(filtered.length === 0){
    const empty = document.createElement('div');
    empty.className = 'empty';
    empty.textContent = state.language === 'en' ? 'No results — try another filter or search.' : '没有结果 — 请尝试其他筛选或搜索。';
    el.grid.appendChild(empty);
    return;
  }

  // nice staggered animation
  filtered.forEach((z,i)=>{
    const c = renderCard(z);
    c.style.opacity = 0; c.style.transform = 'translateY(8px)';
    el.grid.appendChild(c);
    requestAnimationFrame(()=>{
      setTimeout(()=>{c.style.opacity=1; c.style.transform='translateY(0)';}, i*35);
    });
  });
}

/* setup event handlers */
function attachHandlers(){
  el.search.value = state.search;
  el.filterElement.value = state.element || 'all';

  el.search.addEventListener('input', (e)=>{
    state.search = e.target.value;
    localStorage.setItem('zodiac:search', state.search);
    renderGrid();
  });

  el.filterElement.addEventListener('change', (e)=>{
    state.element = e.target.value;
    localStorage.setItem('zodiac:element', state.element);
    renderGrid();
  });

  el.langToggle.addEventListener('click', ()=>{
    applyLanguage(state.language === 'en' ? 'zh' : 'en');
  });

  el.themeToggle.addEventListener('click', ()=>{
    applyTheme(state.theme === 'light' ? 'dark' : 'light');
  });

  el.detailOverlay.addEventListener('click', closeDetail);
  el.closeBtn.addEventListener('click', closeDetail);

  // keyboard escape close
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeDetail();
  });
}

function updateUIStrings(){
  // update label texts and placeholders to match language
  const searchLabel = document.querySelector('label[for="search"]');
  const filterLabel = document.querySelector('label[for="filter-element"]');
  const placeholder = state.language === 'en' ? 'Search name or keyword (EN / 中文)' : '搜索 名称 或 关键字 (EN / 中文)';
  if(searchLabel) searchLabel.textContent = state.language === 'en' ? 'Search' : '搜索';
  if(filterLabel) filterLabel.textContent = state.language === 'en' ? 'Element' : '五行';
  el.search.placeholder = placeholder;
}

/* init */
function init(){
  // set theme & language from state
  applyTheme(state.theme === 'dark' ? 'dark' : 'light');
  applyLanguage(state.language === 'zh' ? 'zh' : 'en');
  attachHandlers();
  updateUIStrings();
  renderGrid();
}

/* CSS animations via JS insertion */
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
@keyframes pulse{0%{transform:scale(1);opacity:0.85}50%{transform:scale(1.06);opacity:1}100%{transform:scale(1);opacity:0.85}}
`;
document.head.appendChild(styleSheet);

init();
