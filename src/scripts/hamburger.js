document.querySelector('.hamburger-button').addEventListener('click', () => {
  document.querySelector('.hamburger-menu').classList.add('hamburger-menu_visible');
});


document.querySelector('.hamburger-menu__button').addEventListener('click', () => {
  document.querySelector('.hamburger-menu').classList.remove('hamburger-menu_visible');
});
