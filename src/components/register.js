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
  buttonRegister.textContent = 'Aceptar';
  buttonRegister.setAttribute('class', 'start');

  formulario.append(email, parrafo, password, password2, buttonRegister);
  main.append(imageLogo, formulario);

  const createAccount = () => {
    const signinEmail = email.value;
    const signinPassword = password.value;
    const confirmPassword = password2.value;

    console.log(signinEmail, signinPassword, confirmPassword);

    try {
      const userCredential = register(email, password, confirmPassword);
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
  };
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
    e.preventDefault();
    const functionPassword = validatePassword();
    const authToken = register(email.value, password.value);
    // console.log(name.textContent)
    alert(authToken);
  });

  // buttonRegister.addEventListener('click', createAccount);

  return main;
};
