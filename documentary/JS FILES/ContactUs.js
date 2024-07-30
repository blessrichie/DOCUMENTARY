document.addEventListener('DOMContentLoaded', () => {
    // Fade-in the body content
    document.body.style.opacity = '1';

    // Fade-in the contact image
    const contactImage = document.querySelector('.contact-image');
    contactImage.style.opacity = '1';

    // Slide-in the main content
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = '1';
    mainContent.style.transform = 'translateY(0)';
});