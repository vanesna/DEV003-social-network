export const Register = (onNavigate) => {
  const main = document.createElement('main');
  main.setAttribute('class', 'contenedor');

  const imageLogo = document.createElement('img');
  imageLogo.src = 'imagenes/logo.png';
  imageLogo.setAttribute('class', 'imagen');

  const div = document.createElement('div');

  const name = document.createElement('input');
  name.placeholder = 'Nombre de usuario';
  name.setAttribute('class', 'input');

  const email = document.createElement('input');
  email.placeholder = 'Correo electrónico';
  email.type = 'email';
  email.setAttribute('class', 'input');

  const password = document.createElement('input');
  password.placeholder = 'Contraseña';
  password.setAttribute('class', 'input');

  const password2 = document.createElement('input');
  password2.placeholder = 'Confirma contraseña';
  password2.setAttribute('class', 'input');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Aceptar';
  buttonRegister.setAttribute('class', 'start');

  imageLogo.setAttribute('class', 'imagen');
  div.setAttribute('class', 'textobienvenida');

  div.append(name, email, password, password2, buttonRegister);
  main.append(imageLogo, div);

  return main;
};
