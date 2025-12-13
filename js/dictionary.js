/* js/dictionary.js */

document.addEventListener("DOMContentLoaded", () => {
    
    // Base de datos de términos
    const terms = [
        { t: "ATA", d: "Admisión Temporal para Perfeccionamiento Activo." },
        { t: "AWB", d: "Air Waybill. Guía aérea, documento de transporte aéreo." },
        { t: "BL", d: "Bill of Lading. Conocimiento de embarque marítimo." },
        { t: "CFR", d: "Cost and Freight. Costo y Flete (Incoterm)." },
        { t: "CIF", d: "Cost, Insurance and Freight. Costo, Seguro y Flete." },
        { t: "DJAI", d: "Declaración Jurada Anticipada de Importación (Histórico)." },
        { t: "DUMPING", d: "Venta a precios inferiores al costo para ganar mercado." },
        { t: "ETA", d: "Estimated Time of Arrival. Fecha estimada de llegada." },
        { t: "ETD", d: "Estimated Time of Departure. Fecha estimada de salida." },
        { t: "FCL", d: "Full Container Load. Contenedor completo." },
        { t: "FOB", d: "Free On Board. Libre a bordo (Incoterm)." },
        { t: "LCL", d: "Less than Container Load. Carga consolidada (suelta)." },
        { t: "NCM", d: "Nomenclatura Común del Mercosur. Código numérico de mercadería." },
        { t: "PACKING LIST", d: "Lista de empaque. Detalle del contenido de la carga." },
        { t: "SIM", d: "Sistema Informático Malvina (Aduana Argentina)." },
        { t: "SIRA", d: "Sistema de Importaciones de la República Argentina." },
        { t: "TEU", d: "Twenty-foot Equivalent Unit. Unidad de medida de contenedores." },
        { t: "ZFE", d: "Zona Franca Especial." }
    ];

    // Inyectar HTML
    const widgetHTML = `
        <div class="dict-float-btn" onclick="toggleDictionary()"></div>

        <div class="dict-window" id="dictWindow">
            <div class="dict-header">
                <h3><i class="fas fa-atlas"></i> Glosario Comex</h3>
                <span class="dict-close" onclick="toggleDictionary()">×</span>
            </div>
            
            <div class="dict-search-box">
                <input type="text" id="dictSearch" class="dict-input" placeholder="Buscar sigla (ej: FOB)..." onkeyup="filterDict()">
            </div>

            <div class="dict-list" id="dictList">
                </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);
    renderList(terms);
});

// Renderizar lista
function renderList(list) {
    const container = document.getElementById('dictList');
    container.innerHTML = "";
    list.forEach(item => {
        container.innerHTML += `
            <div class="dict-item">
                <span class="dict-term">${item.t}</span>
                <p class="dict-def">${item.d}</p>
            </div>
        `;
    });
}

// Filtrar
window.filterDict = function() {
    const input = document.getElementById('dictSearch').value.toUpperCase();
    const items = document.querySelectorAll('.dict-item');
    
    items.forEach(item => {
        const term = item.querySelector('.dict-term').innerText;
        if (term.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Toggle
window.toggleDictionary = function() {
    const win = document.getElementById('dictWindow');
    // Cerrar otros
    ['trackerWindow', 'calcWindow', 'tickerPopup', 'incoWindow', 'contWindow', 'convWindow', 'clockWindow'].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.style.display = 'none';
    });

    if (win.style.display === 'flex') {
        win.style.display = 'none';
    } else {
        win.style.display = 'flex';
        setTimeout(() => document.getElementById('dictSearch').focus(), 100);
    }
}