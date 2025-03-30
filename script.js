
document.addEventListener("DOMContentLoaded", () => {
    const heroOverlay = document.getElementById("hero-text-overlay");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroOverlay.style.display = "block";
                observer.disconnect();
            }
        });
    });
    observer.observe(document.querySelector(".hero"));
});
