document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offsetTop = targetSection.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
