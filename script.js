// Simple interactions for the static page
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Diamond slider indicators (just for visual feedback)
    const diamonds = document.querySelectorAll('.diamond, .diamond-right');
    diamonds.forEach((diamond, index) => {
        diamond.addEventListener('click', () => {
            const parent = diamond.parentElement;
            parent.querySelectorAll('.diamond, .diamond-right').forEach(d => {
                d.classList.remove('active');
            });
            diamond.classList.add('active');
        });
    });

    console.log('CyberGenius page loaded successfully');
});