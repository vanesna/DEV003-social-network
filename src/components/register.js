import { register } from '../lib/firebase.js';

export const Register = (onNavigate) => {
  const main = document.createElement('main');
  main.setAttribute('class', 'contenedor');

  const imageLogo = document.createElement('img');
  imageLogo.src = 'imagenes/logo.png';
  imageLogo.setAttribute('class', 'imagen');

  const formulario = document.createElement('form');
  formulario.setAttribute('class', 'signin');

  const email = document.createElement('input');
  email.placeholder = 'Correo electrónico';
  email.type = 'email';
  email.required = 'true';
  email.setAttribute('class', 'box');

  const password = document.createElement('input');
  password.placeholder = 'Contraseña';
  password.type = 'password';
  password.required = 'true';
  password.setAttribute('class', 'box');
  password.id = 'password';

  const password2 = document.createElement('input');
  password2.placeholder = 'Confirma contraseña';
  password2.type = 'password';
  password2.required = 'true';
  password2.setAttribute('class', 'box');
  password2.id = 'confirmPassword';

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrar';
  buttonRegister.setAttribute('class', 'start');
  buttonRegister.type = 'submit';

  formulario.append(email, password, password2, buttonRegister);
  main.append(imageLogo, formulario);
  // función para validar contraseñas
  function validatePassword() {
    const passwordValidate = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (passwordValidate !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      document.getElementById('confirmPassword').value = '';
      return false;
    }
    return true;
  }

  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault(); // No recargue la página
    const functionPassword = validatePassword();
    if (functionPassword === true) { // Verdadero si las contraseñas coinciden
      console.log('functionPassword: ', functionPassword);
      const authToken = register(email.value, password.value);
      authToken.then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('user: ', user);
        alert('Registro exitoso');
        onNavigate('/login');
      })
        .catch((error) => {
          const errorCode = error.code;
          let message;
          if (errorCode === 'auth/weak-password') {
            message = 'La contraseña debe contener al menos 6 carácteres';
          }
          if (errorCode === 'auth/missing-email') {
            message = 'Olvidaste ingresar tu correo electrónico';
          }
          if (errorCode === 'auth/invalid-email') {
            message = 'Ingresa un correo electrónico válido';
          }
          if (errorCode === 'auth/internal-error') {
            message = 'Ingresa una contraseña';
          }
          if (errorCode === 'auth/email-already-in-use') {
            message = 'El correo electrónico ingresado ya ha sido registrado';
          }
          console.log('errorCode: ', errorCode);
          const errorMessage = error.message;
          console.log('errorMessage: ', errorMessage);
          alert(message);

        // ..
        });
      // auth/weak-password contrasena corta +6
      // auth/missing-email
      // auth/invalid-email
      // auth/internal-error no ingrese contrasena
      // auth/email-already-in-use
    }
  });

  return main;
};
