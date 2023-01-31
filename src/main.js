// Manejo del DOM, se crean las funciones
import { Welcome } from './components/welcome.js';
import { Login } from './components/login.js';
import { Register } from './components/register.js';

const root = document.getElementById('root');

const routes = {
  '/': Welcome,
  '/login': Login,
  '/register': Register,
};

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname](onNavigate));
};

const component = routes[window.location.pathname];

root.appendChild(component(onNavigate));

