const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            console.log('Element is now visible!');
        }
    });
}, { 
    threshold: 0.2,
    rootMargin: '0px'
});

function toggleMenu() {
    const sideNav = document.getElementById('sideNav');
    sideNav.classList.add('active'); // Show the side nav
}

function closeMenu() {
    const sideNav = document.getElementById('sideNav');
    sideNav.classList.remove('active'); // Hide the side nav
}


document.addEventListener('DOMContentLoaded', () => {

    // Observe About section elements
    const aboutImage = document.querySelector('.about-image');
    const aboutContent = document.querySelector('.about-content');
    
    // Observe all service cards
    const serviceCards = document.querySelectorAll('#services .services-item');
    
    if (aboutImage) observer.observe(aboutImage);
    if (aboutContent) observer.observe(aboutContent);
    
    // Add observer to each service card
    serviceCards.forEach((card, index) => {
        observer.observe(card);
        // Set a staggered delay for each card
        card.style.transitionDelay = `${index * 0.1}s`; // Staggered delay based on index
    });

    // Quick hover effect for service cards
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.1s ease';  // Quick transition
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.transition = 'transform 0.1s ease';  // Quick transition
        });
    });

    // Add scroll spy for navbar
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.nav-items a');

    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100; // Offset for better trigger position

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
    // Update active link on page load
    updateActiveLink();

    // Select all package cards
    const packageCards = document.querySelectorAll('#packages .services-item');
    
    // Observe each package card
    packageCards.forEach((card, index) => {
        observer.observe(card);
        // Set a staggered delay for each card
        card.style.transitionDelay = `${index * 0.1}s`; // Staggered delay based on index
    });

    // Quick hover effect for package cards
    packageCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.1s ease';  // Quick transition
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.transition = 'transform 0.1s ease';  // Quick transition
        });
    });
}); 