document.addEventListener('DOMContentLoaded', () => {
    // Fade-in the body content
    document.body.style.opacity = '1';

    // Fade-in the about image
    const aboutImage = document.querySelector('.about-image');
    aboutImage.style.opacity = '1';

    // Slide-in the main content
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = '1';
    mainContent.style.transform = 'translateY(0)';
});