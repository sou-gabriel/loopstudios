const body = document.body
const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.menu__mobile i')

menuIcon.addEventListener('click', () => {
  const menuIconClass = menuIcon.getAttribute('class')

  menu.classList.toggle('menu--active')

  body.classList.toggle('body--overflow')

  if (menuIconClass === 'fas fa-bars') {
    menuIcon.setAttribute('class', 'fas fa-times')
  } else {
    menuIcon.setAttribute('class', 'fas fa-bars')
  }  
})