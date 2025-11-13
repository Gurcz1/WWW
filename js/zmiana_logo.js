document.addEventListener('DOMContentLoaded', function() {
    
    const logo = document.querySelector('.logo');

    if (logo) {
        
        const originalLogoSrc = logo.src;
        
        const hoverLogoSrc = 'img/logo-hover.png'; 

        logo.addEventListener('mouseover', function() {
            logo.src = hoverLogoSrc;
        });

        logo.addEventListener('mouseout', function() {
            logo.src = originalLogoSrc;
        });
    }
});