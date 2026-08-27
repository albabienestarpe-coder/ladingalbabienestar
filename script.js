const header = document.querySelector('.topbar');
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const status = event.currentTarget.querySelector('.form-status');
  status.textContent = '¡Listo! Recibimos tu solicitud. Te contactaremos para confirmar.';
  event.currentTarget.reset();
});
