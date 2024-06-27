function includeNav() {
  fetch('https://hayden-flintoft.github.io/templates/nav.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('nav').innerHTML = data
    })
}
