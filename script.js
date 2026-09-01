const header = document.querySelector('.topbar');
const menu = document.querySelector('.menu');

const deviceQuery = {
  tablet: window.matchMedia('(max-width: 900px)'),
  movil: window.matchMedia('(max-width: 600px)'),
};

const localImages = new Map([
  ['0:1:desktop', 'assets/web/logo/alba-logo.svg'],
  ['0:1:tablet', 'assets/web/logo/alba-logo.svg'],
  ['0:1:movil', 'assets/web/logo/alba-logo.svg'],
  ['1:1:desktop', 'assets/web/images/inicio-desktop.jpg'],
  ['1:1:tablet', 'assets/web/images/inicio-tablet.jpg'],
  ['1:1:movil', 'assets/web/images/inicio-movil.jpg'],
  ['2:1:desktop', 'assets/web/images/pausa-desktop.jpg'],
  ['2:1:tablet', 'assets/web/images/pausa-tablet.jpg'],
  ['2:1:movil', 'assets/web/images/pausa-movil.jpg'],
  ['3:1:desktop', 'assets/web/images/alba-desktop.jpg'],
  ['3:1:tablet', 'assets/web/images/alba-tablet.jpg'],
  ['3:1:movil', 'assets/web/images/alba-movil.jpg'],
  ['4:1:desktop', 'assets/web/images/relax-desktop.jpg'],
  ['4:1:tablet', 'assets/web/images/relax-tablet.jpg'],
  ['4:1:movil', 'assets/web/images/relax-movil.jpg'],
  ['4:2:desktop', 'assets/web/images/recargar-desktop.jpg'],
  ['4:2:tablet', 'assets/web/images/recargar-tablet.jpg'],
  ['4:2:movil', 'assets/web/images/recargar-movil.jpg'],
  ['4:3:desktop', 'assets/web/images/desconectar-desktop.jpg'],
  ['4:3:tablet', 'assets/web/images/desconectar-tablet.jpg'],
  ['4:3:movil', 'assets/web/images/desconectar-movil.jpg'],
  ['6:1:desktop', 'assets/web/images/espacio-principal-desktop.jpg'],
  ['6:1:tablet', 'assets/web/images/espacio-principal-tablet.jpg'],
  ['6:1:movil', 'assets/web/images/espacio-principal-movil.jpg'],
  ['6:2:desktop', 'assets/web/images/detalle-superior-desktop.jpg'],
  ['6:2:tablet', 'assets/web/images/detalle-superior-tablet.jpg'],
  ['6:2:movil', 'assets/web/images/detalle-superior-movil.jpg'],
  ['6:3:desktop', 'assets/web/images/detalle-inferior-desktop.jpg'],
  ['6:3:tablet', 'assets/web/images/detalle-inferior-tablet.jpg'],
  ['6:3:movil', 'assets/web/images/detalle-inferior-movil.jpg'],
  ['8:1:desktop', 'assets/web/images/ubicacion-desktop.jpg'],
  ['8:1:tablet', 'assets/web/images/ubicacion-desktop.jpg'],
  ['8:1:movil', 'assets/web/images/ubicacion-desktop.jpg'],
  ['12:1:desktop', 'assets/web/images/journal-1-desktop.jpg'],
  ['12:1:tablet', 'assets/web/images/journal-1-tablet.jpg'],
  ['12:1:movil', 'assets/web/images/journal-1-movil.jpg'],
  ['12:2:desktop', 'assets/web/images/journal-2-desktop.jpg'],
  ['12:2:tablet', 'assets/web/images/journal-2-tablet.jpg'],
  ['12:2:movil', 'assets/web/images/journal-2-movil.jpg'],
  ['12:3:desktop', 'assets/web/images/journal-3-desktop.jpg'],
  ['12:3:tablet', 'assets/web/images/journal-3-tablet.jpg'],
  ['12:3:movil', 'assets/web/images/journal-3-movil.jpg'],
  ['12:4:desktop', 'assets/web/images/journal-4-desktop.jpg'],
  ['12:4:tablet', 'assets/web/images/journal-4-tablet.jpg'],
  ['12:4:movil', 'assets/web/images/journal-4-movil.jpg'],
  ['13:1:desktop', 'assets/web/images/instagram-desktop.jpg'],
  ['13:1:tablet', 'assets/web/images/instagram-tablet.jpg'],
  ['13:1:movil', 'assets/web/images/instagram-movil.jpg'],
  ['13:2:desktop', 'assets/web/images/tiktok-desktop.jpg'],
  ['13:2:tablet', 'assets/web/images/tiktok-tablet.jpg'],
  ['13:2:movil', 'assets/web/images/tiktok-movil.jpg'],
]);

const imageTargets = [
  { section: 0, number: 1, selector: '.brand-logo', kind: 'img' },
  { section: 1, number: 1, selector: '#inicio picture', kind: 'picture' },
  { section: 2, number: 1, selector: '.pause picture', kind: 'picture' },
  { section: 3, number: 1, selector: '#alba picture', kind: 'picture' },
  { section: 4, number: 1, css: { desktop: '--img-relax-desktop', tablet: '--img-relax-tablet', movil: '--img-relax-movil' }, kind: 'css' },
  { section: 4, number: 2, css: { desktop: '--img-recargar-desktop', tablet: '--img-recargar-tablet', movil: '--img-recargar-movil' }, kind: 'css' },
  { section: 4, number: 3, css: { desktop: '--img-desconectar-desktop', tablet: '--img-desconectar-tablet', movil: '--img-desconectar-movil' }, kind: 'css' },
  { section: 6, number: 1, css: { desktop: '--img-espacio-principal-desktop', tablet: '--img-espacio-principal-tablet', movil: '--img-espacio-principal-movil' }, kind: 'css' },
  { section: 6, number: 2, css: { desktop: '--img-detalle-superior-desktop', tablet: '--img-detalle-superior-tablet', movil: '--img-detalle-superior-movil' }, kind: 'css' },
  { section: 6, number: 3, css: { desktop: '--img-detalle-inferior-desktop', tablet: '--img-detalle-inferior-tablet', movil: '--img-detalle-inferior-movil' }, kind: 'css' },
  { section: 8, number: 1, css: { desktop: '--img-ubicacion', tablet: '--img-ubicacion', movil: '--img-ubicacion' }, kind: 'css' },
  { section: 12, number: 1, css: { desktop: '--img-journal-1-desktop', tablet: '--img-journal-1-tablet', movil: '--img-journal-1-movil' }, kind: 'css' },
  { section: 12, number: 2, css: { desktop: '--img-journal-2-desktop', tablet: '--img-journal-2-tablet', movil: '--img-journal-2-movil' }, kind: 'css' },
  { section: 12, number: 3, css: { desktop: '--img-journal-3-desktop', tablet: '--img-journal-3-tablet', movil: '--img-journal-3-movil' }, kind: 'css' },
  { section: 12, number: 4, css: { desktop: '--img-journal-4-desktop', tablet: '--img-journal-4-tablet', movil: '--img-journal-4-movil' }, kind: 'css' },
  { section: 13, number: 1, selector: '.instagram-phone img', kind: 'img' },
  { section: 13, number: 2, selector: '.tiktok-phone img', kind: 'img' },
];

const getCurrentDevice = () => {
  if (deviceQuery.movil.matches) return 'movil';
  if (deviceQuery.tablet.matches) return 'tablet';
  return 'desktop';
};

const getLocalImage = (section, number, device) => {
  const devices = [device, 'desktop', 'tablet', 'movil'].filter((value, index, list) => (
    value && list.indexOf(value) === index
  ));

  return devices
    .map(fallbackDevice => localImages.get(`${section}:${number}:${fallbackDevice}`))
    .find(Boolean) || '';
};

const applyLocalImages = () => {
  imageTargets.forEach(target => {
    if (target.kind === 'img') {
      const img = document.querySelector(target.selector);
      const src = getLocalImage(target.section, target.number, getCurrentDevice());
      if (img && src) img.src = src;
      return;
    }

    if (target.kind === 'picture') {
      const picture = document.querySelector(target.selector);
      if (!picture) return;
      const sources = picture.querySelectorAll('source');
      const img = picture.querySelector('img');
      const mobile = getLocalImage(target.section, target.number, 'movil');
      const tablet = getLocalImage(target.section, target.number, 'tablet');
      const desktop = getLocalImage(target.section, target.number, 'desktop');

      if (mobile) sources[0]?.setAttribute('srcset', mobile);
      if (tablet) sources[1]?.setAttribute('srcset', tablet);
      if (img && desktop) img.src = desktop;
      return;
    }

    Object.entries(target.css).forEach(([device, property]) => {
      const src = getLocalImage(target.section, target.number, device);
      if (src) document.documentElement.style.setProperty(property, `url("${src}")`);
    });
  });
};

menu.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

applyLocalImages();

Object.values(deviceQuery).forEach(query => {
  query.addEventListener('change', applyLocalImages);
});

document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));

const locations = {
  mall: {
    name: 'Mall Aventura Plaza Trujillo',
    address: 'Mall Aventura Plaza Trujillo',
    hours: 'Lunes a domingo, 10:00 a.m. - 10:00 p.m.',
  },
  pizarro: {
    name: 'Centro Comercial Plaza Pizarro Trujillo',
    address: 'C.C. Portal F Pizarro, Trujillo',
    hours: 'Lunes a domingo, 10:00 a.m. - 10:00 p.m.',
  },
};

const locationDetail = document.querySelector('.location-detail');
const locationName = document.querySelector('[data-location-name]');
const locationAddress = document.querySelector('[data-location-address]');
const locationHours = document.querySelector('[data-location-hours]');

document.querySelectorAll('.location-option').forEach(button => {
  button.addEventListener('click', () => {
    const location = locations[button.dataset.location];
    if (!location) return;

    document.querySelectorAll('.location-option').forEach(option => {
      option.classList.toggle('active', option === button);
      option.setAttribute('aria-pressed', String(option === button));
    });

    locationName.textContent = location.name;
    locationAddress.textContent = location.address;
    locationHours.textContent = location.hours;
    locationDetail.hidden = false;
  });
});

document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const status = event.currentTarget.querySelector('.form-status');
  status.textContent = '¡Listo! Recibimos tu solicitud. Te contactaremos para confirmar.';
  event.currentTarget.reset();
});
