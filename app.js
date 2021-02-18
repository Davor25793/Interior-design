const sidebar = document.querySelector('.sidebar')
const close = document.querySelector('.close')
const hamburger = document.querySelector('.hamburger-menu')


hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active')
  
})

close.addEventListener('click', () => {
  sidebar.classList.toggle('active')
})

//Smooth scroll
document.querySelectorAll('.nav-link').forEach(function(el){
  el.addEventListener('click', function(e){
    e.preventDefault()
    const id = this.getAttribute('href')
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    })
  })
})