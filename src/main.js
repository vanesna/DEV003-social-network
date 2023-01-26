// Manejo del DOM, se crean las funciones
import { Welcome } from './components/welcome.js';

const root = document.getElementById('root');

const routes = {
  '/': Welcome,
};

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.appendChild(routes[pathname](onNavigate));
};

const component = routes[window.location.pathname];

myFunction();

// buenas buenas