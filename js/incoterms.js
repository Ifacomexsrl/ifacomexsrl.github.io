/* js/incoterms.js */

document.addEventListener("DOMContentLoaded", () => {
    
    // Datos de Incoterms 2020
    const incotermsData = [
        { code: "EXW", name: "Ex Works", desc: "El comprador asume casi todos los costos y riesgos desde la fábrica del vendedor." },
        { code: "FCA", name: "Free Carrier", desc: "El vendedor entrega la mercancía al transportista designado por el comprador." },
        { code: "FAS", name: "Free Alongside Ship", desc: "Vendedor entrega al costado del buque. Solo transporte marítimo." },
        { code: "FOB", name: "Free On Board", desc: "Vendedor entrega a bordo del buque. El riesgo pasa al comprador una vez a bordo." },
        { code: "CFR", name: "Cost and Freight", desc: "Vendedor paga costos y flete hasta destino. Riesgo pasa al comprador al embarcar." },
        { code: "CIF", name: "Cost, Insurance & Freight", desc: "Igual que CFR, pero vendedor también paga seguro básico." },
        { code: "CPT", name: "Carriage Paid To", desc: "Vendedor paga transporte hasta destino. Riesgo pasa al entregar al primer transportista." },
        { code: "CIP", name: "Carriage and Insurance Paid", desc: "Igual que CPT, pero con seguro de cobertura amplia a cargo del vendedor." },
        { code: "DAP", name: "Delivered at Place", desc: "Vendedor entrega en lugar de destino convenido, sin descargar." },
        { code: "DPU", name: "Delivered at Place Unloaded", desc: "Vendedor entrega y descarga en destino. Único incoterm donde vendedor descarga." },
        { code: "DDP", name: "Delivered Duty Paid", desc: "Vendedor asume todos los costos, riesgos e impuestos. Máxima obligación vendedor." }
    ];

    // Generar HTML de la lista
    let listHTML = '';
    incotermsData.forEach(item => {
        listHTML += `
            <div class="inco-item">
                <span class="inco-code">${item.code}</span>
                <span class="inco-name">${item.name}</span>
                <p class="inco-desc">${item.desc}</p>
            </div>
        `;
    });

    // Inyectar HTML completo
    const widgetHTML = `
        <div class="inco-float-btn" onclick="toggleIncoterms()"></div>

        <div class="inco-window" id="incoWindow">
            <div class="inco-header">
                <h3><i class="fas fa-book"></i> Incoterms 2020</h3>
                <span class="inco-close" onclick="toggleIncoterms()">×</span>
            </div>
            <div class="inco-list">
                ${listHTML}
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);
});

// Función Toggle
window.toggleIncoterms = function() {
    const win = document.getElementById('incoWindow');
    // Cerrar otros si están abiertos
    if(document.getElementById('trackerWindow')) document.getElementById('trackerWindow').style.display = 'none';
    if(document.getElementById('calcWindow')) document.getElementById('calcWindow').style.display = 'none';
    if(document.getElementById('tickerPopup')) document.getElementById('tickerPopup').style.display = 'none';

    if (win.style.display === 'flex') {
        win.style.display = 'none';
    } else {
        win.style.display = 'flex';
    }
}