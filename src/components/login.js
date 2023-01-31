export const Login = (onNavigate) => {
  const main = document.createElement('main');
  main.setAttribute('class', 'contenedor');

  const imageLogo = document.createElement('img');
  imageLogo.src = 'imagenes/logo.png';
  imageLogo.setAttribute('class', 'imagen');

  const formulario = document.createElement('form'); // cambie div por form, cree formulario
  formulario.setAttribute('class', 'login');

  const name = document.createElement('input');
  name.placeholder = 'Nombre de usuario o Email';
  name.setAttribute('class', 'input');
  name.type = 'text';
  name.autocomplete = 'username'; // se agrego autocompletado

  const password = document.createElement('input');
  password.placeholder = 'contraseña';
  password.setAttribute('class', 'input');
  password.type = 'password';
  password.autocomplete = 'current-password'; // se agrego autocompeltado

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Iniciar Sesión';
  buttonLogin.setAttribute('class', 'start');
  buttonLogin.type= 'submit';

  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Inicia sesión con Google';
  buttonGoogle.setAttribute('class', 'google');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.setAttribute('class', 'start');
  buttonRegister.type= 'submit';

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  formulario.append(name, password, buttonLogin, buttonGoogle, buttonRegister);
  main.append(imageLogo, formulario);

  return main;
};
