// import { onNavigate } from './main.js';

export const Login = (onNavigate) => {
  const main = document.createElement('main');
  main.setAttribute('class', 'contenedor');

  const imageLogo = document.createElement('img');
  imageLogo.src = 'imagenes/logo.png';
  imageLogo.setAttribute('class', 'imagen');

  const div = document.createElement('div');

  const name = document.createElement('input');
  name.placeholder = 'Nombre de usuario';
  name.setAttribute('class', 'input');

  const password = document.createElement('input');
  password.placeholder = 'Contraseña';
  password.setAttribute('class', 'input');

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Iniciar Sesión';
  buttonLogin.setAttribute('class', 'start');

  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Inicia sesión con Google';
  buttonGoogle.setAttribute('class', 'google');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.setAttribute('class', 'start');

  

  div.setAttribute('class', 'textobienvenida');

  div.append(name, password, buttonLogin, buttonGoogle, buttonRegister);
  main.append(imageLogo, div);

  return main;
};
