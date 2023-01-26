export default () => {
  const viewWelcome = '<h1 class="bienvenidos">Bienvenidos</h1>';

  const welcomeMessaje = document.createElement('div');
  welcomeMessaje.innerHTML = viewWelcome;

  

  return welcomeMessaje;
};
