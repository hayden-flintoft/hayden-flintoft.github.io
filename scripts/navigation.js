function includeRootNav() {
  fetch('templates/nav-root.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('nav').innerHTML = data
      highlightActiveLink()
    })
    .catch((error) => console.error('Error loading the navigation:', error))
}

function includeChildNav() {
  fetch('../templates/nav.html') // Adjust the path to fetch from child pages
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('nav').innerHTML = data
      highlightActiveLink()
    })
    .catch((error) => console.error('Error loading the navigation:', error))
}

function highlightActiveLink() {
  const links = document.querySelectorAll('#nav a')
  const currentPath = window.location.pathname.replace(/\/$/, '') // Remove trailing slash for uniformity

  links.forEach((link) => {
    const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '') // Normalize the path
    // Check if the current pathname ends with the href attribute of the link
    if (currentPath === linkPath || (currentPath === '' && linkPath === '/index.html')) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}
