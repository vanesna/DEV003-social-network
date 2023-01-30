export const Register = (onNavigate) => {
  const main = document.createElement('main');
  main.setAttribute('class', 'contenedor');

  const imageLogo = document.createElement('img');
  imageLogo.src = 'imagenes/logo.png';
  imageLogo.setAttribute('class', 'imagen');

  const formulario = document.createElement('form');
  formulario.setAttribute('class', 'signin');

  const name = document.createElement('input');
  name.placeholder = 'Nombre de usuario';
  name.setAttribute('class', 'input');
  name.type = 'text';

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

  imageLogo.setAttribute('class', 'imagen');

  formulario.append(name, email, password, password2, buttonRegister);
  main.append(imageLogo, formulario);

  return main;
};
