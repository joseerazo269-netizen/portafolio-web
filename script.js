document.addEventListener('DOMContentLoaded', () => {

    // 1. Menú hamburguesa para pantallas móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Cambiar ícono entre barras y "X"
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Cerrar menú al hacer clic en cualquier enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    // 2. Control del Formulario de Contacto
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Previene recarga por defecto

            const name = document.getElementById('name').value;
            
            // Confirmación al usuario
            alert(`¡Gracias ${name}! Tu mensaje ha sido enviado correctamente.`);
            console.log('Formulario enviado con éxito por:', name);

            // Limpieza del formulario
            contactForm.reset();
        });
    }

});