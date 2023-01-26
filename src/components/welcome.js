export const Welcome = () => {
  const main = document.createElement('main');
  const imageLogo = document.createElement('img');
  const div = document.createElement('div');
  const textWelcome = document.createElement('h1');
  const textIntro = document.createElement('p');
  const startButton = document.createElement('button');

  startButton.textContent = 'Empecemos';
  imageLogo.src = 'imagenes/logo.png';
  textWelcome.textContent = 'Bienvenidos';
  textIntro.textContent = 'Diviértete descubriendo datos interesantes de las plantas de tu interes y descubre historias o proyectos de amantes de las plantas como tú. Like Plants te ayuda a comunicarte y compartir con las personas que piensan en verde.';

  div.append(textWelcome, textIntro, startButton);
  main.append(imageLogo, div);

  return main;
};
