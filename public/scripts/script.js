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
});

(() => {
    let links = ['facebook.svg', 'x-twitter.svg', 'instagram.svg', 'youtube.svg'],
        sLinks = document.getElementById('social-links')

    links.forEach(async (url) => {
        let svg = await fetch(`./public/svgs/${url}`)
        svg = await svg.text()

        let a = document.createElement('a')
        a.innerHTML += svg
        a.href = ''
        sLinks.appendChild(a)
    })
})()