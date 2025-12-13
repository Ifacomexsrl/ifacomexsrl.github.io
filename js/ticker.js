/* js/ticker.js */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inyectar HTML del Widget con diseño "Trading"
    const widgetHTML = `
        <div class="ticker-float-container">
            <div class="ticker-popup" id="tickerPopup">
                <div class="ticker-header">
                    <span class="ticker-title">
                        <div class="live-indicator"></div> Mercado Forex
                    </span>
                    <span style="font-size: 0.8rem; color: #64748b;">AR</span>
                </div>
                
                <div class="ticker-body">
                    <div class="ticker-row">
                        <span class="ticker-currency"><span class="currency-flag">🇺🇸</span> USD Oficial</span>
                        <span class="ticker-amount" id="widget-usd-oficial">...</span>
                    </div>
                    
                    <div class="ticker-row">
                        <span class="ticker-currency"><span class="currency-flag">💵</span> USD Blue</span>
                        <span class="ticker-amount" id="widget-usd-blue">...</span>
                    </div>
                    
                    <div class="ticker-row">
                        <span class="ticker-currency"><span class="currency-flag">🇪🇺</span> Euro</span>
                        <span class="ticker-amount" id="widget-euro">...</span>
                    </div>
                </div>

                <div class="ticker-footer">
                    <i class="fas fa-sync-alt"></i> Actualizado en tiempo real
                </div>
            </div>

            <div class="ticker-btn" onclick="toggleTicker()" title="Ver Cotizaciones">
                <i class="fas fa-chart-line"></i>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);

    // 2. Cargar Datos
    fetchFinancialData();
});

// Función para mostrar/ocultar con animación
window.toggleTicker = function() {
    const popup = document.getElementById('tickerPopup');
    if (popup.style.display === 'flex') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'flex';
    }
}

// Función para traer datos de la API
function fetchFinancialData() {
    fetch('https://dolarapi.com/v1/dolares')
        .then(response => response.json())
        .then(data => {
            const oficial = data.find(d => d.casa === 'oficial');
            const blue = data.find(d => d.casa === 'blue');
            
            if (oficial) {
                document.getElementById('widget-usd-oficial').innerText = `$${oficial.venta}`;
            }
            if (blue) {
                document.getElementById('widget-usd-blue').innerText = `$${blue.venta}`;
            }
            
            return fetch('https://dolarapi.com/v1/cotizaciones/eur');
        })
        .then(res => res.json())
        .then(euroData => {
            if(euroData) {
                 // Formato a 2 decimales para que se vea limpio
                 document.getElementById('widget-euro').innerText = `$${parseFloat(euroData.venta).toFixed(2)}`;
            }
        })
        .catch(error => {
            console.error('Error widget:', error);
            document.getElementById('widget-usd-oficial').innerText = "---";
        });
}