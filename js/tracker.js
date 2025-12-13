/* js/tracker.js */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Inyectar HTML
    const trackerHTML = `
        <div class="tracker-float-btn" onclick="toggleTracker()" title="Rastrear Carga">
            <i class="fas fa-search-location"></i>
        </div>

        <div class="tracker-window" id="trackerWindow">
            <div class="tracker-header">
                <h3><i class="fas fa-ship"></i> Tracking</h3>
                <span class="tracker-close" onclick="toggleTracker()">×</span>
            </div>

            <div class="tracker-types">
                <button class="tracker-type-btn active" onclick="setTrackType('container', this)">Contenedor</button>
                <button class="tracker-type-btn" onclick="setTrackType('bl', this)">Bill of Lading</button>
            </div>

            <div class="tracker-input-group">
                <input type="text" id="trackInput" class="tracker-input" placeholder="EJ: MSCU1234567">
            </div>

            <button class="btn-track" onclick="trackCargo()">
                <i class="fas fa-external-link-alt"></i> Buscar Ahora
            </button>
            
            <p style="font-size:0.7rem; color:#64748b; text-align:center; margin-top:10px;">
                Redirige a plataforma global de rastreo.
            </p>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', trackerHTML);
});

// Variables globales
let currentTrackType = 'container';

// Funciones
window.toggleTracker = function() {
    const win = document.getElementById('trackerWindow');
    // Cerrar la calculadora si está abierta para que no se superpongan
    const calcWin = document.getElementById('calcWindow');
    if(calcWin) calcWin.style.display = 'none';

    if (win.style.display === 'flex') {
        win.style.display = 'none';
    } else {
        win.style.display = 'flex';
        setTimeout(() => document.getElementById('trackInput').focus(), 100);
    }
}

window.setTrackType = function(type, btn) {
    currentTrackType = type;
    
    // Actualizar botones visualmente
    document.querySelectorAll('.tracker-type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Cambiar placeholder
    const input = document.getElementById('trackInput');
    input.placeholder = type === 'container' ? 'EJ: MSCU1234567' : 'EJ: MAEU123456789';
}

window.trackCargo = function() {
    const code = document.getElementById('trackInput').value.trim().toUpperCase();
    
    if (code.length < 4) {
        alert("Por favor ingresa un número válido.");
        return;
    }

    let url = "";

    // Lógica de redirección (Usa Track-Trace, un estándar en la industria)
    if (currentTrackType === 'container') {
        url = `https://www.track-trace.com/container/search?number=${code}`;
    } else {
        url = `https://www.track-trace.com/bol/search?number=${code}`;
    }

    // Abrir en nueva pestaña
    window.open(url, '_blank');
}