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

// header
const header = document.querySelector('#header') //puxando o header
const navHeight = header.offsetHeight //puxando a altura do header

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll') //add .scroll na classe do header
  } else {
    header.classList.remove('scroll') // remove
  }
})

// Dark mode

  const html = document.querySelector('html') // Pegando html
  const checkbox = document.querySelector('input[name=theme]') // Pegando o button pelo name

  const getStyle = (element, style) => // Pegando css dentro do html
    window
      .getComputedStyle(element)
      .getPropertyValue(style)

  const initialColors = { // Pegando no html a propriedade exata para mudar
    baseColor: getStyle(html, "--base-color"),
    baseColorAlt: getStyle(html, "--base-color-alt"),
    headerColor: getStyle(html, "--header-color"),
    footerColor: getStyle(html, "--footer-color"),
    backgroundColor: getStyle(html, "--backgound-color"),
    tittleColor: getStyle(html, "--tittle-color"),
    tittleColorAlt: getStyle(html, "--tittle-coloralt"),
    bodyColor: getStyle(html, "--body-color"),
    logo: getStyle(html, "--logo"),
    themaIcon: getStyle(html, "--thema-icon"),
    buttonColor: getStyle(html, "--button-color"),
    buttonHover: getStyle(html, "--button-hover"),
    cardsColor: getStyle(html, "--cards-color")
  }

  const darkMode = { // Mudando as propriedades
    baseColor: "#808080", // base color 1
    baseColorAlt: "#FFFFFF", // base color 2
    headerColor: "#696969", // header color
    footerColor: "#A9A9A9", // footer
    backgroundColor: "#000000", // body color
    tittleColor: "#DCDCDC", // tittle
    tittleColorAlt: "#FFFFFF", // tittle alternative
    bodyColor: "#D3D3D3", // font color
    logo: "url('assets/logo-dark.png')",
    themaIcon: "url('assets/moon.svg')",
    buttonColor: "#808080", // buttons color
    buttonHover: "#696969", // button hover
    cardsColor: "#696969" // background cards
  }

  // transformando em letras minusculas (expressao regular)
  const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

  // para essa arrow function funcionar
  const changeColors = (colors) => { // Mudando realmente as cores
    Object.keys(colors).map(key =>
      html.style.setProperty(transformKey(key), colors[key])
    )
  }

  checkbox.addEventListener('change', ({target}) => { // Function para diferenciar o initial do dark
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
  })