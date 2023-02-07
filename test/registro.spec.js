/* eslint-disable max-len */
// importamos la funcion que vamos a testear
import { register } from '../src/lib/firebase';
import { Register } from '../src/components/register';

jest.mock('../src/lib/firebase');

// en la funcion tick hay una promesa para que se resuelva en un tiempo determinado, en este caso 0 segundos
function tick() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

describe('first test for Register', () => {
  let contenedor;
  let formulario;
  let inputForEmail;
  let inPutForPassword;
  let password2;
  let buttonRegister;

  // se llama el DOM virtual
  beforeEach(() => {
    document.body.appendChild(Register()); // creo un body virtual donde va a ir el resultado de ejecutar la funcion de mi componente Register, que me retorna mi contenedor

    contenedor = document.getElementById('viewconteiner');
    formulario = document.getElementById('form');
    inputForEmail = document.getElementById('inputEmail');
    inPutForPassword = document.getElementById('inputPassword');
    password2 = document.getElementById('inputPassword2');
    buttonRegister = document.getElementById('registar');
  });
  // se hace un mock de implementación única al register declarado en firebas.js respetando sus parámetro, se hace implementacion del mock por test
  it('Debería mostrar un error por ingresar un correo electronico invalido o no ingresar ninguno', async () => {
    register.mockImplementationOnce((email, password) => Promise.reject(new Error('Firebase: Error (auth/invalid-email).')));

    // eslint-disable-next-line no-undef
    inputForSend.click();
    await tick();
    expect(alert).toBe('Ingresa un correo electrónico válido');
  });