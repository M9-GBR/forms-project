let navbar = document.querySelector('nav'),
    currentY = 0,
    lastY = currentY

document.addEventListener('scroll', () => {
    currentY = window.scrollY

    if (Math.abs(currentY - lastY) != currentY - lastY) {
        navbar.classList.remove('navbar-hide')
        navbar.classList.add('navbar-show')
    } else if (Math.abs(currentY - lastY) == currentY - lastY) {
        navbar.classList.remove('navbar-show')
        navbar.classList.add('navbar-hide')
    }

    lastY = currentY
})