// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all memory containers
document.addEventListener('DOMContentLoaded', () => {
    const memoryContainers = document.querySelectorAll('.memory-container');
    memoryContainers.forEach(container => {
        observer.observe(container);
    });

    // Smooth scroll for the entire page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add parallax effect to intro section background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const introSection = document.querySelector('.intro-section');
        if (introSection) {
            introSection.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
    });

    // Animate finale section elements on scroll
    const finaleSection = document.querySelector('.finale-section');
    const finaleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const wantedPoster = entry.target.querySelector('.wanted-poster');
                if (wantedPoster) {
                    setTimeout(() => {
                        wantedPoster.style.opacity = '0';
                        wantedPoster.style.transform = 'scale(0.8) rotate(-5deg)';
                        wantedPoster.style.transition = 'all 0.8s ease-out';
                        
                        setTimeout(() => {
                            wantedPoster.style.opacity = '1';
                            wantedPoster.style.transform = 'scale(1) rotate(-1deg)';
                        }, 100);
                    }, 200);
                }
            }
        });
    }, { threshold: 0.3 });

    if (finaleSection) {
        finaleObserver.observe(finaleSection);
    }

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        const sections = document.querySelectorAll('.section');
        const currentSection = Array.from(sections).findIndex(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= -100 && rect.top <= 100;
        });

        if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
            sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === 'ArrowUp' && currentSection > 0) {
            sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Add touch swipe support for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;

        if (Math.abs(diff) > swipeThreshold) {
            const sections = document.querySelectorAll('.section');
            const currentSection = Array.from(sections).findIndex(section => {
                const rect = section.getBoundingClientRect();
                return rect.top >= -100 && rect.top <= 100;
            });

            if (diff > 0 && currentSection < sections.length - 1) {
                // Swipe up - go to next section
                sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
            } else if (diff < 0 && currentSection > 0) {
                // Swipe down - go to previous section
                sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);

    // Easter egg: Click on the alert badge multiple times
    const alertBadge = document.querySelector('.alert-badge');
    let clickCount = 0;
    if (alertBadge) {
        alertBadge.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 5) {
                alertBadge.textContent = '🎉 HAPPY BIRTHDAY ALA! 🎉';
                alertBadge.style.background = '#ff1493';
                setTimeout(() => {
                    alertBadge.textContent = '🚨 URGENT UPDATE 🚨';
                    alertBadge.style.background = '#ff0000';
                    clickCount = 0;
                }, 3000);
            }
        });
    }
});

// Preload images for better performance
window.addEventListener('load', () => {
    const images = [
        'Images/Starting.jpeg',
        'Images/Ending.jpeg',
        'Past_wishes/2023.jpeg',
        'Past_wishes/2024.jpeg',
        'Past_wishes/2025.jpeg'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Made with Bob
