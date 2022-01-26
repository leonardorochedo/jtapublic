// scroll reveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #products .cards, #products .text,
  #contact .whats, #contact .text,
  #footer .image, #footer .text`,
  { interval: 100 }
)

//header
const header = document.querySelector('#header') //puxando o header
const navHeight = header.offsetHeight //puxando a altura do header

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll') //add .scroll na classe do header
  } else {
    header.classList.remove('scroll') // remove
  }
})
