import {login} from "../lib/firebase"

export const Login = (onNavigate) => {
  const main = document.createElement('main');
  main.setAttribute('class', 'contenedor');

  const imageLogo = document.createElement('img');
  imageLogo.src = 'imagenes/logo.png';
  imageLogo.setAttribute('class', 'imagen');

  const formulario = document.createElement('form'); // cambie div por form, cree formulario
  formulario.setAttribute('class', 'login');

  const name = document.createElement('input');
  name.placeholder = 'Email';
  name.setAttribute('class', 'box');
  name.type = 'text';
  name.required = 'true';
  name.autocomplete = 'email'; // se agrego autocompletado

  const password = document.createElement('input');
  password.placeholder = 'contraseña';
  password.setAttribute('class', 'box');
  password.type = 'password';
  password.required = 'true';
  password.autocomplete = 'current-password'; // se agrego autocompeltado

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Iniciar Sesión';
  buttonLogin.setAttribute('class', 'start');
  buttonLogin.type= 'submit';

  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Inicia sesión con Google';
  buttonGoogle.setAttribute('class', 'google');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.setAttribute('class', 'start');
  buttonRegister.type= 'submit';

  buttonLogin.addEventListener('click', () => {
    const auth_token = login(name.value, password.value);
    //console.log(name.textContent)
    alert(auth_token)
  });

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  formulario.append(name, password, buttonLogin, buttonGoogle, buttonRegister);
  main.append(imageLogo, formulario);

  return main;
};
