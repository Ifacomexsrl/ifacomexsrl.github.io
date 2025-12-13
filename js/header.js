/* js/header.js */

const headerHTML = `
<div class="nav-container">
    <a href="index.html" class="logo">
        <img src="logos/nuevo_logo_f.png" alt="IFACOMEX" style="height: 50px; width: auto; margin-right: 10px;" onerror="this.style.display='none'">
        Comercio <span style="color:var(--accent-color)">Exterior</span>
    </a>
    
    <div class="hamburger" onclick="toggleMenu()">
        <i class="fas fa-bars"></i>
    </div>

    <nav class="nav-menu" id="navMenu">
        <ul style="display: flex; flex-direction: inherit; gap: inherit; align-items: inherit; width: 100%; list-style:none; flex-wrap: wrap;">
            <li><a href="index.html" class="nav-link">Inicio</a></li>
            <li class="dropdown">
                <a href="#" class="nav-link">Servicios ▾</a>
                <ul class="dropdown-menu">
                    <li><a href="exportacion.html" class="dropdown-item">Exportación</a></li>
                    <li><a href="importacion.html" class="dropdown-item">Importación</a></li>
                    <li><a href="auditoria-asesoramiento.html" class="dropdown-item">Auditoría</a></li>
                    <li><a href="somos-ie.html" class="dropdown-item">Somos I/E</a></li>
                </ul>
            </li>
            <li><a href="clientes.html" class="nav-link">Clientes</a></li>
            <li><a href="nosotros.html" class="nav-link">Nosotros</a></li>
            <li><a href="contacto.html" class="nav-link">Contacto</a></li>
        </ul>
        
        <div class="header-actions">
            <button class="theme-toggle" id="themeToggle" title="Cambiar Tema">
                <i class="fas fa-moon"></i>
            </button>

            <button class="custom-translate-btn" id="translateBtn" onclick="toggleLangMenu()">
                <i class="fas fa-globe"></i> <span id="currentLangLabel">Idioma</span> ▾
            </button>

            <div class="lang-dropdown" id="langDropdown">
                <div class="lang-search-container">
                    <input type="text" class="lang-search-input" placeholder="Buscar idioma..." onkeyup="filterLanguages()" id="langSearch">
                </div>
                <ul class="lang-list" id="langList">
                    </ul>
            </div>

            <div id="google_translate_element"></div>
        </div>
    </nav>
</div>
`;

document.getElementById('main-header').innerHTML = headerHTML;

function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

// --- LOGICA DE IDIOMAS ---
const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'Inglés', flag: '🇺🇸' },
    { code: 'pt', name: 'Portugués', flag: '🇧🇷' },
    { code: 'zh-CN', name: 'Chino', flag: '🇨🇳' },
    { code: 'fr', name: 'Francés', flag: '🇫🇷' },
    { code: 'de', name: 'Alemán', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ru', name: 'Ruso', flag: '🇷🇺' }
];

const langList = document.getElementById('langList');

if (langList) {
    languages.forEach(lang => {
        const li = document.createElement('li');
        li.className = 'lang-option';
        li.innerHTML = `<span>${lang.flag}</span> ${lang.name}`;
        li.onclick = () => setLanguage(lang.code, lang.name);
        langList.appendChild(li);
    });
}

function toggleLangMenu() {
    const menu = document.getElementById('langDropdown');
    const btn = document.getElementById('translateBtn');
    if (menu && btn) {
        menu.classList.toggle('active');
        btn.classList.toggle('active');
    }
}

function filterLanguages() {
    const input = document.getElementById('langSearch');
    const filter = input.value.toLowerCase();
    const li = langList.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
        const text = li[i].textContent || li[i].innerText;
        li[i].style.display = text.toLowerCase().indexOf(filter) > -1 ? "" : "none";
    }
}

function setLanguage(langCode, langName) {
    const googleSelect = document.querySelector(".goog-te-combo");
    if (googleSelect) {
        googleSelect.value = langCode;
        googleSelect.dispatchEvent(new Event("change"));
    }
    const label = document.getElementById('currentLangLabel');
    if (label) label.innerText = langName;
    toggleLangMenu();
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',
        autoDisplay: false
    }, 'google_translate_element');
}

(function() {
    var googleScript = document.createElement('script');
    googleScript.type = 'text/javascript';
    googleScript.async = true;
    googleScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(googleScript);
})();

document.addEventListener('click', function(event) {
    const actions = document.querySelector('.header-actions');
    const menu = document.getElementById('langDropdown');
    const btn = document.getElementById('translateBtn');
    
    if (actions && !actions.contains(event.target) && menu && btn) {
        menu.classList.remove('active');
        btn.classList.remove('active');
    }
});

/* =========================================
   LOGICA: MODO OSCURO (DARK MODE)
   ========================================= */
(function setupThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if(!btn) return;
    const icon = btn.querySelector('i');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    btn.addEventListener('click', () => {
        if (body.hasAttribute('data-theme')) {
            body.removeAttribute('data-theme');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });
})();

/* =========================================
   SEO & METADATOS AUTOMÁTICOS
   ========================================= */
(function setupSEO() {
    const head = document.getElementsByTagName('head')[0];
    const title = document.title;
    const desc = document.querySelector('meta[name="description"]')?.content || "Despachantes de aduana, importación, exportación y logística internacional.";
    const url = window.location.href;
    const image = window.location.origin + "/logos/nuevo_logo_f.png"; 

    const metaTags = [
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        { property: 'og:site_name', content: 'IFACOMEX SRL' }
    ];

    metaTags.forEach(tag => {
        if (!document.querySelector(`meta[property="${tag.property}"]`)) {
            const meta = document.createElement('meta');
            meta.setAttribute('property', tag.property);
            meta.setAttribute('content', tag.content);
            head.appendChild(meta);
        }
    });

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "IFACOMEX SRL",
        "image": image,
        "description": desc,
        "telephone": "+54 9 11 6599-0515",
        "email": "ifa@ifacomexsrl.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "PERU 359 PISO 3 OF 307",
            "addressLocality": "Ciudad Autónoma de Buenos Aires",
            "addressCountry": "AR"
        },
        "url": window.location.origin
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    head.appendChild(script);
})();