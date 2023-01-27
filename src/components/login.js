// import { onNavigate } from '../main.js';

export const Login = (onNavigate) => {
  const div = document.createElement('div');
  const imageLogo = document.createElement('img');
  const textIntro = document.createElement('p');

  imageLogo.src = 'imagenes/logo.png';
  textIntro.textContent = 'Inicia sesión';

  imageLogo.setAttribute('class', 'imagen');
  div.setAttribute('class', 'textobienvenida');
  textIntro.setAttribute('class', 'intro');

  div.append(imageLogo, textIntro);

  return div;
};
