document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burgerMenu');
    const nav = document.getElementById('mainNav');
    const links = nav.querySelectorAll('a');
    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        nav.classList.toggle('nav-open', isMenuOpen);
        burger.classList.toggle('burger-active', isMenuOpen);
    };

    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMenu(); 
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (isMenuOpen && !nav.contains(e.target) && e.target !== burger) {
            toggleMenu();
        }
    });

    const syncMenuState = () => {
        isMenuOpen = nav.classList.contains('nav-open');
    };
    syncMenuState();
    window.addEventListener('resize', syncMenuState);
});