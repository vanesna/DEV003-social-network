// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

// Función para cambiar la url
const init = () => {
  window.addEventListener('hashchange', () => console.log(window.location.hash));
};

window.addEventListener('load', init);
