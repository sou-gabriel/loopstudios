const menuIcon = document.querySelector('.nav__menu-mobile i')

menuIcon.addEventListener('click', () => {
  const menuIconClass = menuIcon.getAttribute('class')

  if (menuIconClass === 'fas fa-bars') {
    menuIcon.setAttribute('class', 'fas fa-times')
  } else {
    menuIcon.setAttribute('class', 'fas fa-bars')
  }  
})