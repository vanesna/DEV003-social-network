/* eslint-disable max-len */
// importamos la funcion que vamos a testear
import { register } from '../src/lib/firebase.js';
import { RegisterComponent } from '../src/components/register.js';

jest.mock('../src/lib/firebase'); // Hace un mock de firebase

// en la funcion tick hay una promesa para que se resuelva en un tiempo determinado, en este caso 0 segundos
function tick() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

describe('first test for Register', () => {
  // let contenedor;
  // let formulario;
  let inputForEmail;
  let inputForPassword;
  let password2;
  // let successMessage;
  let errorMessage;
  let buttonRegister;

  // se llama el DOM virtual
  beforeEach(() => {
    document.body.appendChild(RegisterComponent()); // creo un body virtual donde va a ir el resultado de ejecutar la funcion de mi componente Register, que me retorna mi contenedor

    // contenedor = document.getElementById('viewconteiner');
    // formulario = document.getElementById('form');
    inputForEmail = document.getElementById('inputEmail');
    inputForPassword = document.getElementById('inputPassword');
    password2 = document.getElementById('confirmPassword');
    // successMessage = document.getElementById('successMessage');
    errorMessage = document.getElementById('errorMessage');
    buttonRegister = document.getElementById('registrar');
  });
  // se hace un mock de implementación única al register declarado en firebase.js respetando sus parámetro, se hace implementacion del mock por test
  it('espero que mi boton register me regis', async () => {
    register.mockImplementationOnce((email, password) => Promise.resolve({ user: { email, password } }));
    window.alert = jest.fn();
    // global.alert = jest.fn();
    // valores de los inputs
    inputForEmail.value = 'mariana@gmail.com';
    inputForPassword.value = '123456';
    password2.value = '123456';

    // eslint-disable-next-line no-undef
    buttonRegister.click();
    await tick();
    expect(window.alert).toHaveBeenCalled();
    // expect(window.location.pathname).toEqual('/login');
    // expect(successMessage.innerHTML).toBe('Registro exitoso');
    // expect(global.alert).toHaveBeenCalledTimes(1);
  });

  it('en caso de vacio se muestra error', async () => {
    inputForEmail.value = '';
    inputForPassword.value = '';
    password2.value = '';
    buttonRegister.click();
    // console.log(errorMessage.innerHTML);
    // await tick();
    expect(errorMessage.innerHTML).toBe('Llena todos los campos');
  });

  it('en caso de que las contraseñas no coincidan se muestra error', async () => {
    inputForPassword.value = '123456';
    password2.value = 'sk8hjs9';
    buttonRegister.click();
    // console.log(errorMessage.innerHTML);
    // await tick();
    expect(errorMessage.innerHTML).toBe('Las contraseñas no coinciden');
  });

  it ('en caso de que las contraseñas sean menores a 6 carácteres', async () => {
    register.mockImplementationOnce(() => Promise.reject({ code: 'auth/weak-password'}));
    // global.alert = jest.fn();
    // valores de los inputs
    inputForEmail.value = 'mariana@gmail.com';
    inputForPassword.value = '12345';
    password2.value = '12345';

    // eslint-disable-next-line no-undef
    buttonRegister.click();
    await tick();
    expect(errorMessage.innerHTML).toBe('La contraseña debe contener al menos 6 carácteres');
  });
});
