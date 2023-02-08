/* eslint-disable no-console */
import { login } from '../lib/firebase';

export const Login = (onNavigate) => {
  const main = document.createElement('main');
  main.setAttribute('class', 'contenedor');

  const imageLogo = document.createElement('img');
  imageLogo.src = 'imagenes/logo.png';
  imageLogo.setAttribute('class', 'imagen');

  const formulario = document.createElement('form'); // cambie div por form, cree formulario
  formulario.setAttribute('class', 'login');
  
  const email = document.createElement('input');
  email.placeholder = 'Email';
  email.setAttribute('class', 'box');
  email.type = 'text';
  email.required = 'true';
  email.autocomplete = 'email'; // se agrego autocompletado

  const password = document.createElement('input');
  password.placeholder = 'contraseña';
  password.setAttribute('class', 'box');
  password.type = 'password';
  password.required = 'true';
  password.autocomplete = 'current-password'; // se agrego autocompeltado

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Iniciar Sesión';
  buttonLogin.setAttribute('class', 'start');
  buttonLogin.type = 'submit';

  const forgotPassword = document.createElement('p');
  forgotPassword.textContent = 'Olvide mi contraseña';

  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Inicia sesión con Google';
  buttonGoogle.setAttribute('class', 'google');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.setAttribute('class', 'start');
  buttonRegister.type = 'submit';

  formulario.append(email, password, buttonLogin, forgotPassword, buttonGoogle, buttonRegister);
  main.append(imageLogo, formulario);

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault(); // No recargue la página
    const userLogin = login(email.value, password.value);
    userLogin.then((userCredential) => {
      // Login
      const user = userCredential.user;
      // eslint-disable-next-line no-console
      console.log('user: ', user);
      // eslint-disable-next-line no-alert
      alert('Inicio de sesión exitoso');
    })
      .catch((error) => {
        const errorCode = error.code;
        let message;
        if (errorCode === 'auth/wrong-password') {
          message = 'Contraseña incorrecta';
        }
        if (errorCode === 'auth/invalid-email') {
          message = 'Ingresa un correo válido';
        }
        if (errorCode === 'auth/internal-error') {
          message = 'Olvidaste la contraseña';
        }

        if (errorCode === 'auth/user-not-found') {
          message = 'El correo electrónico ingresado no ha sido registrado';
        }
        console.log('errorCode: ', errorCode);
        const errorMessage = error.message;
        console.log('errorMessage: ', errorMessage);
        // eslint-disable-next-line no-alert
        alert(message);
      });
  });

  return main;
};
