

const imgSlider = document.querySelector('.img-slider');
const pagination = document.querySelector('.radios');
const imagenes = [
    './img/portafolio/picture (1).png',
    './img/portafolio/picture (2).png',
    './img/portafolio/picture (3).png',
    './img/portafolio/picture (4).png',
    './img/portafolio/picture (5).png',
    './img/portafolio/picture (6).png',
    './img/portafolio/picture (7).png'
  ];

let indiceImagen = 0;
let dots = [];

function cambiarImagen(indice) {
  imgSlider.src = imagenes[indice];
  dots.forEach(dot => dot.classList.remove('active'));
  dots[indice].classList.add('active');
  indiceImagen = indice;
}

imagenes.forEach((imagen, indice) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  pagination.appendChild(dot);
  dots.push(dot);

  dot.addEventListener('click', () => {
    cambiarImagen(indice);
  });
});

const btnNext = document.querySelector('.btn-slider.next');
const btnBack = document.querySelector('.btn-slider.back');

btnNext.addEventListener('click', () => {
  indiceImagen++;
  if (indiceImagen === imagenes.length) {
    indiceImagen = 0;
  }
  cambiarImagen(indiceImagen);
});

btnBack.addEventListener('click', () => {
  indiceImagen--;
  if (indiceImagen < 0) {
    indiceImagen = imagenes.length - 1;
  }
  cambiarImagen(indiceImagen);
});

setInterval(() => {
  indiceImagen++;
  if (indiceImagen === imagenes.length) {
    indiceImagen = 0;
  }
  cambiarImagen(indiceImagen);
}, 5000);
