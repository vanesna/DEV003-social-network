import { register } from '../lib/firebase.js';

export const RegisterComponent = (onNavigate) => {
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
      errorMessage.innerHTML = 'Las contraseñas no coinciden';
      document.getElementById('confirmPassword').value = '';
      return false;
    }
    return true;
  }

  function validateInputs() {
    const emailToValidate = document.getElementById('inputEmail').value;
    // console.log('emailToValidate: ', emailToValidate);
    const passwordToValidate = document.getElementById('inputPassword').value;
    // console.log('passwordToValidate: ', passwordToValidate);
    const confirmPassword2 = document.getElementById('confirmPassword').value;
    // console.log('confirmPassword2: ', confirmPassword2);

    if (emailToValidate === '' || passwordToValidate === '' || confirmPassword2 === '') {
      errorMessage.innerHTML = 'Llena todos los campos';
      return false;
    }
    return true;
  }

  buttonRegister.addEventListener('click', (e) => { // CAMBIOS!!
    e.preventDefault(); // No recargue la página

    const functionValidateInputs = validateInputs();
    // console.log('functionValidateInputs: ', functionValidateInputs);
    const functionPassword = validatePassword();

    if (functionPassword === true && functionValidateInputs === true) {
      // Nuestra promesa es el register que nos deveulve un objeto, que es el userCredential
      const authToken = register(inputForEmail.value, inPutForPassword.value);
      // console.log('authToken: ', authToken);

      authToken.then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // eslint-disable-next-line no-console
        console.log('user: ', user);
        succcessMessage.innerHTML = 'Registro exitoso';
        onNavigate('/login');
      })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/weak-password') {
            errorMessage.innerHTML = 'La contraseña debe contener al menos 6 carácteres';
          }
          if (errorCode === 'auth/missing-email') {
            errorMessage.innerHTML = 'Olvidaste ingresar tu correo electrónico';
          }
          if (errorCode === 'auth/invalid-email') {
            errorMessage.innerHTML = 'Ingresa un correo electrónico válido';
          }
          if (errorCode === 'auth/internal-error') {
            errorMessage.innerHTML = 'Ingresa una contraseña';
          }
          if (errorCode === 'auth/email-already-in-use') {
            errorMessage.innerHTML = 'El correo electrónico ingresado ya ha sido registrado';
          }
          // console.log('errorCode: ', errorCode);
          // const errorMessageFirebase = error.message;
          // console.log('errorMessageFirebase: ', errorMessageFirebase);
        });
    }
  });

  return contenedor;
};
