const sidebar = document.querySelector('.sidebar')
const close = document.querySelector('.close')
const hamburger = document.querySelector('.hamburger-menu')


hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active')
})

close.addEventListener('click', () => {
  sidebar.classList.toggle('active')
})