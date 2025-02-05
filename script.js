document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const menuLinks = document.querySelectorAll(".menu-link");
    let isScrolling = false;
    let currentSectionIndex = 0;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function handleScroll(event) {
        if (isScrolling || isMobile()) return;
        isScrolling = true;

        const direction = event.deltaY > 0 ? 1 : -1;
        const sectionsArray = Array.from(sections);
        let nextIndex = currentSectionIndex + direction;

        if (nextIndex >= 0 && nextIndex < sections.length) {
            currentSectionIndex = nextIndex;
            sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
        }

        setTimeout(() => { isScrolling = false; }, 700);
    }

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("hidden");
                entry.target.classList.add("fade-in");
                currentSectionIndex = Array.from(sections).indexOf(entry.target);
            }
        });
    }, { threshold: 0.7 });

    sections.forEach(section => {
        observer.observe(section);
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            currentSectionIndex = Array.from(sections).indexOf(targetSection);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    if (!isMobile()) {
        window.addEventListener("wheel", handleScroll);
    }
    
    // Restaurar el scroll normal en móviles sin interferencias
    if (isMobile()) {
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
    }
});

