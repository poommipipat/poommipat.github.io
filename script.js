// Mobile navigation
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const open = navMenu.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(open));
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Scroll reveal
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealItems.forEach(item => observer.observe(item));
} else {
    revealItems.forEach(item => item.classList.add('visible'));
}

// Highlight current navigation item
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const active = document.querySelector(`.nav-menu a[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

    sections.forEach(section => sectionObserver.observe(section));
}
