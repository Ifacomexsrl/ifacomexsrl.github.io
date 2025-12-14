/* =========================================
   js/toolbox.js - GESTOR INTELIGENTE CON POSICIONAMIENTO
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    
    // Inyectar HTML (Nota: Agregamos 'event' a cada llamada onclick)
    const toolboxHTML = `
        <div class="toolbox-container" id="toolboxMenu">
            <div class="toolbox-main-btn" onclick="toggleToolbox()">
                <i class="fas fa-th-large"></i>
            </div>

           

            <div class="toolbox-item btn-tool-conv" onclick="triggerTool('conv', event)" data-tooltip="Conversor Unidades">
                <i class="fas fa-exchange-alt"></i>
            </div>

            <div class="toolbox-item btn-tool-cont" onclick="triggerTool('cont', event)" data-tooltip="Tipos Contenedor">
                <i class="fas fa-truck-loading"></i>
            </div>

            <div class="toolbox-item btn-tool-inco" onclick="triggerTool('inco', event)" data-tooltip="Incoterms 2020">
                <i class="fas fa-book"></i>
            </div>

            <div class="toolbox-item btn-tool-tracker" onclick="triggerTool('tracker', event)" data-tooltip="Rastrear Carga">
                <i class="fas fa-search-location"></i>
            </div>

            <div class="toolbox-item btn-tool-calc" onclick="triggerTool('calc', event)" data-tooltip="Calc. Volumétrica">
                <i class="fas fa-calculator"></i>
            </div>

            <div class="toolbox-item btn-tool-ticker" onclick="triggerTool('ticker', event)" data-tooltip="Mercados">
                <i class="fas fa-chart-line"></i>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', toolboxHTML);
});

// por si quiero agregar estas herramientas

//<div class="toolbox-item btn-tool-dict" onclick="triggerTool('dict', event)" data-tooltip="Glosario Comex">
//                <i class="fas fa-atlas"></i>
//            </div>
//          <div class="toolbox-item btn-tool-clock" onclick="triggerTool('clock', event)" data-tooltip="Hora Mundial">
//                <i class="far fa-clock"></i>
//          </div>

/* Configuración de Herramientas */
const toolsConfig = {
    'ticker':  { id: 'tickerPopup',   func: 'toggleTicker' },
    'calc':    { id: 'calcWindow',    func: 'toggleCalculator' },
    'tracker': { id: 'trackerWindow', func: 'toggleTracker' },
    'inco':    { id: 'incoWindow',    func: 'toggleIncoterms' },
    'cont':    { id: 'contWindow',    func: 'toggleContainers' },
    'conv':    { id: 'convWindow',    func: 'toggleConverter' },
  //  'clock':   { id: 'clockWindow',   func: 'toggleClock' },
  //  'dict':    { id: 'dictWindow',    func: 'toggleDictionary' }
};

// Abrir/Cerrar Menú
window.toggleToolbox = function() {
    const menu = document.getElementById('toolboxMenu');
    if (!menu.classList.contains('active')) {
        closeAllTools(); 
    }
    menu.classList.toggle('active');
}

function closeAllTools() {
    Object.values(toolsConfig).forEach(tool => {
        const el = document.getElementById(tool.id);
        if (el) el.style.display = 'none';
    });
}

// FUNCIÓN MAESTRA CON POSICIONAMIENTO
window.triggerTool = function(key, event) {
    const tool = toolsConfig[key];

    if (tool) {
        // 1. Obtener coordenadas del botón que se hizo clic
        const btn = event.currentTarget; // El div.toolbox-item
        const rect = btn.getBoundingClientRect();
        
        // Calculamos cuánto espacio hay desde el fondo de la pantalla hasta el fondo del botón
        // Esto alinea la parte de abajo de la ventana con la parte de abajo del botón
        const bottomSpace = window.innerHeight - rect.bottom;

        // 2. Cerrar otras ventanas
        Object.values(toolsConfig).forEach(t => {
            if (t.id !== tool.id) {
                const el = document.getElementById(t.id);
                if (el) el.style.display = 'none';
            }
        });

        // 3. Posicionar la ventana ANTES de mostrarla
        // Nota: tickerPopup está dentro de ticker-float-container, los demás son directos
        let windowEl = document.getElementById(tool.id);
        
        // Caso especial para el Ticker (su ID es interno, movemos el contenedor padre)
        if (key === 'ticker') {
             windowEl = document.querySelector('.ticker-float-container');
        }

        if (windowEl) {
            // Aplicamos la posición dinámica
            windowEl.style.bottom = bottomSpace + 'px';
        }

        // 4. Ejecutar la función para mostrar
        if (typeof window[tool.func] === 'function') {
            window[tool.func]();
        }
    }
}

/* CERRAR AL CLIC FUERA */
document.addEventListener('click', function(event) {
    const menu = document.getElementById('toolboxMenu');
    const clickedMenu = menu && menu.contains(event.target);
    
    let clickedWindow = false;
    Object.values(toolsConfig).forEach(tool => {
        const el = document.getElementById(tool.id);
        // Ajuste para el ticker que tiene estructura diferente
        const parent = tool.id === 'tickerPopup' ? document.querySelector('.ticker-float-container') : el;
        
        if (parent && parent.contains(event.target)) {
            clickedWindow = true;
        }
    });

    if (!clickedMenu && !clickedWindow) {
        if (menu) menu.classList.remove('active');
        closeAllTools();
    }
});