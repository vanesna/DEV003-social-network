
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
  email.setAttribute('class', 'box');

  const password = document.createElement('input');
  password.placeholder = 'Contraseña';
  password.type = 'password';
  password.setAttribute('class', 'box');
  password.id="password";


  const password2 = document.createElement('input');
  password2.placeholder = 'Confirma contraseña';
  password2.type = 'password';
  password2.setAttribute('class', 'box');
  password2.id="confirmPassword";
  
  
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Aceptar';
  buttonRegister.setAttribute('class', 'start');

  formulario.append(email, password, password2, buttonRegister);
  main.append(imageLogo, formulario);

 
  


  const createAccount = () => {
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
  function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password != confirmPassword) {
      alert("Las contraseñas no coinciden");
      document.getElementById("confirmPassword").value = '';
      return false;
    }
    return true;
  }
  
  buttonRegister.addEventListener('click', () => {
    var functionPassword = validatePassword();
    const auth_token = register(email.value, password.value);
    //console.log(name.textContent)
    alert(auth_token)
  });

  //buttonRegister.addEventListener('click', createAccount);

  return main;
};

