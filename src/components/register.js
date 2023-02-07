import { register } from '../lib/firebase.js';

export const Register = (onNavigate) => {
  const contenedor = document.createElement('div');
  contenedor.setAttribute('class', 'contenedor');
  contenedor.id = 'viewconteiner';

  const imageLogo = document.createElement('img');
  imageLogo.src = 'imagenes/logo.png';
  imageLogo.setAttribute('class', 'imagen');
  contenedor.id = 'imagenlogo';

  const formulario = document.createElement('form');
  formulario.setAttribute('class', 'signin');
  contenedor.id = 'form';

  const inputForEmail = document.createElement('input');
  inputForEmail.placeholder = 'Correo electrónico';
  inputForEmail.type = 'Email';
  inputForEmail.required = 'true';
  inputForEmail.setAttribute('class', 'box');
  inputForEmail.autocomplete = 'email';
  inputForEmail.id = 'inputEmail';

  const inPutForPassword = document.createElement('input');
  inPutForPassword.placeholder = 'Contraseña';
  inPutForPassword.type = 'password';
  inPutForPassword.required = 'true';
  inPutForPassword.setAttribute('class', 'box');
  inPutForPassword.autocomplete = 'new-password';
  inPutForPassword.id = 'inputPassword';

  const password2 = document.createElement('input');
  password2.placeholder = 'Confirma contraseña';
  password2.type = 'password';
  password2.required = 'true';
  password2.setAttribute('class', 'box');
  password2.autocomplete = 'new-password';
  password2.id = 'confirmPassword';

  const errorMessage = document.createElement('p');
  errorMessage.id = 'errorMessage';
  const succcessMessage = document.createElement('p');
  succcessMessage.id = 'succcessMessage';

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrar';
  buttonRegister.setAttribute('class', 'start');
  buttonRegister.type = 'submit';
  buttonRegister.id = 'registrar';

  formulario.append(
    inputForEmail,
    inPutForPassword,
    password2,
    errorMessage,
    succcessMessage,
    buttonRegister,
  );

  contenedor.append(imageLogo, formulario);

  function validatePassword() {
    const passwordValidate = document.getElementById('inputPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (passwordValidate !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      document.getElementById('confirmPassword').value = '';
      return false;
    }
    return true;
  }

  formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // No recargue la página
    const functionPassword = validatePassword();
    if (functionPassword === true) {
      // Nuestra promesa es el register que nos deveulve un objeto, que es el userCredential
      const authToken = register(inputForEmail.value, inPutForPassword.value);
      console.log('authToken: ', authToken);

      authToken.then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('user: ', user);
        succcessMessage.innerHTML = 'Registro exitoso';

        onNavigate('/login');
      })
        .catch((error) => {
          const errorCode = error.code;
          let message = ' ';
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
        });
    }
  });

  return contenedor;
};
