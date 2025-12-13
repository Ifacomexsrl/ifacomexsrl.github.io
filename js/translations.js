/* =========================================
   js/translations.js - DICCIONARIO MAESTRO COMPLETO (TODAS LAS PÁGINAS)
   ========================================= */

const translations = {
    es: {
        /* --- 1. MENÚ DE NAVEGACIÓN (HEADER) --- */
        nav_home: "Inicio",
        nav_services: "Servicios ▾",
        nav_export: "Exportación",
        nav_import: "Importación",
        nav_audit: "Auditoría / Asesoramiento",
        nav_we_are: "Somos Imp/Exp",
        nav_clients: "Clientes",
        nav_about: "Nosotros",
        nav_contact: "Contacto",
        company_suffix: "SRL",

        /* --- 2. PÁGINA DE INICIO (INDEX) --- */
        // Slider Principal
        hero_title_1: "Conectando Mercados",
        hero_desc_1: "Gestión integral en importación y exportación con precisión suiza.",
        hero_btn_1: "Solicitar Asesoramiento",
        
        hero_title_2: "Logística Sin Fronteras",
        hero_desc_2: "Tu socio estratégico en el puerto y en el mundo.",
        hero_btn_2: "Nuestros Servicios",
        
        hero_title_3: "Auditoría Aduanera",
        hero_desc_3: "Seguridad jurídica y optimización de costos para tu empresa.",
        hero_btn_3: "Saber más",

        // Sección: Por qué elegirnos
        section_about: "¿Por qué elegirnos?",
        card_exp_title: "Experiencia Global",
        card_exp_desc: "Más de 20 años operando en los principales puertos y aeropuertos del mundo.",
        card_sec_title: "Seguridad",
        card_sec_desc: "Garantizamos el cumplimiento normativo en cada operación aduanera.",
        card_agi_title: "Agilidad",
        card_agi_desc: "Procesos digitalizados para reducir tiempos de espera en despachos.",

        // Sección: Mapa Global (Tech Map)
        map_title: "Alcance Global",
        stat_continents: "CONTINENTES",
        stat_countries: "PAÍSES",
        stat_companies: "EMPRESAS",
        marker_calculating: "Calculando ruta...",

        // Sección: Flujo de Trabajo
        section_process: "Flujo de Trabajo",
        step_1_title: "1. Análisis y Clasificación",
        step_1_desc: "Evaluamos la mercadería y su posición arancelaria correcta.",
        step_2_title: "2. Gestión Documental",
        step_2_desc: "Tramitamos permisos, certificados y licencias necesarias.",
        step_3_title: "3. Despacho y Liberación",
        step_3_desc: "Presentación ante aduana y liberación de la carga.",

        /* --- 3. PÁGINA: SERVICIOS (VISTA GENERAL) --- */
        page_services_title: "Nuestros Servicios",
        page_services_subtitle: "Gestión integral para optimizar tu cadena de suministro.",
        // Descripciones cortas para las tarjetas de navegación
        card_desc_export: "Gestión completa de aduanas, fletes internacionales y documentación.",
        card_desc_import: "Nacionalización de mercaderías y logística desde origen.",
        card_desc_audit: "Revisión de procesos aduaneros y optimización de costos.",
        card_desc_weare: "Operamos como trading company para facilitar tus negocios.",

        /* --- 4. PÁGINA: EXPORTACIÓN --- */
        page_export_tab_title: "Exportación - IFACOMEX SRL",
        page_export_main_title: "Servicios de Exportación",
        page_export_subtitle: "Llevamos tus productos al mundo.",
        
        export_main_title: "Tu carga, nuestra prioridad",
        export_main_desc: "Nos encargamos de todo el circuito de exportación, desde la planta hasta el puerto de destino.",
        
        // Lista de beneficios
        export_li_1: "Permisos de embarque.",
        export_li_2: "Certificados de origen y fitosanitarios.",
        export_li_3: "Coordinación de fletes marítimos, aéreos y terrestres.",
        export_li_4: "Reintegros de exportación.",
        btn_quote_export: "Cotizar Exportación",

        // Tarjetas específicas de Exportación
        export_card_air_title: "Fletes Aéreos",
        export_card_air_desc: "Coordinación rápida para cargas urgentes con las principales aerolíneas.",
        export_card_doc_title: "Documentación",
        export_card_doc_desc: "Emisión de certificados de origen, facturas consulares y permisos de embarque.",
        export_card_cons_title: "Consolidaçión",
        export_card_cons_desc: "Servicios LCL y FCL para optimizar costos logísticos.",
        
        export_process_sub_title: "Proceso de Exportación",
        export_process_sub_desc: "Acompañamos a tu empresa desde la orden de compra hasta la entrega en destino...",

        /* --- 5. PÁGINA: IMPORTACIÓN --- */
        page_import_tab_title: "Importación - IFACOMEX SRL",
        page_import_title: "Soluciones de Importación",
        page_import_subtitle: "Ingreso ágil y seguro de mercaderías.",
        
        import_card_class_title: "Clasificación",
        import_card_class_desc: "Determinación precisa de la posición arancelaria (NCM) para evitar multas.",
        import_card_costs_title: "Costos",
        import_card_costs_desc: "Cálculo estimado de derechos de importación, tasas y gastos portuarios.",
        import_card_disp_title: "Despacho",
        import_card_disp_desc: "Oficialización y liberación de la carga en todas las aduanas del país.",
        
        import_license_title: "Régimen de Licencias",
        import_license_desc: "Gestionamos Licencias Automáticas (LA), No Automáticas (LNA) y autorizaciones ante terceros organismos.",

        /* --- 6. PÁGINA: AUDITORÍA --- */
        page_audit_tab_title: "Auditoría - IFACOMEX SRL",
        page_audit_title: "Auditoría y Asesoramiento",
        page_audit_subtitle: "Seguridad jurídica para tu negocio.",
        
        audit_item_1_title: "Análisis Normativo",
        audit_item_1_desc: "Revisión constante de las nuevas regulaciones del BCRA y AFIP.",
        audit_item_2_title: "Reingeniería de Procesos",
        audit_item_2_desc: "Evaluamos tu circuito actual de comercio exterior para detectar ineficiencias.",
        audit_item_3_title: "Defensa Aduanera",
        audit_item_3_desc: "Asesoramiento jurídico ante sumarios contenciosos o diferencias de valor.",
        btn_req_audit: "Solicitar Auditoría",

        /* --- 7. PÁGINA: SOMOS IMPORTADORES/EXPORTADORES --- */
        page_weare_tab_title: "Somos I/E - IFACOMEX SRL",
        page_weare_title: "Somos Importadores / Exportadores",
        page_weare_subtitle: "Trading Company",
        
        weare_card_1_title: "Búsqueda de Proveedores",
        weare_card_1_desc: "Localizamos proveedores confiables en China, India, Europa y Mercosur.",
        weare_card_2_title: "Gestión de Compras",
        weare_card_2_desc: "Actuamos como tu departamento de compras internacional, negociando precios.",
        weare_card_3_title: "Consolidación",
        weare_card_3_desc: "Agrupamos mercaderías de diferentes proveedores para optimizar el flete.",

        /* --- 8. PÁGINA: CLIENTES --- */
        page_clients_tab_title: "Nuestros Clientes - IFACOMEX SRL",
        page_clients_title: "Clientes que Confían",
        page_clients_subtitle: "Empresas líderes que gestionan su comercio exterior con nosotros.",
        // Frases del carrusel (Llamada a la acción)
        client_cta_1: "Que esperas para que tu empresa este en esta lista",
        client_cta_2: "Suma a tu empresa a la lista",
        client_cta_3: "Dale sumate a este proyecto",

        /* --- 9. PÁGINA: NOSOTROS --- */
        page_about_tab_title: "Nosotros - IFACOMEX SRL",
        page_about_title: "Sobre Nosotros",
        page_about_subtitle: "Historia y valores.",
        
        about_hist_title: "Nuestra Empresa",
        about_hist_desc: "Dada nuestra experiencia individual en el área de Comercio Exterior, tuvimos la oportunidad de desarrollarnos en forma independiente, es por ello que hace más de 20 años decidimos crear IFACOMEX SRL. Tenemos pasión por el trabajo diario y nuestro objetivo es poder brindar asesoramiento, responder con idoneidad,profesionalismo y honestidad cada una de las inquietudes de nuestros clientes. IFACOMEX SRL es una empresa familiar que se basa en la atención personalizada de los clientes, donde cada operación constituye un nuevo desafío, en el que volcamos toda nuestra expertiz para que llegue “a buen puerto “. Somos Despachantes de Aduana y podemos operar en todas las aduanas del país.",
        about_mission_title: "Misión",
        about_mission_desc: "Brindar servicios de excelencia que permitan a nuestros clientes expandir sus fronteras.",
        about_vision_title: "Visión",
        about_vision_desc: "Ser el socio logístico líder en innovación tecnológica y calidad humana.",

        /* --- 10. PÁGINA: CONTACTO Y FOOTER --- */
        page_contact_tab_title: "Contacto - IFACOMEX SRL",
        page_contact_title: "Contáctanos",
        
        // Formulario
        form_name: "Nombre Completo",
        form_company: "Empresa",
        form_email: "Correo Electrónico",
        form_message: "Mensaje",
        form_send: "Enviar Mensaje",
        
        office_title: "Nuestras Oficinas",
        office_desc: "Visítanos para una atención personalizada.",

        // Footer
        footer_desc: "Expertos en comercio exterior y logística aduanera internacional.",
        contact_title: "Contacto",
        social_title: "Redes Sociales",
        rights: "Todos los derechos reservados.",
        
        // Chatbot
        chat_header_title: "Asistente Virtual",
        chat_welcome: "Hola, soy tu asistente virtual. ¿En qué puedo ayudarte hoy?",
        chat_placeholder: "Escribe aquí..."
    },
    
    en: {
        /* --- 1. HEADER --- */
        nav_home: "Home",
        nav_services: "Services ▾",
        nav_export: "Export",
        nav_import: "Import",
        nav_audit: "Audit / Consulting",
        nav_we_are: "We are Imp/Exp",
        nav_clients: "Clients",
        nav_about: "About Us",
        nav_contact: "Contact",
        company_suffix: "LLC",

        /* --- 2. INDEX --- */
        hero_title_1: "Connecting Markets",
        hero_desc_1: "Comprehensive management in import and export with Swiss precision.",
        hero_btn_1: "Get Advice",
        
        hero_title_2: "Logistics Without Borders",
        hero_desc_2: "Your strategic partner at the port and around the world.",
        hero_btn_2: "Our Services",
        
        hero_title_3: "Customs Audit",
        hero_desc_3: "Legal security and cost optimization for your company.",
        hero_btn_3: "Learn More",

        section_about: "Why Choose Us?",
        card_exp_title: "Global Experience",
        card_exp_desc: "Over 20 years operating in major ports and airports worldwide.",
        card_sec_title: "Security",
        card_sec_desc: "We guarantee regulatory compliance in every customs operation.",
        card_agi_title: "Agility",
        card_agi_desc: "Digitized processes to reduce waiting times in dispatch.",

        map_title: "Global Reach",
        stat_continents: "CONTINENTS",
        stat_countries: "COUNTRIES",
        stat_companies: "COMPANIES",
        marker_calculating: "Calculating route...",

        section_process: "Workflow",
        step_1_title: "1. Analysis & Classification",
        step_1_desc: "We evaluate the merchandise and its correct tariff classification.",
        step_2_title: "2. Document Management",
        step_2_desc: "We process necessary permits, certificates, and licenses.",
        step_3_title: "3. Dispatch & Release",
        step_3_desc: "Presentation to customs and release of the cargo.",

        /* --- 3. SERVICES --- */
        page_services_title: "Our Services",
        page_services_subtitle: "Comprehensive management for your supply chain.",
        card_desc_export: "Complete customs management, international freight, and documentation.",
        card_desc_import: "Merchandise nationalization and logistics from origin.",
        card_desc_audit: "Customs process review and cost optimization.",
        card_desc_weare: "We operate as a trading company to facilitate your business.",

        /* --- 4. EXPORT --- */
        page_export_tab_title: "Export - IFACOMEX SRL",
        page_export_main_title: "Export Services",
        page_export_subtitle: "We take your products to the world.",
        
        export_main_title: "Your Cargo, Our Priority",
        export_main_desc: "We handle the entire export circuit, from plant to destination port.",
        export_li_1: "Shipping permits.",
        export_li_2: "Origin and phytosanitary certificates.",
        export_li_3: "Maritime, air, and land freight coordination.",
        export_li_4: "Export refunds.",
        btn_quote_export: "Quote Export",

        export_card_air_title: "Air Freight",
        export_card_air_desc: "Rapid coordination for urgent cargo with major airlines.",
        export_card_doc_title: "Documentation",
        export_card_doc_desc: "Issuance of certificates of origin, consular invoices, and shipping permits.",
        export_card_cons_title: "Consolidation",
        export_card_cons_desc: "LCL and FCL services to optimize logistics costs.",
        
        export_process_sub_title: "Export Process",
        export_process_sub_desc: "We accompany your company from the purchase order to delivery at destination...",

        /* --- 5. IMPORT --- */
        page_import_tab_title: "Import - IFACOMEX SRL",
        page_import_title: "Import Solutions",
        page_import_subtitle: "Agile and secure merchandise entry.",
        
        import_card_class_title: "Classification",
        import_card_class_desc: "Precise tariff classification determination (NCM) to avoid fines.",
        import_card_costs_title: "Costs",
        import_card_costs_desc: "Estimated calculation of import duties, fees, and port charges.",
        import_card_disp_title: "Dispatch",
        import_card_disp_desc: "Officialization and cargo release at all customs in the country.",
        
        import_license_title: "Licensing Regime",
        import_license_desc: "We manage Automatic (LA) and Non-Automatic (LNA) Licenses and third-party authorizations.",

        /* --- 6. AUDIT --- */
        page_audit_tab_title: "Audit - IFACOMEX SRL",
        page_audit_title: "Audit & Consulting",
        page_audit_subtitle: "Legal security for your business.",
        
        audit_item_1_title: "Regulatory Analysis",
        audit_item_1_desc: "Constant review of new regulations from BCRA and AFIP.",
        audit_item_2_title: "Process Reengineering",
        audit_item_2_desc: "We evaluate your current foreign trade circuit to detect inefficiencies.",
        audit_item_3_title: "Customs Defense",
        audit_item_3_desc: "Legal advice on contentious proceedings or value differences.",
        btn_req_audit: "Request Audit",

        /* --- 7. WE ARE --- */
        page_weare_tab_title: "We Are I/E - IFACOMEX SRL",
        page_weare_title: "We Are Importers / Exporters",
        page_weare_subtitle: "Trading Company",
        
        weare_card_1_title: "Supplier Search",
        weare_card_1_desc: "We locate reliable suppliers in China, India, Europe, and Mercosur.",
        weare_card_2_title: "Purchasing Management",
        weare_card_2_desc: "We act as your international purchasing department, negotiating prices.",
        weare_card_3_title: "Consolidation",
        weare_card_3_desc: "We group merchandise from different suppliers to optimize freight costs.",

        /* --- 8. CLIENTS --- */
        page_clients_tab_title: "Our Clients - IFACOMEX SRL",
        page_clients_title: "Clients Who Trust Us",
        page_clients_subtitle: "Leading companies managing their foreign trade with us.",
        client_cta_1: "What are you waiting for to join this list?",
        client_cta_2: "Add your company to the list",
        client_cta_3: "Come on, join this project",

        /* --- 9. ABOUT --- */
        page_about_tab_title: "About Us - IFACOMEX SRL",
        page_about_title: "About Us",
        page_about_subtitle: "History and values.",
        
        about_hist_title: "Our company",
        about_hist_desc: "Given our individual experience in the field of Foreign Trade, we had the opportunity to develop independently, which is why we decided to create IFACOMEX SRL over 20 years ago. We are passionate about our daily work, and our goal is to provide expert advice and respond to each of our clients' concerns with competence, professionalism, and honesty. IFACOMEX SRL is a family business that focuses on personalized customer service, where each transaction represents a new challenge, and we dedicate all our expertise to ensuring its successful completion. We are Customs Brokers and can operate in all customs offices throughout the country.",
        about_mission_title: "Mission",
        about_mission_desc: "Provide excellent services that allow our clients to expand their borders.",
        about_vision_title: "Vision",
        about_vision_desc: "To be the leading logistics partner in technological innovation and human quality.",

        /* --- 10. CONTACT & FOOTER --- */
        page_contact_tab_title: "Contact - IFACOMEX SRL",
        page_contact_title: "Contact Us",
        
        form_name: "Full Name",
        form_company: "Company",
        form_email: "Email Address",
        form_message: "Message",
        form_send: "Send Message",
        
        office_title: "Our Offices",
        office_desc: "Visit us for personalized attention.",

        footer_desc: "Experts in foreign trade and international customs logistics.",
        contact_title: "Contact",
        social_title: "Social Media",
        rights: "All rights reserved.",
        
        chat_header_title: "Virtual Assistant",
        chat_welcome: "Hi, I'm your virtual assistant. How can I help you today?",
        chat_placeholder: "Type here..."
    },
    
    pt: {
        /* --- 1. HEADER --- */
        nav_home: "Início",
        nav_services: "Serviços ▾",
        nav_export: "Exportação",
        nav_import: "Importação",
        nav_audit: "Auditoria / Consultoria",
        nav_we_are: "Somos Imp/Exp",
        nav_clients: "Clientes",
        nav_about: "Nós",
        nav_contact: "Contato",
        company_suffix: "LTDA",

        /* --- 2. INDEX --- */
        hero_title_1: "Conectando Mercados",
        hero_desc_1: "Gestão integral em importação e exportação com precisão suíça.",
        hero_btn_1: "Solicitar Consultoria",
        
        hero_title_2: "Logística Sem Fronteiras",
        hero_desc_2: "Seu parceiro estratégico no porto e no mundo.",
        hero_btn_2: "Nossos Serviços",
        
        hero_title_3: "Auditoria Aduaneira",
        hero_desc_3: "Segurança jurídica e otimização de custos para sua empresa.",
        hero_btn_3: "Saiba Mais",

        section_about: "Por que nos escolher?",
        card_exp_title: "Experiência Global",
        card_exp_desc: "Mais de 20 anos operando nos principais portos e aeroportos do mundo.",
        card_sec_title: "Segurança",
        card_sec_desc: "Garantimos a conformidade regulatória em cada operação aduaneira.",
        card_agi_title: "Agilidade",
        card_agi_desc: "Processos digitalizados para reduzir tempos de espera no despacho.",

        map_title: "Alcance Global",
        stat_continents: "CONTINENTES",
        stat_countries: "PAÍSES",
        stat_companies: "EMPRESAS",
        marker_calculating: "Calculando rota...",

        section_process: "Fluxo de Trabalho",
        step_1_title: "1. Análise e Classificação",
        step_1_desc: "Avaliamos a mercadoria e sua classificação tarifária correta.",
        step_2_title: "2. Gestão Documental",
        step_2_desc: "Tramitamos permissões, certificados e licenças necessárias.",
        step_3_title: "3. Despacho e Liberação",
        step_3_desc: "Apresentação à alfândega e liberação da carga.",

        /* --- 3. SERVICES --- */
        page_services_title: "Nossos Serviços",
        page_services_subtitle: "Gestão integral para otimizar sua cadeia de suprimentos.",
        card_desc_export: "Gestão completa de alfândega, frete internacional e documentação.",
        card_desc_import: "Nacionalização de mercadorias e logística desde a origem.",
        card_desc_audit: "Revisão de processos aduaneiros e otimização de custos.",
        card_desc_weare: "Operamos como trading company para facilitar seus negócios.",

        /* --- 4. EXPORT --- */
        page_export_tab_title: "Exportação - IFACOMEX SRL",
        page_export_main_title: "Serviços de Exportação",
        page_export_subtitle: "Levamos seus produtos para o mundo.",
        
        export_main_title: "Sua Carga, Nossa Prioridade",
        export_main_desc: "Cuidamos de todo o circuito de exportação, da fábrica ao porto de destino.",
        export_li_1: "Permissões de embarque.",
        export_li_2: "Certificados de origem e fitossanitários.",
        export_li_3: "Coordenação de fretes marítimos, aéreos e terrestres.",
        export_li_4: "Reembolsos de exportação.",
        btn_quote_export: "Cotar Exportação",

        export_card_air_title: "Fretes Aéreos",
        export_card_air_desc: "Coordenação rápida para cargas urgentes com as principais companhias aéreas.",
        export_card_doc_title: "Documentação",
        export_card_doc_desc: "Emissão de certificados de origem, faturas consulares e licenças de embarque.",
        export_card_cons_title: "Consolidação",
        export_card_cons_desc: "Serviços LCL e FCL para otimizar custos logísticos.",
        
        export_process_sub_title: "Processo de Exportação",
        export_process_sub_desc: "Acompanhamos sua empresa desde o pedido de compra até a entrega no destino...",

        /* --- 5. IMPORT --- */
        page_import_tab_title: "Importação - IFACOMEX SRL",
        page_import_title: "Soluções de Importação",
        page_import_subtitle: "Entrada ágil e segura de mercadorias.",
        
        import_card_class_title: "Classificação",
        import_card_class_desc: "Determinação precisa da classificação tarifária (NCM) para evitar multas.",
        import_card_costs_title: "Custos",
        import_card_costs_desc: "Cálculo estimado de impostos, taxas e despesas portuárias.",
        import_card_disp_title: "Despacho",
        import_card_disp_desc: "Oficialização e liberação da carga em todas as alfândegas do país.",
        
        import_license_title: "Regime de Licenças",
        import_license_desc: "Gerenciamos Licenças Automáticas (LA), Não Automáticas (LNA) e autorizações de terceiros.",

        /* --- 6. AUDIT --- */
        page_audit_tab_title: "Auditoria - IFACOMEX SRL",
        page_audit_title: "Auditoria e Consultoria",
        page_audit_subtitle: "Segurança jurídica para o seu negócio.",
        
        audit_item_1_title: "Análise Regulatória",
        audit_item_1_desc: "Revisão constante dos novos regulamentos do BCRA e AFIP.",
        audit_item_2_title: "Reengenharia de Processos",
        audit_item_2_desc: "Avaliamos seu circuito atual para detectar ineficiências.",
        audit_item_3_title: "Defesa Aduaneira",
        audit_item_3_desc: "Assessoria jurídica em processos contenciosos ou diferenças de valor.",
        btn_req_audit: "Solicitar Auditoria",

        /* --- 7. WE ARE --- */
        page_weare_tab_title: "Somos I/E - IFACOMEX SRL",
        page_weare_title: "Somos Importadores / Exportadores",
        page_weare_subtitle: "Trading Company",
        
        weare_card_1_title: "Busca de Fornecedores",
        weare_card_1_desc: "Localizamos fornecedores confiáveis na China, Índia, Europa e Mercosul.",
        weare_card_2_title: "Gestão de Compras",
        weare_card_2_desc: "Atuamos como seu departamento de compras internacional, negociando preços.",
        weare_card_3_title: "Consolidação",
        weare_card_3_desc: "Agrupamos mercadorias de diferentes fornecedores para otimizar o frete.",

        /* --- 8. CLIENTS --- */
        page_clients_tab_title: "Nossos Clientes - IFACOMEX SRL",
        page_clients_title: "Clientes que Confiam",
        page_clients_subtitle: "Empresas líderes que gerenciam seu comércio exterior conosco.",
        client_cta_1: "O que você espera para que sua empresa esteja nesta lista",
        client_cta_2: "Adicione sua empresa à lista",
        client_cta_3: "Vamos, junte-se a este projeto",

        /* --- 9. ABOUT --- */
        page_about_tab_title: "Sobre Nós - IFACOMEX SRL",
        page_about_title: "Sobre Nós",
        page_about_subtitle: "História e valores.",
        
        about_hist_title: "A nossa empresa",
        about_hist_desc: "Graças à nossa experiência individual na área do Comércio Externo, tivemos a oportunidade de nos desenvolvermos de forma independente, o que nos levou a criar a IFACOMEX SRL há mais de 20 anos. Somos apaixonados pelo nosso trabalho diário e o nosso objetivo é prestar consultoria especializada e responder a todas as necessidades dos nossos clientes com competência, profissionalismo e honestidade. A IFACOMEX SRL é uma empresa familiar que prioriza o atendimento personalizado ao cliente, onde cada transação representa um novo desafio e dedicamos toda a nossa expertise para garantir o seu sucesso. Somos Despachantes Aduaneiros e podemos operar em todas as alfândegas do país.",
        about_mission_title: "Missão",
        about_mission_desc: "Fornecer serviços de excelência que permitam aos nossos clientes expandir suas fronteiras.",
        about_vision_title: "Visão",
        about_vision_desc: "Ser o parceiro logístico líder em inovação tecnológica e qualidade humana.",

        /* --- 10. CONTACT & FOOTER --- */
        page_contact_tab_title: "Contato - IFACOMEX SRL",
        page_contact_title: "Contate-nos",
        
        form_name: "Nome Completo",
        form_company: "Empresa",
        form_email: "E-mail",
        form_message: "Mensagem",
        form_send: "Enviar Mensagem",
        
        office_title: "Nossos Escritórios",
        office_desc: "Visite-nos para atendimento personalizado.",

        footer_desc: "Especialistas em comércio exterior e logística aduaneira internacional.",
        contact_title: "Contato",
        social_title: "Redes Sociais",
        rights: "Todos os direitos reservados.",
        
        chat_header_title: "Assistente Virtual",
        chat_welcome: "Olá, sou seu assistente virtual. Como posso ajudar hoje?",
        chat_placeholder: "Escreva aqui..."
    }
};

/**
 * Función principal para cambiar el idioma
 * Busca todos los elementos con el atributo 'data-i18n' y reemplaza su contenido.
 */
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        
        if (translations[lang] && translations[lang][key]) {
            // Manejo especial para inputs (placeholders)
            if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.hasAttribute('placeholder')) {
                    el.placeholder = translations[lang][key];
                }
            } else {
                // Para textos normales
                el.innerText = translations[lang][key];
            }
        }
    });
    
    // Guardar preferencia
    localStorage.setItem('selectedLang', lang);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'es';
    const selector = document.getElementById('languageSelector');
    if(selector) {
        selector.value = savedLang;
    }
    changeLanguage(savedLang);
});