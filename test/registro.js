// importamos la funcion que vamos a testear
import { register } from '../src/lib/firebase';
import { Register } from '../src/components/register';

jest.mock('../src/lib/firebase');

// en la funcion tick hay una promesa para que se resuelva en un tiempo determinado, en este caso 0
function tick() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

describe('first test for Register', () => {
  let contenedor;
  let imageLogo;
  let formulario;
  let email;
  let password;
  let password2;
  let buttonRegister;

  // se llama el DOM virtual
  beforeEach(() => {
    document.body.appendChild(Register()); // creo un body virtual donde va a ir el resultado de ejecutar la funcion de mi componente Register, que me retorna mi contenedor

    contenedor = document.getElementById('viewconteiner');
    imageLogo = document.getElementById('imagenLogo');
    formulario = document.getElementById('form');
    email = document.getElementById('inputEmail');
    password = document.getElementById('inputPassword');
    password2 = document.getElementById('inputPassword2');
    buttonRegister = document.getElementById('registar');
  });

  it('Debería mostrar un error', async () => {
  // se hace un mock de implementación única al register declarado en firebas.js respetando sus parámetros
    register.mockImplementationOnce((email, password) => Promise.reject(
      new Error('Firebase: Error (auth/invalid-email).'),
    ));
  });
});
