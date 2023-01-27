// Manejo del DOM, se crean las funciones
import { Welcome } from './components/welcome.js';
import { Login } from './components/login.js';

const root = document.getElementById('root');

const routes = {
  '/': Welcome,
  '/Login': Login,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.appendChild(routes[pathname](onNavigate));
};

const component = routes[window.location.pathname];

<<<<<<< HEAD
myFunction();

// buenas buenas
=======
root.appendChild(component(onNavigate));
>>>>>>> 7b6a88d7ec42f32c32a85de38ba4946ec1df53ea
