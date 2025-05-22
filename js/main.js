function toggleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger__icon');
    const menuLinks = document.querySelector('.menu-links');
    
    hamburgerIcon.classList.toggle('open');
    menuLinks.classList.toggle('open');
}
