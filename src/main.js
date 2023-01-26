// Manejo del DOM, se crean las funciones

import { myFunction } from './lib/index.js';

myFunction();

// Función para cambiar la url
const init = () => {
  window.addEventListener('hashchange', () => console.log(window.location.hash));
};

window.addEventListener('load', init);
