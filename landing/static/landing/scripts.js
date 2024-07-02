// landing/static/landing/scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        });
    });

    setTimeout(() => {
        document.querySelector('header').classList.add('visible');
    }, 1500); // Delay before showing the navbar
});

// Animation on scroll
document.addEventListener('scroll', function() {
    const servicesSection = document.querySelector('#services');
    const rect = servicesSection.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        servicesSection.classList.add('animate');
    }
});
