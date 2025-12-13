/* =====================================================
   js/chatbot.js - CEREBRO INTELIGENTE (LOGICA DE REGLAS)
   ===================================================== */

/**
 * BASE DE CONOCIMIENTO (INTENCIONES)
 * Agrupa palabras clave (keywords) y respuestas.
 * AHORA INCLUYE: 'options' para botones de respuesta rápida.
 */
const knowledgeBase = [
    // 1. SALUDOS Y CORTESÍA
    {
        id: "saludo",
        keywords: ["hola", "buenos dias", "buenas tardes", "buenas noches", "hey", "que tal", "inicio"],
        response: "¡Hola! Soy el asistente virtual de IFACOMEX. Soy experto en comercio exterior. ¿En qué puedo asesorarte hoy?",
        options: ["Importación", "Exportación", "Auditoría", "Contacto"]
    },
    {
        id: "gracias",
        keywords: ["gracias", "muchas gracias", "ok gracias", "agradecido"],
        response: "¡De nada! Estamos para ayudarte a potenciar tu negocio internacional.",
        options: ["Ver Servicios", "Cerrar Chat"]
    },
    {
        id: "adios",
        keywords: ["chau", "adios", "hasta luego", "nos vemos", "cerrar"],
        response: "¡Hasta luego! No dudes en volver si tienes más consultas sobre tus operaciones."
    },

    // 2. INFORMACIÓN CORPORATIVA
    {
        id: "servicios_general",
        keywords: ["que hacen", "servicios", "dedican", "ofrecen", "productos"],
        response: "Brindamos gestión integral: <b>Exportación, Importación, Auditoría de procesos y Trading</b>. Nos especializamos en simplificar la burocracia aduanera.",
        options: ["Ver Importación", "Ver Exportación", "Auditoría"]
    },
    {
        id: "horario",
        keywords: ["horario", "hora", "abierto", "atencion", "cuando atienden"],
        response: "Nuestro equipo operativo atiende de <b>Lunes a Viernes de 9:00 a 18:00 hs</b>."
    },
    {
        id: "contacto",
        keywords: ["telefono", "mail", "email", "celular", "whatsapp", "llamar", "contactar", "contacto"],
        response: "Puedes escribirnos a <b>ifa@ifacomexsrl.com</b> o llamarnos al <b>+54 9 11 6599-0515</b>. También tienes el botón de WhatsApp aquí mismo.",
        options: ["Abrir WhatsApp", "Volver al Inicio"]
    },

    // 3. EXPORTACIÓN
    {
        id: "exportacion",
        keywords: ["exportar", "exportacion", "vender afuera", "salida mercaderia", "permiso embarque"],
        response: "En <a href='exportacion.html'>Exportación</a> gestionamos desde el permiso de embarque hasta el reintegro. Tramitamos certificados de origen, fitosanitarios y coordinamos fletes.",
        options: ["Cotizar Flete", "Documentación", "Ver más info"]
    },
    
    // 4. IMPORTACIÓN Y GESTIÓN
    {
        id: "importacion",
        keywords: ["importar", "importacion", "traer mercaderia", "comprar afuera", "ingreso mercaderia"],
        response: "Para <a href='importacion.html'>Importación</a>, realizamos la clasificación arancelaria, gestión de SIMI/SIRA, despachos y coordinación logística hasta tu depósito.",
        options: ["Sobre Licencias", "Ver Aduanas", "Volver"]
    },
    {
        id: "licencias",
        keywords: ["sira", "simi", "licencia automatica", "no automatica", "lna", "la", "licencias"],
        response: "Gestionamos <b>Licencias Automáticas y No Automáticas</b>, así como las declaraciones SIRA/SEDI necesarias para aprobar tu importación.",
        options: ["Importación", "Contacto"]
    },

    // 5. AUDITORÍA Y PROCESOS
    {
        id: "auditoria",
        keywords: ["auditoria", "asesoramiento", "consultoria", "mejora procesos", "reingenieria"],
        response: "Nuestro servicio de <a href='auditoria-asesoramiento.html'>Auditoría</a> revisa tus procesos actuales para detectar ineficiencias, reducir costos y asegurar cumplimiento normativo.",
        options: ["Solicitar Auditoría", "Volver"]
    },

    // 6. LOGÍSTICA
    {
        id: "fletes",
        keywords: ["flete", "barco", "avion", "camion", "transporte", "logistica", "cotizar"],
        response: "Coordinamos fletes internacionales (Aéreos, Marítimos, Terrestres) y consolidación de cargas (LCL/FCL) buscando siempre la mejor tarifa.",
        options: ["Marítimo", "Aéreo", "Contacto"]
    }
];

/**
 * LISTA NEGRA (OFF-TOPIC)
 */
const forbiddenTopics = [
    "futbol", "messi", "mundial", "partido", "gol",
    "politica", "presidente", "elecciones", "votar",
    "receta", "cocina", "comida", "restaurante", "pizza",
    "clima", "lluvia", "sol", "tiempo",
    "chiste", "broma", "novia", "amor", "cine", "pelicula"
];

// --- CEREBRO (LÓGICA DE PROCESAMIENTO) ---

function getBotResponse(input) {
    let text = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    for (let word of forbiddenTopics) {
        if (text.includes(word)) {
            return { 
                text: "Lo siento, mi función es asesorarte exclusivamente sobre <b>Comercio Exterior y servicios de IFACOMEX</b>. No puedo hablar de otros temas.",
                options: ["Importación", "Exportación", "Contacto"]
            };
        }
    }

    let bestMatch = null;
    let highestScore = 0;

    for (let item of knowledgeBase) {
        let score = 0;
        for (let key of item.keywords) {
            if (text.includes(key)) score++;
        }
        if (score > highestScore) {
            highestScore = score;
            bestMatch = item;
        }
    }

    if (bestMatch && highestScore > 0) {
        return { text: bestMatch.response, options: bestMatch.options };
    } else {
        return { 
            text: "No estoy seguro de haber entendido. Soy experto en <b>Importación, Exportación y Auditoría</b>. ¿Podrías reformular tu consulta?",
            options: ["Ver Servicios", "Hablar con Humano"]
        };
    }
}

// --- INTERFAZ DE USUARIO (UI) ---

function toggleChat() {
    const chatWindow = document.getElementById('chatbot-window');
    const isVisible = chatWindow.style.display === 'flex';
    chatWindow.style.display = isVisible ? 'none' : 'flex';
    if (!isVisible) setTimeout(() => document.getElementById('chat-input').focus(), 100);
}

function handleChat(e) {
    if (e.key === 'Enter') sendMessage();
}

// Función para manejar clics en las opciones rápidas
function handleOptionClick(optionText) {
    const input = document.getElementById('chat-input');
    input.value = optionText;
    sendMessage();
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    const chatBody = document.getElementById('chat-body');

    if (msg === "") return;

    // 1. Mensaje usuario
    chatBody.innerHTML += `<div class="message user">${msg}</div>`;
    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // 2. Typing effect
    const loadingId = 'typing-' + Date.now();
    const typingHTML = `<div class="message bot typing" id="${loadingId}"><span>.</span><span>.</span><span>.</span></div>`;
    chatBody.innerHTML += typingHTML;
    chatBody.scrollTop = chatBody.scrollHeight;

    // 3. Respuesta Bot
    setTimeout(() => {
        const responseObj = getBotResponse(msg);
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) loadingElement.remove();
        
        // Agregar texto
        let botHtml = `<div class="message bot">${responseObj.text}`;
        
        // Agregar botones si existen
        if (responseObj.options && responseObj.options.length > 0) {
            botHtml += `<div class="chat-options">`;
            responseObj.options.forEach(opt => {
                botHtml += `<button class="chat-option-btn" onclick="handleOptionClick('${opt}')">${opt}</button>`;
            });
            botHtml += `</div>`;
        }
        
        botHtml += `</div>`;
        
        chatBody.innerHTML += botHtml;
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 600); 
}