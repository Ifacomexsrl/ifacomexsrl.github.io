/* js/extras.js */

document.addEventListener("DOMContentLoaded", () => {
    
    /* --- 1. INYECTAR HTML (COOKIES & SCROLL) --- */
    const extrasHTML = `
        <div class="scroll-top-btn" id="scrollTopBtn" onclick="scrollToTop()">
            <i class="fas fa-arrow-up"></i>
        </div>

        <div class="cookie-consent-modal" id="cookieBanner">
            <div class="cookie-content">
                <div class="cookie-text">
                    <h4><i class="fas fa-cookie-bite"></i> Privacidad y Cookies</h4>
                    <p>Utilizamos cookies para asegurar que tengas la mejor experiencia en nuestro sitio de comercio exterior. ¿Aceptas nuestras políticas?</p>
                </div>
                <div class="cookie-buttons">
                    <button class="btn-cookie-deny" onclick="acceptCookies()">Cerrar</button>
                    <button class="btn-cookie-accept" onclick="acceptCookies()">Aceptar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', extrasHTML);

    /* --- 2. LÓGICA COOKIES --- */
    // Verificar si ya aceptó antes
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            document.getElementById('cookieBanner').style.display = 'block';
        }, 2000); // Aparece a los 2 segundos
    }

    /* --- 3. LÓGICA SCROLL TOP --- */
    const scrollBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
});

/* Funciones Globales */

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    const banner = document.getElementById('cookieBanner');
    banner.style.opacity = '0';
    setTimeout(() => {
        banner.style.display = 'none';
    }, 500);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}