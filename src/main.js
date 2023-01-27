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

root.appendChild(component(onNavigate));
