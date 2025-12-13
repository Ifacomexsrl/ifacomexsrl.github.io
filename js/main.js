/* js/main.js */
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ANIMACIONES SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('stat-number') && !entry.target.classList.contains('counted')) {
                    animateValue(entry.target);
                    entry.target.classList.add('counted');
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .timeline-item, .section-title, .stat-number').forEach(el => {
        observer.observe(el);
    });

    function animateValue(obj) {
        const target = parseInt(obj.getAttribute("data-target"));
        const prefix = obj.getAttribute("data-prefix") || "";
        let start = 0;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / target));
        const effectiveStep = stepTime < 10 ? 10 : stepTime;
        const timer = setInterval(() => {
            start += Math.ceil(target / (duration / effectiveStep));
            if (start >= target) { start = target; clearInterval(timer); }
            obj.innerHTML = prefix + start;
        }, effectiveStep);
    }

    // --- 2. MAPA INTERACTIVO (NO TOCAR - CALIBRADO) ---
    const mapMarker = document.getElementById('tech-marker');
    const mapLabel = document.getElementById('tech-label');
    
    // Coordenadas calibradas para "World_map_-_low_resolution.svg"
    const mapLocations = [
        { name: "Buenos Aires", top: "72.1%", left: "31.3%" },
        { name: "Sao Paulo", top: "60.8%", left: "32.7%" },
        { name: "Santiago", top: "73%", left: "27.6%" },
        { name: "Bogotá", top: "52.3%", left: "25.6%" },
        { name: "CDMX", top: "43.5%", left: "18.4%" },
        { name: "New York", top: "33.1%", left: "26.7%" },
        { name: "Los Angeles", top: "34.9%", left: "15.4%" },
        { name: "Vancouver", top: "23.3%", left: "16.3%" },
        { name: "Londres", top: "27.3%", left: "47.1%" },
        { name: "Madrid", top: "34.4%", left: "46.5%" },
        { name: "Berlín", top: "27.6%", left: "50.7%" },
        { name: "Moscú", top: "25%", left: "58.5%" },
        { name: "El Cairo", top: "39.7%", left: "56.6%" },
        { name: "Dubái", top: "42.5%", left: "63.4%" },
        { name: "Nueva Delhi", top: "42.1%", left: "70.1%" },
        { name: "Singapur", top: "52.8%", left: "78.1%" },
        { name: "Tokio", top: "31.7%", left: "86.6%" },
        { name: "Sídney", top: "75.3%", left: "89.3%" },
        { name: "Ciudad del Cabo", top: "70.5%", left: "53%" },
        { name: "Pekín", top: "32.2%", left: "80%" }
    ];

    let locIndex = 0;

    if (mapMarker) {
        function moveMarker() {
            const loc = mapLocations[locIndex];
            
            // Ocultar etiqueta durante el viaje
            mapMarker.classList.remove('landed');

            // Mover
            mapMarker.style.top = loc.top;
            mapMarker.style.left = loc.left;
            
            // Actualizar Texto (pero mostrarlo solo al llegar)
            if(mapLabel) mapLabel.innerText = loc.name;

            // Mostrar etiqueta al aterrizar
            setTimeout(() => {
                mapMarker.classList.add('landed');
            }, 2000); // 2s es el tiempo de la transición CSS

            locIndex = (locIndex + 1) % mapLocations.length;
        }

        moveMarker(); 
        setInterval(moveMarker, 3500); 
    }

    // --- 3. HERO SLIDER ---
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); 
    }

    // --- 4. CLIENT CAROUSEL ---
    const clientTrack = document.querySelector('.client-track');
    const dots = document.querySelectorAll('.dot');
    if (clientTrack && dots.length > 0) {
        let currentClientSlide = 0;
        const totalSlides = dots.length;
        function updateCarousel(index) {
            const width = index * -100;
            clientTrack.style.transform = `translateX(${width}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
            currentClientSlide = index;
        }
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => { updateCarousel(index); resetAutoPlay(); });
        });
        let autoPlayInterval;
        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                let nextIndex = (currentClientSlide + 1) % totalSlides;
                updateCarousel(nextIndex);
            }, 4000);
        }
        function resetAutoPlay() { clearInterval(autoPlayInterval); startAutoPlay(); }
        startAutoPlay();
    }

    // --- 5. FORMULARIO DE CONTACTO (SIMULACIÓN) ---
    // Detecta si hay un formulario en la página (ej: contacto.html) y simula el envío.
    const contactForm = document.querySelector('form'); 
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue

            // Buscar el botón de envío para cambiarle el texto
            const submitBtn = this.querySelector('button[type="submit"]') || this.querySelector('input[type="submit"]');
            let originalText = "Enviar";
            
            if (submitBtn) {
                originalText = submitBtn.innerText || submitBtn.value;
                if(submitBtn.tagName === 'BUTTON') submitBtn.innerText = 'Enviando...';
                else submitBtn.value = 'Enviando...';
                submitBtn.disabled = true;
            }

            // Simular espera de red (1.5 segundos)
            setTimeout(() => {
                alert('¡Mensaje enviado con éxito! Un asesor de IFACOMEX se pondrá en contacto a la brevedad.');
                contactForm.reset(); // Limpiar campos

                if (submitBtn) {
                    if(submitBtn.tagName === 'BUTTON') submitBtn.innerText = originalText;
                    else submitBtn.value = originalText;
                    submitBtn.disabled = false;
                }
            }, 1500);
        });
    }
});