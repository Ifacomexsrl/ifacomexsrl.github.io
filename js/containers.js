/* js/containers.js */

document.addEventListener("DOMContentLoaded", () => {
    
    // Base de datos de contenedores
    const containersData = [
        { 
            name: "20' Standard (Dry)", 
            icon: "fa-cube",
            dims: "5.90 x 2.35 x 2.39 m",
            vol: "33.2 m³",
            max_load: "28,200 kg",
            desc: "Uso general para carga seca."
        },
        { 
            name: "40' Standard (Dry)", 
            icon: "fa-cubes",
            dims: "12.03 x 2.35 x 2.39 m",
            vol: "67.7 m³",
            max_load: "26,600 kg",
            desc: "Para cargas voluminosas pero ligeras."
        },
        { 
            name: "40' High Cube (HC)", 
            icon: "fa-building",
            dims: "12.03 x 2.35 x 2.69 m",
            vol: "76.3 m³",
            max_load: "26,460 kg",
            desc: "Mayor altura (+30cm). Ideal pallets altos."
        },
        { 
            name: "20' Open Top", 
            icon: "fa-box-open",
            dims: "5.89 x 2.34 x 2.28 m",
            vol: "32.0 m³",
            max_load: "28,200 kg",
            desc: "Techo abierto para carga superior (grúa)."
        },
        { 
            name: "40' Reefer (Refrigerado)", 
            icon: "fa-snowflake",
            dims: "11.58 x 2.29 x 2.54 m",
            vol: "59.3 m³",
            max_load: "29,000 kg",
            desc: "Control de temperatura constante."
        }
    ];

    // Generar HTML
    let listHTML = '';
    containersData.forEach(item => {
        listHTML += `
            <div class="cont-card">
                <div class="cont-title">
                    <i class="fas ${item.icon}"></i> ${item.name}
                </div>
                <div class="cont-data">
                    <div class="data-row">
                        <span class="data-label">Medidas Int.</span>
                        <span class="data-val">${item.dims}</span>
                    </div>
                    <div class="data-row">
                        <span class="data-label">Capacidad</span>
                        <span class="data-val">${item.vol}</span>
                    </div>
                    <div class="data-row">
                        <span class="data-label">Carga Máx.</span>
                        <span class="data-val">${item.max_load}</span>
                    </div>
                </div>
            </div>
        `;
    });

    // Inyectar HTML
    const widgetHTML = `
        <div class="cont-float-btn" onclick="toggleContainers()"></div>

        <div class="cont-window" id="contWindow">
            <div class="cont-header">
                <h3><i class="fas fa-shipping-fast"></i> Contenedores</h3>
                <span class="cont-close" onclick="toggleContainers()">×</span>
            </div>
            <div class="cont-list">
                ${listHTML}
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);
});

// Función Toggle
window.toggleContainers = function() {
    const win = document.getElementById('contWindow');
    // Cerrar otros
    if(document.getElementById('trackerWindow')) document.getElementById('trackerWindow').style.display = 'none';
    if(document.getElementById('calcWindow')) document.getElementById('calcWindow').style.display = 'none';
    if(document.getElementById('tickerPopup')) document.getElementById('tickerPopup').style.display = 'none';
    if(document.getElementById('incoWindow')) document.getElementById('incoWindow').style.display = 'none';

    if (win.style.display === 'flex') {
        win.style.display = 'none';
    } else {
        win.style.display = 'flex';
    }
}