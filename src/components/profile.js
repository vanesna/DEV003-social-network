import { storage, saveFiles } from '../lib/firebase.js';

export const Profile = (onNavigate) => {
  const contenedor = document.createElement('div');
  contenedor.setAttribute('class', 'contenedor');
  contenedor.id = 'viewconteiner';

  const fotoPerfil = document.createElement('img');

  const inputPerfil = document.createElement('input');
  // fotoPerfil.setAttribute('class', 'fotoPerfil');
  inputPerfil.setAttribute('type', 'file');
  inputPerfil.id = 'avatar';
  inputPerfil.setAttribute('accept', 'image/png, image/jpeg');

  inputPerfil.addEventListener('change', () => {
    inputPerfil.files[0], inputPerfil.files[0];
    // const url = await readURL(inputPerfil.files[0]);
    // fotoPerfil.src = url;
    inputPerfil.classList.add('obj');
    inputPerfil.file = inputPerfil.files[0];
    console.log(inputPerfil.files);
   

    saveFiles(inputPerfil.file, inputPerfil.file.name).then((r) =>  alert('Guardado correctamente'));
  });

  contenedor.append(fotoPerfil, inputPerfil);

  return contenedor;
};
