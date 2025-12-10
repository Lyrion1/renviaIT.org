// Hero background image loading and error handling
(function() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    const heroImageUrl = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80';
    
    // Preload the hero background image
    const img = new Image();
    
    img.onload = function() {
        // Image loaded successfully
        heroSection.classList.remove('loading');
        heroSection.classList.add('loaded');
    };
    
    img.onerror = function() {
        // Image failed to load, fallback to solid gradient background
        heroSection.classList.remove('loading');
        heroSection.classList.add('error');
        console.warn('Hero background image failed to load, using fallback gradient');
    };
    
    // Start loading the image
    img.src = heroImageUrl;
})();
