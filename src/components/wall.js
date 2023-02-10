export const Wall = (onNavigate) => {
  const main = document.createElement('main');
  main.setAttribute('class', 'contenedor');

  const muro = document.createElement('p');
  muro.textContent = 'Este es el muro';
  muro.setAttribute('class', 'preguntaPassword');

  main.append(muro);

  return main;
};
