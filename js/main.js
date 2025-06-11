// reload scroll behavior
window.addEventListener('load', function () {
  const navigationEntries = performance.getEntriesByType('navigation')
  const navigationType = navigationEntries.length > 0 ? navigationEntries[0].type : null

  // check if this is a reload based on modern API
  const isReload = navigationType === 'reload'

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
