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

    console.log('African Journey page loaded successfully');

    // Logo visibility on scroll
    const logo = document.querySelector('.logo-image');
    if (logo) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                logo.style.opacity = '0';
                logo.style.pointerEvents = 'none';
            } else {
                logo.style.opacity = '1';
                logo.style.pointerEvents = 'auto';
            }
        });
    }

    // Testimonials Slider
    const track = document.querySelector('.testimonials-track');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');

    if (track && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            track.scrollBy({
                left: 390, // card width + gap
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            track.scrollBy({
                left: -390,
                behavior: 'smooth'
            });
        });
    }
});