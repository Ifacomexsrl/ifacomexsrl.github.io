/* js/footer.js */

// Generamos el HTML del Footer
const footerHTML = `
<div class="footer-grid">
    <div class="footer-col">
        <h3>IFACOMEX SRL</h3>
        <p data-i18n="footer_desc">Expertos en comercio exterior y logística aduanera internacional. Conectando negocios al mundo.</p>
        <br>
        <p><strong>CUIT:</strong> 30-12345678-9</p>
    </div>
    <div class="footer-col">
        <h3 data-i18n="contact_title">Contacto</h3>
        <p><i class="fas fa-map-marker-alt"></i> PERU 359 PISO 3 OF 307, CABA, Argentina</p>
        <p><i class="fas fa-phone"></i> <a href="tel:+5491165990515" style="color:inherit;">+54 9 11 6599-0515</a></p>
        <p><i class="fas fa-phone"></i> <a href="tel:+5491130260109" style="color:inherit;">+54 9 11 3026-0109</a></p>
        <p><i class="fas fa-envelope"></i> <a href="mailto:ifa@ifacomexsrl.com" style="color:inherit;">ifa@ifacomexsrl.com</a></p>
        <p><i class="fas fa-envelope"></i> ifacomex@gmail.com</p>
        <p><i class="fas fa-envelope"></i> ifasrl2023@gmail.com</p>
        <p><i class="fas fa-envelope"></i> mcarcagno@gmail.com</p>
    </div>
    <div class="footer-col">
        <h3 data-i18n="social_title">Redes Sociales</h3>
        <div class="social-icons">
            <a href="https://wa.me/5491130260109?text=Hola%20IFACOMEX,%20necesito%20info." target="_blank"><i class="fab fa-whatsapp"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
        </div>
    </div>
</div>
<div class="copyright">
    <p>&copy; 2025 IFACOMEX SRL. <span data-i18n="rights">Todos los derechos reservados.</span></p>
</div>
`;

// Insertamos el footer en el contenedor
const footerContainer = document.getElementById('main-footer');
if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
}

/* =========================================
   FUNCIONALIDAD WHATSAPP INTELIGENTE
   ========================================= */
// Este script busca el botón flotante que está en el HTML (index.html, etc.)
// y le agrega el mensaje predeterminado sin necesidad de editar cada HTML.
document.addEventListener("DOMContentLoaded", () => {
    const waFloatBtn = document.querySelector('.float-btn.whatsapp');
    
    if (waFloatBtn) {
        // Mensaje personalizado codificado para URL
        const mensaje = "Hola%20IFACOMEX,%20visité%20su%20web%20y%20quisiera%20asesoramiento%20sobre%20sus%20servicios.";
        const numero = "5491130260109"; // Tu número
        
        // Actualizamos el enlace
        waFloatBtn.href = `https://wa.me/${numero}?text=${mensaje}`;
        
        // Opcional: Agregar un pequeño tooltip o título
        waFloatBtn.title = "Chatear con un asesor";
    }
});