/* js/toolbox.js - ACTUALIZADO CON CONVERSOR */

document.addEventListener("DOMContentLoaded", () => {
    
    const toolboxHTML = `
        <div class="toolbox-container" id="toolboxMenu">
            <div class="toolbox-main-btn" onclick="toggleToolbox()">
                <i class="fas fa-th-large"></i>
            </div>

            <div class="toolbox-item btn-tool-conv" onclick="triggerOriginalButton('conv')" data-tooltip="Conversor Unidades">
                <i class="fas fa-exchange-alt"></i>
            </div>

            <div class="toolbox-item btn-tool-cont" onclick="triggerOriginalButton('cont')" data-tooltip="Tipos Contenedor">
                <i class="fas fa-truck-loading"></i>
            </div>

            <div class="toolbox-item btn-tool-inco" onclick="triggerOriginalButton('inco')" data-tooltip="Incoterms 2020">
                <i class="fas fa-book"></i>
            </div>

            <div class="toolbox-item btn-tool-tracker" onclick="triggerOriginalButton('tracker')" data-tooltip="Rastrear Carga">
                <i class="fas fa-search-location"></i>
            </div>

            <div class="toolbox-item btn-tool-calc" onclick="triggerOriginalButton('calc')" data-tooltip="Calc. Volumétrica">
                <i class="fas fa-calculator"></i>
            </div>

            <div class="toolbox-item btn-tool-ticker" onclick="triggerOriginalButton('ticker')" data-tooltip="Mercados">
                <i class="fas fa-chart-line"></i>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', toolboxHTML);
});

window.toggleToolbox = function() {
    document.getElementById('toolboxMenu').classList.toggle('active');
}

window.triggerOriginalButton = function(type) {
    let originalBtn = null;

    if (type === 'tracker') originalBtn = document.querySelector('.tracker-float-btn');
    else if (type === 'calc') originalBtn = document.querySelector('.calc-float-btn');
    else if (type === 'ticker') originalBtn = document.querySelector('.ticker-btn');
    else if (type === 'inco') originalBtn = document.querySelector('.inco-float-btn');
    else if (type === 'cont') originalBtn = document.querySelector('.cont-float-btn');
    else if (type === 'conv') originalBtn = document.querySelector('.conv-float-btn'); // NUEVO

    if (originalBtn) {
        originalBtn.click();
        // toggleToolbox(); // Descomentar si quieres que el menú se cierre al elegir
    }
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('toolboxMenu');
    if (menu && !menu.contains(event.target)) {
        menu.classList.remove('active');
    }
});