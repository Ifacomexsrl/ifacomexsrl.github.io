/* js/converter.js */

document.addEventListener("DOMContentLoaded", () => {
    
    // Inyectar HTML
    const widgetHTML = `
        <div class="conv-float-btn" onclick="toggleConverter()"></div>

        <div class="conv-window" id="convWindow">
            <div class="conv-header">
                <h3><i class="fas fa-exchange-alt"></i> Conversor</h3>
                <span class="conv-close" onclick="toggleConverter()">×</span>
            </div>
            
            <div class="conv-tabs">
                <div class="conv-tab active" onclick="setConvMode('weight', this)">Peso</div>
                <div class="conv-tab" onclick="setConvMode('length', this)">Longitud</div>
                <div class="conv-tab" onclick="setConvMode('volume', this)">Volumen</div>
            </div>

            <div class="conv-body">
                <div class="conv-row">
                    <div class="conv-input-group">
                        <label id="lbl-left">Kilos (kg)</label>
                        <input type="number" id="input-left" class="conv-input" placeholder="0" oninput="convert('left')">
                    </div>
                    <div class="conv-icon"><i class="fas fa-arrows-alt-h"></i></div>
                    <div class="conv-input-group">
                        <label id="lbl-right">Libras (lb)</label>
                        <input type="number" id="input-right" class="conv-input" placeholder="0" oninput="convert('right')">
                    </div>
                </div>
                <p style="text-align:center; font-size:0.7rem; color:#64748b;" id="conv-formula">
                    1 kg = 2.20462 lb
                </p>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);
});

// Estado Global
let currentMode = 'weight';

// Configuración de Factores
const modes = {
    weight: { left: 'Kilos (kg)', right: 'Libras (lb)', factor: 2.20462, text: '1 kg = 2.204 lb' },
    length: { left: 'Centímetros (cm)', right: 'Pulgadas (in)', factor: 0.393701, text: '1 cm = 0.39 in' },
    volume: { left: 'Metros Cúb. (m³)', right: 'Pies Cúb. (ft³)', factor: 35.3147, text: '1 m³ = 35.31 ft³' }
};

// Toggle Ventana
window.toggleConverter = function() {
    const win = document.getElementById('convWindow');
    // Cerrar otros
    ['trackerWindow', 'calcWindow', 'tickerPopup', 'incoWindow', 'contWindow'].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.style.display = 'none';
    });

    if (win.style.display === 'flex') {
        win.style.display = 'none';
    } else {
        win.style.display = 'flex';
        // Reset inputs
        document.getElementById('input-left').value = '';
        document.getElementById('input-right').value = '';
    }
}

// Cambiar Pestaña
window.setConvMode = function(mode, tab) {
    currentMode = mode;
    
    // Actualizar Tabs
    document.querySelectorAll('.conv-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Actualizar Etiquetas
    const config = modes[mode];
    document.getElementById('lbl-left').innerText = config.left;
    document.getElementById('lbl-right').innerText = config.right;
    document.getElementById('conv-formula').innerText = config.text;

    // Limpiar inputs
    document.getElementById('input-left').value = '';
    document.getElementById('input-right').value = '';
}

// Lógica de Conversión
window.convert = function(source) {
    const factor = modes[currentMode].factor;
    const leftInput = document.getElementById('input-left');
    const rightInput = document.getElementById('input-right');

    if (source === 'left') {
        const val = parseFloat(leftInput.value);
        if (!isNaN(val)) {
            rightInput.value = (val * factor).toFixed(3);
        } else {
            rightInput.value = '';
        }
    } else {
        const val = parseFloat(rightInput.value);
        if (!isNaN(val)) {
            leftInput.value = (val / factor).toFixed(3);
        } else {
            leftInput.value = '';
        }
    }
}