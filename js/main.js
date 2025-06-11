// reload scroll behavior
window.addEventListener('load', function () {
  const isReload =
    performance.navigation.type === performance.navigation.TYPE_RELOAD ||
    performance.getEntriesByType("navigation")[0]?.type === "reload"

  const delay = isReload ? 100 : 0

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, delay)
})

function toggleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger__icon')
    const menuLinks = document.querySelector('.menu-links')
    
    hamburgerIcon.classList.toggle('open')
    menuLinks.classList.toggle('open')
}
