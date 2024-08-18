window.addEventListener('scroll', function() {
    let scrolledHeight = window.pageYOffset;
    document.querySelectorAll('.parallax').forEach(function(section) {
        let speed = section.getAttribute('data-speed') || 0.5;
        section.style.backgroundPositionY = -(scrolledHeight * speed) + 'px';
    });
});
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50) {  // Adjust -50 to trigger the effect earlier or later
            element.classList.add('visible');
        }
    });
});
