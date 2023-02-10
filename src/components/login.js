
//  import { provider } from '@firebase/component';

import
{
  login,
  loginWithGoogle,
} from '../lib/firebase';

export const Login = (onNavigate) => {
  const main = document.createElement('main');
  main.setAttribute('class', 'contenedor');

  const imageLogo = document.createElement('img');
  imageLogo.src = 'imagenes/logo.png';
  imageLogo.setAttribute('class', 'imagen');

  const formulario = document.createElement('form');
  formulario.setAttribute('class', 'login');

  const email = document.createElement('input');
  email.placeholder = 'Email';
  email.setAttribute('class', 'box');
  email.type = 'text';
  email.required = 'true';
  email.autocomplete = 'email';

  const password = document.createElement('input');
  password.placeholder = 'contraseña';
  password.setAttribute('class', 'box');
  password.type = 'password';
  password.required = 'true';
  password.autocomplete = 'current-password';
  const loginButton = document.createElement('button');
  loginButton.textContent = 'Iniciar Sesión';
  loginButton.setAttribute('class', 'start');
  loginButton.type = 'submit';

  const forgotPassword = document.createElement('p');
  forgotPassword.textContent = 'Olvidé mi contraseña';
  forgotPassword.setAttribute('class', 'preguntaPassword');

  const GoogleButton = document.createElement('button');
  GoogleButton.textContent = 'Inicia sesión con Google';
  GoogleButton.setAttribute('class', 'google');
  GoogleButton.id = 'googleLogin';

  const registerButton = document.createElement('button');
  registerButton.textContent = 'Registrate';
  registerButton.setAttribute('class', 'start');
  registerButton.type = 'submit';

  formulario.append(email, password, loginButton, forgotPassword, GoogleButton, registerButton);
  main.append(imageLogo, formulario);

  registerButton.addEventListener('click', () => {
    onNavigate('/register');
  });

  // const botonGoogle = document.querySelector('#googleLogin');
  GoogleButton.addEventListener('click', (e) => {
    console.log('clikc boton google: ', GoogleButton);
    e.preventDefault();

    const userGoogle = loginWithGoogle();
    userGoogle.then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
  });

  loginButton.addEventListener('click', (e) => {
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
