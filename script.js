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

    console.log('Cyber Genius page loaded successfully');

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
        // Calculate scroll amount based on card width + gap
        const getScrollAmount = () => {
            const card = track.querySelector('.testimonial-card');
            if (card) {
                const style = window.getComputedStyle(track);
                const gap = parseInt(style.gap || style.columnGap || 30);
                return card.offsetWidth + gap;
            }
            return 350; // fallback
        };

        nextBtn.addEventListener('click', () => {
            track.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            track.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });
    }
});