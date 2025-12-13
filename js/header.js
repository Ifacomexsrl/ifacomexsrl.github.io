/* js/header.js - VERSIÓN LIMPIA */

const headerHTML = `
<div class="nav-container">
    <a href="index.html" class="logo">
        <img src="logos/nuevo_logo_f.png" alt="IFACOMEX" onerror="this.style.display='none'">
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
                <ul class="lang-list" id="langList"></ul>
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

// --- LÓGICA DE IDIOMAS Y TEMA OSCURO ---
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
    document.getElementById('langDropdown').classList.toggle('active');
    document.getElementById('translateBtn').classList.toggle('active');
}

function filterLanguages() {
    const filter = document.getElementById('langSearch').value.toLowerCase();
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
    document.getElementById('currentLangLabel').innerText = langName;
    toggleLangMenu();
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'es', autoDisplay: false }, 'google_translate_element');
}

(function() {
    var googleScript = document.createElement('script');
    googleScript.type = 'text/javascript';
    googleScript.async = true;
    googleScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(googleScript);
})();

// Cerrar menús al hacer clic fuera
document.addEventListener('click', function(event) {
    const actions = document.querySelector('.header-actions');
    if (actions && !actions.contains(event.target)) {
        document.getElementById('langDropdown').classList.remove('active');
        document.getElementById('translateBtn').classList.remove('active');
    }
});

// Modo Oscuro
(function setupThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if(!btn) return;
    const body = document.body;
    const icon = btn.querySelector('i');
    
    if (localStorage.getItem('theme') === 'dark') {
        body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    btn.addEventListener('click', () => {
        if (body.hasAttribute('data-theme')) {
            body.removeAttribute('data-theme');
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });
})();

// Metadatos SEO
(function setupSEO() {
    if (!document.querySelector('meta[property="og:title"]')) {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:title');
        meta.setAttribute('content', document.title);
        document.head.appendChild(meta);
    }
})();