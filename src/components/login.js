export default () => {
  const viewLogin = '<h1 class="bienvenidos">Iniciar sesión</h1>';

  const loginMessaje = document.createElement('div');
  loginMessaje.innerHTML = viewLogin;

  return loginMessaje;
};
