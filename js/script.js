// Add smooth scrolling effect for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover animation for CTA button
document.querySelector('.cta-btn').addEventListener('mouseenter', () => {
    document.querySelector('.cta-btn').classList.add('animated');
});

document.querySelector('.cta-btn').addEventListener('mouseleave', () => {
    document.querySelector('.cta-btn').classList.remove('animated');
});
