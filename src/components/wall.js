export const Wall = (onNavigate) => {
  const main = document.createElement('main');
  main.setAttribute('class', 'contenedor');

  const muro = document.createElement('p');
  muro.textContent = 'Like Plants';
  muro.setAttribute('class', 'preguntaPassword');
  
  const div = document.createElement('div');
  const buscador = document.createElement('input');
  buscador.type = 'text';
  buscador.setAttribute('class', 'lupa');

  const nav = document.createElement('nav');

  const ul = document.createElement('ul');


  div.append(nav, ul, buscador);
  main.append(muro, div);

  return main;
};
