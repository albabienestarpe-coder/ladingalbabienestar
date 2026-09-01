const header = document.querySelector('.topbar');
const menu = document.querySelector('.menu');

const deviceQuery = {
  tablet: window.matchMedia('(max-width: 900px)'),
  movil: window.matchMedia('(max-width: 600px)'),
};

const localImages = new Map([
  ['0:1:desktop', 'assets/LOGO/LOGO/Logo%20ALBA_SVG.svg'],
  ['0:1:tablet', 'assets/LOGO/LOGO/Logo%20ALBA_SVG.svg'],
  ['0:1:movil', 'assets/LOGO/LOGO/Logo%20ALBA_SVG.svg'],
  ['1:1:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/01_INICIO/IMAGEN%201_PORTADAPRINCIPAL_DESKTOP.jpg'],
  ['1:1:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/01_INICIO/IMAGEN%201_PORTADAPRINCIPAL_TABLETA.jpg'],
  ['1:1:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/01_INICIO/IMAGEN%201_PORTADAPRINCIPAL_MOVIL.jpg'],
  ['2:1:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/02_UNA%20PAUSA%20PARA%20TI/IMAGEN%202_UNAPAUSAPARATI_DESKTOP.jpg'],
  ['2:1:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/02_UNA%20PAUSA%20PARA%20TI/IMAGEN%202_UNAPAUSAPARATI_TABLETA.jpg'],
  ['2:1:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/02_UNA%20PAUSA%20PARA%20TI/IMAGEN%202_UNAPAUSAPARATI_MOVIL.jpg'],
  ['3:1:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/03_QUE%20ES%20ALBA/IMAGEN%203_QUEESALBA_DESKTOP.jpg'],
  ['3:1:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/03_QUE%20ES%20ALBA/IMAGEN%203_QUEESALBA_TABLETA.jpg'],
  ['3:1:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/03_QUE%20ES%20ALBA/IMAGEN%203_QUEESALBA_MOVIL.jpg'],
  ['4:1:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/04_EXPERIENCIAS/01_RELAX/IMAGEN%204_RELAX_DESKTOP.jpg'],
  ['4:1:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/04_EXPERIENCIAS/01_RELAX/IMAGEN%204_RELAX_TABLETA.jpg'],
  ['4:1:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/04_EXPERIENCIAS/01_RELAX/IMAGEN%204_RELAX_MOVIL.jpg'],
  ['4:2:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/04_EXPERIENCIAS/02_RECARGAR/IMAGEN%205_RECARGAR_DESKTOP.jpg'],
  ['4:2:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/04_EXPERIENCIAS/02_RECARGAR/IMAGEN%205_RECARGAR_TABLETA.jpg'],
  ['4:2:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/04_EXPERIENCIAS/02_RECARGAR/IMAGEN%205_RECARGAR_MOVIL.jpg'],
  ['4:3:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/04_EXPERIENCIAS/03_DESCONECTAR/IMAGEN%206_DESCONECTAR_DESKTOP.jpg'],
  ['4:3:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/04_EXPERIENCIAS/03_DESCONECTAR/IMAGEN%206_DESCONECTAR_TABLETA.jpg'],
  ['4:3:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/04_EXPERIENCIAS/03_DESCONECTAR/IMAGEN%206_DESCONECTAR_MOVIL.jpg'],
  ['6:1:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/06_EL%20ESPACIO/01_ESPACIO%20PRINCIPAL/IMAGEN%201_ESPACIOPRINCIPAL_DESKTOP.jpg'],
  ['6:1:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/06_EL%20ESPACIO/01_ESPACIO%20PRINCIPAL/IMAGEN%201_ESPACIOPRINCIPAL_TABLETA.jpg'],
  ['6:1:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/06_EL%20ESPACIO/01_ESPACIO%20PRINCIPAL/IMAGEN%201_ESPACIOPRINCIPAL_MOVIL.jpg'],
  ['6:2:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/06_EL%20ESPACIO/02_DETALLE%20SUPERIOR/IMAGEN%202_DETALLESUPERIOR_DESKTOP.jpg'],
  ['6:2:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/06_EL%20ESPACIO/02_DETALLE%20SUPERIOR/IMAGEN%202_DETALLESUPERIOR_TABLETA.jpg'],
  ['6:2:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/06_EL%20ESPACIO/02_DETALLE%20SUPERIOR/IMAGEN%202_DETALLESUPERIOR_MOVIL.jpg'],
  ['6:3:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/06_EL%20ESPACIO/03_DETALLE%20INFERIOR/IMAGEN%203_DETALLEINFERIOR_DESKTOP.jpg'],
  ['6:3:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/06_EL%20ESPACIO/03_DETALLE%20INFERIOR/IMAGEN%203_DETALLEINFERIOR_TABLETA.jpg'],
  ['6:3:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/06_EL%20ESPACIO/03_DETALLE%20INFERIOR/IMAGEN%203_DETALLEINFERIOR_MOVIL.jpg'],
  ['8:1:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/08_UBICACION/IMAGEN%201_FOTODELLOCAL_DESKTOP.jpg'],
  ['8:1:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/08_UBICACION/IMAGEN%201_FOTODELLOCAL_DESKTOP.jpg'],
  ['8:1:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/08_UBICACION/IMAGEN%201_FOTODELLOCAL_DESKTOP.jpg'],
  ['12:1:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/12_CONTENIDO_INSPIRACION/01_5%20MINUTOS%20PARA%20DESCONECTAR/IMAGEN%201_5MINUTOSPARADESCONECTAR_DESKTOP.jpg'],
  ['12:1:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/12_CONTENIDO_INSPIRACION/01_5%20MINUTOS%20PARA%20DESCONECTAR/IMAGEN%201_5MINUTOSPARADESCONECTAR_TABLETA.jpg'],
  ['12:1:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/12_CONTENIDO_INSPIRACION/01_5%20MINUTOS%20PARA%20DESCONECTAR/IMAGEN%201_5MINUTOSPARADESCONECTAR_MOVIL.jpg'],
  ['12:2:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/12_CONTENIDO_INSPIRACION/02_POR%20QUE%20NECESITAMOS%20PAUSAS/IMAGEN%202_PORQUENECESITAMOSPAUSAS_DESKTOP.jpg'],
  ['12:2:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/12_CONTENIDO_INSPIRACION/02_POR%20QUE%20NECESITAMOS%20PAUSAS/IMAGEN%202_PORQUENECESITAMOSPAUSAS_TABLETA.jpg'],
  ['12:2:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/12_CONTENIDO_INSPIRACION/02_POR%20QUE%20NECESITAMOS%20PAUSAS/IMAGEN%202_PORQUENECESITAMOSPAUSAS_MOVIL.jpg'],
  ['12:3:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/12_CONTENIDO_INSPIRACION/03_COMO%20LIBERAR%20TENSION/IMAGEN%203_COMOLIBERARTENSION_DESKTOP.jpg'],
  ['12:3:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/12_CONTENIDO_INSPIRACION/03_COMO%20LIBERAR%20TENSION/IMAGEN%203_COMOLIBERARTENSION_TABLETA.jpg'],
  ['12:3:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/12_CONTENIDO_INSPIRACION/03_COMO%20LIBERAR%20TENSION/IMAGEN%203_COMOLIBERARTENSION_MOVIL.jpg'],
  ['12:4:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/12_CONTENIDO_INSPIRACION/04_IDEAS%20PARA%20REGALARTE%20UN%20MOMENTO/IMAGEN%204_IDEASPARAREGALARTEUNMOMENTO_DESKTOP.jpg'],
  ['12:4:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/12_CONTENIDO_INSPIRACION/04_IDEAS%20PARA%20REGALARTE%20UN%20MOMENTO/IMAGEN%204_IDEASPARAREGALARTEUNMOMENTO_TABLETA.jpg'],
  ['12:4:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/12_CONTENIDO_INSPIRACION/04_IDEAS%20PARA%20REGALARTE%20UN%20MOMENTO/IMAGEN%204_IDEASPARAREGALARTEUNMOMENTO_MOVIL.jpg'],
  ['13:1:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/13_INSTAGRAM%20+%20TIKTOK/01_INSTAGRAM/IMAGEN%201_INSTAGRAM_DESKTOP.jpg'],
  ['13:1:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/13_INSTAGRAM%20+%20TIKTOK/01_INSTAGRAM/IMAGEN%201_INSTAGRAM_TABLETA.jpg'],
  ['13:1:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/13_INSTAGRAM%20+%20TIKTOK/01_INSTAGRAM/IMAGEN%201_INSTAGRAM_MOVIL.jpg'],
  ['13:2:desktop', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/13_INSTAGRAM%20+%20TIKTOK/02_TIKTOK/IMAGEN%20TIKTOK_DESKTOP.jpg'],
  ['13:2:tablet', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/13_INSTAGRAM%20+%20TIKTOK/02_TIKTOK/IMAGEN%20TIKTOK_TABLETA.jpg'],
  ['13:2:movil', 'assets/IMAGENES/RECURSOS%20PARA%20WEB/13_INSTAGRAM%20+%20TIKTOK/02_TIKTOK/IMAGEN%20TIKTOK_MOVIL.jpg'],
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
