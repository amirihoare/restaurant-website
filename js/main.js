// window.addEventListener('load', function() {
// 	setTimeout(() => {
// 	  window.scrollTo(0, 0);
// 	}, 0);
// });

function toggleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger__icon');
    const menuLinks = document.querySelector('.menu-links');
    
    hamburgerIcon.classList.toggle('open');
    menuLinks.classList.toggle('open');
}
