

const imgSlider = document.querySelector('.img-slider');
const pagination = document.querySelector('.radios');
const imagenes = [
  './img/portafolio/picture (1).png',
  './img/portafolio/picture (2).png',
  './img/portafolio/picture (3).png',
  './img/portafolio/picture (4).png',
  './img/portafolio/picture (5).png',
  './img/portafolio/picture (6).png',
  './img/portafolio/picture (7).png',
  // 6
  './img/portafolio/OnlineStore/editProfile.png',
  './img/portafolio/OnlineStore/addCart.png',
  './img/portafolio/OnlineStore/cart.png',
  './img/portafolio/OnlineStore/items.png',
  './img/portafolio/OnlineStore/management.png',
  './img/portafolio/OnlineStore/rol.png',
  './img/portafolio/OnlineStore/uploadImage.png',
  './img/portafolio/OnlineStore/profile.png'
  // './img/portafolio/test.mp4'
];

let indiceImagen = 0;
let dots = [];

function cambiarImagen(indice) {
  imgSlider.src = imagenes[indice];
  dots.forEach(dot => dot.classList.remove('active'));
  dots[indice].classList.add('active');
  indiceImagen = indice;

  // Obtener los elementos del título y descripción del slider
  const sliderTitle = document.getElementById('slider-title');
  const sliderDescription = document.getElementById('slider-description');

  // Verificar si el índice está en el rango de imágenes específicas
  if (indice >= 6 && indice < imagenes.length) {
    // Restaurar el contenido original del título y descripción
    sliderTitle.textContent = 'online jacket shop simulation';
    sliderDescription.textContent =
      `Welcome to our online simulation of a premium sack store! Experience an immersive shopping journey with cutting - edge features, including inventory management, personalized sack customization, and virtual store designing.Attract customers and boost profits with our smart pricing strategies.Explore a diverse collection of sacks, manage stock efficiently, and design your dream store in this fashion - forward software.Get ready for a one - of - a - kind virtual shopping experience that seamlessly blends fashion and technology.
  `} else {
    // Restaurar el contenido original del título y descripción
    sliderTitle.textContent = 'online cap shop simulation';
    sliderDescription.textContent = 'Our online hat shop simulation program offers a wide range of functionalities for an immersive and enriching experience. We highlight inventory management, product customization, and virtual store design. We also offer pricing strategies to attract customers and maximize profits.';
  }
}

// Resto del código del slider...


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
