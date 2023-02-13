export const Wall = (onNavigate) => {
  // creación de elementos

 // const elementoswall = document.getElementById('elementoswall');
 const elementoswall = document.createElement('div');
 

  const containerHeader = document.createElement('section');
  const iconMenu = document.createElement('img');
  const nombreSocialNetwork = document.createElement('p');
  const search = document.createElement('input');
  const iconNotificaciones = document.createElement('img');
  const menuDisplayed = document.createElement('div');

  // añadiendo clase
  elementoswall.className = 'containerwall';
  containerHeader.className = 'containerHeader';
  iconMenu.className = 'icon-menu';
  iconMenu.src = 'https://i.postimg.cc/gJGfXyD1/menu-icon-8.png';
  nombreSocialNetwork.textContent = 'Like Plants';
  nombreSocialNetwork.className = 'LikePlants';
  search.className = 'search';
  search.placeholder = '\u{1F50D} Search';
  iconNotificaciones.className = 'icon-notificaciones';
  iconNotificaciones.src = '\\imagenes\\planta.png';
  menuDisplayed.className = 'menu-desplegable';
  menuDisplayed.id = 'menu-desplegable-id';

  // añadiendo hijos
  elementoswall.appendChild(containerHeader);
  elementoswall.appendChild(menuDisplayed);
  containerHeader.appendChild(iconMenu);
  containerHeader.appendChild(nombreSocialNetwork);
  containerHeader.appendChild(search);
  containerHeader.appendChild(iconNotificaciones);

  // Menú hambuguesa
  iconMenu.addEventListener('click', () => {
    menuDisplayed.style.display = 'flex';
    const options = `<nav class='menu-nav'>
    <li><a class='option' id='option1'>Mi Perfil</a></li>
    <li><a class='option' id='option2'>Mis grupos</a></li>
    <li><a class='option' id='option3'>Cerrar Sesión</a></li>
    <img src='https://i.postimg.cc/mg8dpxNp/icon-close.png' alt='close' class='close-button' id='close-button'>
    </nav>`;
    menuDisplayed.innerHTML = options;
    /* Al dar click a el icono cerrar */
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', () => {
      menuDisplayed.style.display = 'none';
    });
  });

  return elementoswall;
  
};
