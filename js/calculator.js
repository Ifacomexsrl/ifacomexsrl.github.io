/* js/calculator.js */

document.addEventListener("DOMContentLoaded", () => {
    
    // Inyectar HTML (Estructura de Ventana Flotante)
    const calcHTML = `
        <div class="calc-float-btn" onclick="toggleCalculator()" title="Calculadora Flete">
            <i class="fas fa-calculator"></i>
        </div>

        <div class="calc-window" id="calcWindow">
            <div class="calc-header">
                <h3>Volumétrico</h3>
                <span class="calc-close" onclick="toggleCalculator()">×</span>
            </div>

            <div class="calc-grid">
                <div class="calc-input-group">
                    <label>Largo</label>
                    <input type="number" id="c_len" class="calc-input" placeholder="cm">
                </div>
                <div class="calc-input-group">
                    <label>Ancho</label>
                    <input type="number" id="c_wid" class="calc-input" placeholder="cm">
                </div>
                <div class="calc-input-group">
                    <label>Alto</label>
                    <input type="number" id="c_hei" class="calc-input" placeholder="cm">
                </div>
            </div>

            <div class="calc-input-group" style="margin-bottom: 15px;">
                <label>Peso Bruto (kg)</label>
                <input type="number" id="c_wgt" class="calc-input" placeholder="0">
            </div>

            <button class="btn-calculate" onclick="calculateFreight()">Calcular</button>

            <div class="calc-result-box" id="calcResults">
                <div class="result-row">
                    <span>Volumétrico:</span>
                    <span class="result-val" id="res_vol">0.00 kg</span>
                </div>
                <div class="result-row" style="border-top: 1px solid rgba(255,255,255,0.1); padding-top:5px; margin-top:5px;">
                    <span style="color:#fff">COBRABLE:</span>
                    <span class="result-val highlight" id="res_chg">0.00 kg</span>
                </div>
                <small style="display:block; margin-top:8px; color:#64748b; font-size:0.65rem;">
                    Factor IATA 1:6000
                </small>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', calcHTML);
});

// Función para mostrar/ocultar
window.toggleCalculator = function() {
    const win = document.getElementById('calcWindow');
    if (win.style.display === 'flex') {
        win.style.display = 'none';
    } else {
        win.style.display = 'flex';
        // Foco automático al primer input
        setTimeout(() => document.getElementById('c_len').focus(), 100);
    }
}

// Lógica de Cálculo
window.calculateFreight = function() {
    const length = parseFloat(document.getElementById('c_len').value) || 0;
    const width = parseFloat(document.getElementById('c_wid').value) || 0;
    const height = parseFloat(document.getElementById('c_hei').value) || 0;
    const realWeight = parseFloat(document.getElementById('c_wgt').value) || 0;

    if (length === 0 || width === 0 || height === 0) {
        // Pequeña animación de error si faltan datos
        const btn = document.querySelector('.btn-calculate');
        btn.style.backgroundColor = '#ef4444';
        btn.innerText = "Faltan datos";
        setTimeout(() => {
            btn.style.backgroundColor = '#f59e0b';
            btn.innerText = "Calcular";
        }, 1000);
        return;
    }

    // Fórmula Aérea Standard (cm / 6000)
    const volWeight = (length * width * height) / 6000;
    const chargeableWeight = Math.max(volWeight, realWeight);

    document.getElementById('res_vol').innerText = volWeight.toFixed(2) + " kg";
    document.getElementById('res_chg').innerText = chargeableWeight.toFixed(2) + " kg";
    
    document.getElementById('calcResults').style.display = 'block';
}