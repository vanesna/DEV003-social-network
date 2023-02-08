// Manejo del DOM, se crean las funciones
import { Welcome } from './components/welcome.js';
import { Login } from './components/login.js';
import { RegisterComponent } from './components/register.js';

const root = document.getElementById('root');
// Nuestras rutas
const routes = {
  '/': Welcome,
  '/login': Login,
  '/register': RegisterComponent,
};

const onNavigate = (pathname) => {// es el "/" de cada ruta, nombre de la ruta
  window.history.pushState( // queda registrado el historial en el navegador
    {},
    pathname,
    window.location.origin + pathname, // agrega cada pathname en el navegador
  );
  root.removeChild(root.firstChild); // borra la vista al pasar a otra
  root.appendChild(routes[pathname](onNavigate)); // muestra la nueva vista
};

const component = routes[window.location.pathname]; // muestra el html dinámico

root.appendChild(component(onNavigate));
