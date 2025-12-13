/* js/clock.js */

document.addEventListener("DOMContentLoaded", () => {
    
    // Inyectar HTML
    const widgetHTML = `
        <div class="clock-float-btn" onclick="toggleClock()"></div>

        <div class="clock-window" id="clockWindow">
            <div class="clock-header">
                <h3><i class="far fa-clock"></i> Hora Mundial</h3>
                <span class="clock-close" onclick="toggleClock()">×</span>
            </div>
            
            <div class="clock-grid">
                <div class="clock-item">
                    <div class="city-info">
                        <span class="city-name">🇦🇷 Buenos Aires</span>
                        <span class="city-day" id="day-ba">...</span>
                    </div>
                    <span class="city-time" id="time-ba">00:00</span>
                </div>

                <div class="clock-item">
                    <div class="city-info">
                        <span class="city-name">🇺🇸 New York</span>
                        <span class="city-day" id="day-ny">...</span>
                    </div>
                    <span class="city-time" id="time-ny">00:00</span>
                </div>

                <div class="clock-item">
                    <div class="city-info">
                        <span class="city-name">🇪🇺 Madrid / Rotterdam</span>
                        <span class="city-day" id="day-eu">...</span>
                    </div>
                    <span class="city-time" id="time-eu">00:00</span>
                </div>

                <div class="clock-item">
                    <div class="city-info">
                        <span class="city-name">🇨🇳 Beijing</span>
                        <span class="city-day" id="day-cn">...</span>
                    </div>
                    <span class="city-time" id="time-cn">00:00</span>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);
    
    // Iniciar el reloj
    setInterval(updateWorldClocks, 1000);
    updateWorldClocks(); // Ejecutar ya
});

// Toggle
window.toggleClock = function() {
    const win = document.getElementById('clockWindow');
    // Cerrar otros
    ['trackerWindow', 'calcWindow', 'tickerPopup', 'incoWindow', 'contWindow', 'convWindow'].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.style.display = 'none';
    });

    if (win.style.display === 'flex') {
        win.style.display = 'none';
    } else {
        win.style.display = 'flex';
    }
}

// Lógica de Tiempos
function updateWorldClocks() {
    const zones = [
        { id: 'ba', zone: 'America/Argentina/Buenos_Aires' },
        { id: 'ny', zone: 'America/New_York' },
        { id: 'eu', zone: 'Europe/Madrid' },
        { id: 'cn', zone: 'Asia/Shanghai' }
    ];

    zones.forEach(z => {
        const now = new Date();
        
        // Obtener Hora
        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: z.zone };
        const timeStr = new Intl.DateTimeFormat('en-US', timeOptions).format(now);
        
        // Obtener Día (Lun, Mar...)
        const dayOptions = { weekday: 'short', timeZone: z.zone };
        const dayStr = new Intl.DateTimeFormat('es-ES', dayOptions).format(now);

        const timeEl = document.getElementById(`time-${z.id}`);
        const dayEl = document.getElementById(`day-${z.id}`);

        if(timeEl) timeEl.innerText = timeStr;
        if(dayEl) dayEl.innerText = dayStr.charAt(0).toUpperCase() + dayStr.slice(1);
    });
}