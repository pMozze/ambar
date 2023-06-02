const onHashChanged = () => {
  const anchor = document.querySelector(`[data-anchor-name="${location.hash.slice(1)}"]`);
  if (anchor !== null) {
    document.querySelector('.hamburger-menu').classList.remove('hamburger-menu_visible');

    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

document.querySelectorAll('[data-anchor-target]').forEach(button => {
  if (!button.dataset.anchorTarget.length) {
    return;
  }

  button.addEventListener('click', () => {
    location.hash = button.dataset.anchorTarget;
    onHashChanged();
  });
});

window.addEventListener('hashchange', onHashChanged);
document.addEventListener('DOMContentLoaded', onHashChanged);
