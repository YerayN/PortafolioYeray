document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".mobile-menu a");

    menuLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});
