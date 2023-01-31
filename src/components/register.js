// import { onNavigate } from "./main.js";
import { register } from '../lib/firebase.js';

export const Register = () => {
// import { onNavigate } from './main.js';


export const Register = (onNavigate) => {
  const main = document.createElement('main');
  main.setAttribute('class', 'contenedor');

  const imageLogo = document.createElement('img');
  imageLogo.src = 'imagenes/logo.png';
  imageLogo.setAttribute('class', 'imagen');

  const formulario = document.createElement('div');
  formulario.setAttribute('class', 'signin');

  const name = document.createElement('input');
  name.placeholder = 'Nombre de usuario';
  name.setAttribute('class', 'input');
  name.type = 'text';
  name.autocomplete = 'username'

  const email = document.createElement('input');
  email.placeholder = 'Correo electrónico';
  email.type = 'email';
  email.setAttribute('class', 'input');

  const password = document.createElement('input');
  password.placeholder = 'Contraseña';
  password.type = 'password';
  password.setAttribute('class', 'input');

  const password2 = document.createElement('input');
  password2.placeholder = 'Confirma contraseña';
  password2.type = 'password';
  password2.setAttribute('class', 'input');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Aceptar';
  buttonRegister.setAttribute('class', 'start');

  formulario.append(name, email, password, password2, buttonRegister);
  main.append(imageLogo, formulario);

  const createAccount = () => {
    const signinName = name.value;
    const signinEmail = email.value;
    const signinPassword = password.value;
    const confirmPassword = password2.value;

    console.log(signinName, signinEmail, signinPassword, confirmPassword);

    try {
      const userCredential = register(email, password);
      console.log(userCredential);
      // const user = userCredential.user;
    } catch (error) {
      console.log(error);
    }
  };

  buttonRegister.addEventListener('click', createAccount);

  return main;
};
