document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const sections = document.querySelectorAll("section");
    const scrollToTopBtn = document.createElement("button");
    
    // Crear botón para volver arriba
    scrollToTopBtn.innerText = "⬆";
    scrollToTopBtn.classList.add("scroll-to-top");
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    });

    // Efecto de cambio de color en la barra de navegación al hacer scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // Animaciones al hacer scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Formulario de contacto - Validación básica con animación
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitMessage = document.createElement("p");
        submitMessage.innerText = "Mensaje enviado. Me pondré en contacto contigo pronto.";
        submitMessage.classList.add("submit-message");
        form.appendChild(submitMessage);
        setTimeout(() => submitMessage.remove(), 3000);
        form.reset();
    });
});
