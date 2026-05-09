document.addEventListener('DOMContentLoaded', function () {
    const animateonscrollelement = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    animateonscrollelement.forEach(element => {
        observer.observe(element);
    });

    const navbar = document.getElementById('main-nav');
    const toggleNavbarBlur = () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    toggleNavbarBlur();
    window.addEventListener('scroll', toggleNavbarBlur);
});