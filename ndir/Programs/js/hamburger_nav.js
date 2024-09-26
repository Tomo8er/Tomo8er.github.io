document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const hamburgerNav = document.getElementById('hamburger_nav');
    const closeNav = document.getElementById('close-nav');

    menuToggle.addEventListener('click', function() {
        hamburgerNav.classList.toggle('active');
    });

    closeNav.addEventListener('click', function() {
        hamburgerNav.classList.remove('active');
    });
});
