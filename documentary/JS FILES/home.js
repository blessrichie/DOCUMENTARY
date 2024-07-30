document.addEventListener('DOMContentLoaded', function() {
    const movieCards = document.querySelectorAll('.movie-card');

    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;
        movieCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);

    // Initial check to see if any cards are already in view
    checkScroll();
});