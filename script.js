// ==================== ZODIAC DATA ==================== 
const ZODIAC_DATA = [
    {
        id: 1,
        nameEn: "Rat",
        nameZh: "鼠",
        icon: "🐭",
        element: "Water",
        years: "2024, 2012, 2000, 1988, 1976",
        trait: "Intelligent",
        description: "Rats are intelligent, adaptable, and resourceful. They are quick-witted and possess excellent problem-solving abilities. Known for being ambitious and charming, rats thrive in social environments and are natural communicators.",
        descriptionZh: "鼠年出生的人聪慧灵动,适应能力强。他们反应敏捷,具有出色的解决问题的能力。鼠年人充满野心,魅力十足,善于社交交往,是天生的交流者。"
    },
    {
        id: 2,
        nameEn: "Ox",
        nameZh: "牛",
        icon: "🐂",
        element: "Earth",
        years: "2021, 2009, 1997, 1985, 1973",
        trait: "Dependable",
        description: "Oxen are reliable, diligent, and steadfast. They value honesty and hard work above all else. Though they may seem slow, their determination and persistence guarantee success in their endeavors.",
        descriptionZh: "牛年出生的人踏实可靠,勤劳不懈。他们重视诚实和努力。虽然看似行动缓慢,但他们的决心和毅力保证了成功。"
    },
    {
        id: 3,
        nameEn: "Tiger",
        nameZh: "虎",
        icon: "🐯",
        element: "Wood",
        years: "2022, 2010, 1998, 1986, 1974",
        trait: "Courageous",
        description: "Tigers are courageous, passionate, and dynamic. They are natural leaders who enjoy taking risks and facing challenges. Their enthusiasm and confidence inspire those around them.",
        descriptionZh: "虎年出生的人勇敢无畏,热情洋溢。他们是天生的领导者,喜欢冒险和迎接挑战。他们的热情和自信能激励周围的人。"
    },
    {
        id: 4,
        nameEn: "Rabbit",
        nameZh: "兔",
        icon: "🐰",
        element: "Wood",
        years: "2023, 2011, 1999, 1987, 1975",
        trait: "Gentle",
        description: "Rabbits are gentle, compassionate, and artistic. They have a natural affinity for beauty and creativity. Though quiet, they possess inner strength and wisdom that guide their decisions.",
        descriptionZh: "兔年出生的人温柔体贴,富有同情心。他们热爱美和创意。虽然性格文静,但内心拥有指引决策的力量和智慧。"
    },
    {
        id: 5,
        nameEn: "Dragon",
        nameZh: "龙",
        icon: "🐉",
        element: "Water",
        years: "2024, 2012, 2000, 1988, 1976",
        trait: "Ambitious",
        description: "Dragons are ambitious, charismatic, and powerful. They possess natural magnetism and attract good fortune. Dragons are idealistic and driven to achieve greatness in all they pursue.",
        descriptionZh: "龙年出生的人雄心壮志,魅力十足。他们天生具有吸引力和好运。龙年人理想主义,致力于在所做的一切中取得伟大成就。"
    },
    {
        id: 6,
        nameEn: "Snake",
        nameZh: "蛇",
        icon: "🐍",
        element: "Fire",
        years: "2025, 2013, 2001, 1989, 1977",
        trait: "Wise",
        description: "Snakes are wise, introspective, and intuitive. They possess deep spiritual understanding and philosophical insight. Snakes are mysterious yet captivating, drawing others into their world.",
        descriptionZh: "蛇年出生的人睿智深思,具有直觉力。他们拥有深厚的精神修养和哲学洞察。蛇年人神秘迷人,吸引他人靠近。"
    },
    {
        id: 7,
        nameEn: "Horse",
        nameZh: "马",
        icon: "🐴",
        element: "Fire",
        years: "2026, 2014, 2002, 1990, 1978",
        trait: "Spirited",
        description: "Horses are spirited, energetic, and freedom-loving. They are passionate about life and possess an infectious enthusiasm. Horses are independent thinkers who value liberty and adventure.",
        descriptionZh: "马年出生的人精力充沛,热爱自由。他们充满对生活的热情,拥有感染力的热情。马年人是独立思想者,重视自由和冒险。"
    },
    {
        id: 8,
        nameEn: "Goat",
        nameZh: "羊",
        icon: "🐑",
        element: "Earth",
        years: "2027, 2015, 2003, 1991, 1979",
        trait: "Peaceful",
        description: "Goats are peaceful, gentle, and creative. They possess artistic talents and appreciation for the finer things in life. Goats are kind-hearted and prefer harmony over conflict.",
        descriptionZh: "羊年出生的人温和善良,富有创意。他们具有艺术天赋,欣赏生活中的美好事物。羊年人心地善良,倾向于和谐而非冲突。"
    },
    {
        id: 9,
        nameEn: "Monkey",
        nameZh: "猴",
        icon: "🐵",
        element: "Metal",
        years: "2028, 2016, 2004, 1992, 1980",
        trait: "Playful",
        description: "Monkeys are playful, clever, and witty. They possess quick minds and a great sense of humor. Monkeys love being the center of attention and excel at entertaining others.",
        descriptionZh: "猴年出生的人聪慧机灵,幽默感十足。他们反应敏捷,喜欢成为关注中心。猴年人擅长娱乐他人和活跃气氛。"
    },
    {
        id: 10,
        nameEn: "Rooster",
        nameZh: "鸡",
        icon: "🐓",
        element: "Metal",
        years: "2029, 2017, 2005, 1993, 1981",
        trait: "Honest",
        description: "Roosters are honest, straightforward, and observant. They are perfectionists who pay great attention to detail. Roosters are loyal friends and dependable allies in any situation.",
        descriptionZh: "鸡年出生的人诚实坦率,观察力敏锐。他们追求完美,注重细节。鸡年人是忠诚的朋友,可靠的同盟者。"
    },
    {
        id: 11,
        nameEn: "Dog",
        nameZh: "狗",
        icon: "🐕",
        element: "Earth",
        years: "2030, 2018, 2006, 1994, 1982",
        trait: "Loyal",
        description: "Dogs are loyal, honest, and trustworthy. They have a strong sense of justice and integrity. Dogs are protective of their loved ones and make dependable companions through life's journey.",
        descriptionZh: "狗年出生的人忠诚可信,富有正义感。他们保护所爱之人,是可靠的伴侣和朋友。"
    },
    {
        id: 12,
        nameEn: "Pig",
        nameZh: "猪",
        icon: "🐷",
        element: "Water",
        years: "2031, 2019, 2007, 1995, 1983",
        trait: "Generous",
        description: "Pigs are generous, compassionate, and diligent. They possess a kind heart and genuine concern for others. Pigs are sincere and straightforward, valuing honesty and long-lasting relationships.",
        descriptionZh: "猪年出生的人慷慨大方,富有同情心。他们心地善良,真诚待人。猪年人坦率诚实,重视友谊和长久的关系。"
    }
];

// ==================== I18N ==================== 
const I18N = {
    en: {
        title: "12 Zodiac Explorer",
        search_placeholder: "Search zodiac...",
        filter_all: "All Elements",
        element: "Element:",
        years: "Years:",
        trait: "Key Trait:",
        description: "Description"
    },
    zh: {
        title: "十二生肖探秘",
        search_placeholder: "搜索生肖...",
        filter_all: "所有元素",
        element: "元素:",
        years: "年份:",
        trait: "主要特征:",
        description: "描述"
    }
};

// ==================== STATE MANAGEMENT ==================== 
let currentLanguage = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';
let currentFilter = localStorage.getItem('filter') || '';
let currentSearch = localStorage.getItem('search') || '';
let selectedZodiacId = null;

// ==================== INITIALIZATION ==================== 
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Set initial theme
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Restore filter and search
    document.getElementById('elementFilter').value = currentFilter;
    document.getElementById('searchInput').value = currentSearch;

    // Set language text
    updateLanguageText();

    // Render cards
    renderZodiacCards();

    // Attach event listeners
    attachEventListeners();
}

// ==================== EVENT LISTENERS ==================== 
function attachEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Language toggle
    document.getElementById('languageToggle').addEventListener('click', toggleLanguage);

    // Filter dropdown
    document.getElementById('elementFilter').addEventListener('change', handleFilterChange);

    // Search input
    document.getElementById('searchInput').addEventListener('input', handleSearchInput);

    // Panel close
    document.getElementById('closePanel').addEventListener('click', closeDetailPanel);
    document.getElementById('overlay').addEventListener('click', closeDetailPanel);
}

// ==================== THEME MANAGEMENT ==================== 
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
}

// ==================== LANGUAGE MANAGEMENT ==================== 
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    localStorage.setItem('language', currentLanguage);
    updateLanguageText();
    renderZodiacCards();
    
    // Update detail panel if open
    if (selectedZodiacId !== null) {
        const zodiac = ZODIAC_DATA.find(z => z.id === selectedZodiacId);
        updateDetailPanel(zodiac);
    }
}

function updateLanguageText() {
    const lang = I18N[currentLanguage];
    
    // Update element filter options
    const filterSelect = document.getElementById('elementFilter');
    filterSelect.options[0].textContent = lang.filter_all;
    
    // Update all data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (lang[key]) {
            el.textContent = lang[key];
        }
    });

    // Update placeholder
    const searchInput = document.getElementById('searchInput');
    searchInput.placeholder = lang.search_placeholder;
}

// ==================== FILTER & SEARCH ==================== 
function handleFilterChange(event) {
    currentFilter = event.target.value;
    localStorage.setItem('filter', currentFilter);
    renderZodiacCards();
}

function handleSearchInput(event) {
    currentSearch = event.target.value.toLowerCase();
    localStorage.setItem('search', currentSearch);
    renderZodiacCards();
}

function filterZodiacData() {
    let filtered = ZODIAC_DATA;

    // Apply element filter
    if (currentFilter) {
        filtered = filtered.filter(z => z.element === currentFilter);
    }

    // Apply search filter
    if (currentSearch) {
        filtered = filtered.filter(z => {
            const searchTerm = currentSearch;
            return z.nameEn.toLowerCase().includes(searchTerm) ||
                   z.nameZh.includes(searchTerm) ||
                   z.trait.toLowerCase().includes(searchTerm) ||
                   z.element.toLowerCase().includes(searchTerm);
        });
    }

    return filtered;
}

// ==================== CARD RENDERING ==================== 
function renderZodiacCards() {
    const container = document.getElementById('cardsContainer');
    const filtered = filterZodiacData();

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <div class="empty-state-text">
                    ${currentLanguage === 'en' ? 'No zodiacs found' : '未找到相应生肖'}
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(zodiac => `
        <div class="zodiac-card" data-id="${zodiac.id}">
            <div class="card-icon">${zodiac.icon}</div>
            <div class="card-info">
                <div class="card-name-en">${zodiac.nameEn}</div>
                <div class="card-name-zh">${zodiac.nameZh}</div>
                <div class="card-element">${zodiac.element}</div>
            </div>
            <div class="card-tooltip">${zodiac.trait}</div>
        </div>
    `).join('');

    // Attach click listeners to cards
    document.querySelectorAll('.zodiac-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            const zodiac = ZODIAC_DATA.find(z => z.id === id);
            openDetailPanel(zodiac);
        });
    });
}

// ==================== DETAIL PANEL MANAGEMENT ==================== 
function openDetailPanel(zodiac) {
    selectedZodiacId = zodiac.id;
    updateDetailPanel(zodiac);
    document.getElementById('detailPanel').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDetailPanel() {
    document.getElementById('detailPanel').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
    selectedZodiacId = null;
}

function updateDetailPanel(zodiac) {
    document.getElementById('panelIcon').textContent = zodiac.icon;
    document.getElementById('panelNameEn').textContent = zodiac.nameEn;
    document.getElementById('panelNameZh').textContent = zodiac.nameZh;
    document.getElementById('panelElement').textContent = zodiac.element;
    document.getElementById('panelYears').textContent = zodiac.years;
    document.getElementById('panelTrait').textContent = zodiac.trait;
    
    const description = currentLanguage === 'en' ? zodiac.description : zodiac.descriptionZh;
    document.getElementById('panelDescription').textContent = description;
    
    // Update labels based on language
    updateDetailLabels();
}

function updateDetailLabels() {
    const lang = I18N[currentLanguage];
    document.querySelectorAll('.detail-label').forEach(label => {
        const key = label.getAttribute('data-i18n');
        if (key && lang[key]) {
            label.textContent = lang[key];
        }
    });
}

// Prevent panel from closing when clicking inside it
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('detailPanel').addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
