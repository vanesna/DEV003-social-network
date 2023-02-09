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

  it('en caso de que las contraseñas no coincidan se muestra error', async () => {
    inputForPassword.value = '123456';
    password2.value = 'sk8hjs9';
    buttonRegister.click();

    expect(errorMessage.innerHTML).toBe('Las contraseñas no coinciden');
  });

  it('en caso de que las contraseñas sean menores a 6 carácteres', async () => {
    register.mockImplementationOnce(() => Promise.reject({ code: 'auth/weak-password' }));

    inputForEmail.value = 'mariana@gmail.com';
    inputForPassword.value = '12345';
    password2.value = '12345';

    buttonRegister.click();
    await tick();
    expect(errorMessage.innerHTML).toBe('La contraseña debe contener al menos 6 carácteres');
  });

  it('en caso de que no ingrese ningun correo electrónico', async () => {
    register.mockImplementationOnce(() => Promise.reject({ code: 'auth/missing-email' }));

    inputForEmail.value = ' ';
    inputForPassword.value = '1234567';
    password2.value = '1234567';
    buttonRegister.click();

    await tick();
    expect(errorMessage.innerHTML).toBe('Llena todos los campos');
  });

  it('en caso de que ingrese un correo electronico invalido', async () => {
    register.mockImplementationOnce(() => Promise.reject({ code: 'auth/invalid-email' }));

    inputForEmail.value = 'emailgmailcom';
    inputForPassword.value = '1234567';
    password2.value = '1234567';
    buttonRegister.click();

    await tick();
    expect(errorMessage.innerHTML).toBe('Ingresa un correo electrónico válido');
  });

  it('en caso de que no ingrese una contraseña', async () => {
    register.mockImplementationOnce(() => Promise.reject({ code: 'auth/internal-error' }));

    inputForEmail.value = 'mariana@gmail.com';
    inputForPassword.value = ' ';
    password2.value = ' ';
    buttonRegister.click();

    await tick();
    expect(errorMessage.innerHTML).toBe('Ingresa una contraseña');
  });

  it('en caso de que ingrese un correo electrónico ya registrado', async () => {
    register.mockImplementationOnce(() => Promise.reject({ code: 'auth/email-already-in-use' }));

    inputForEmail.value = 'mariana@gmail.com';
    inputForPassword.value = ' ';
    password2.value = ' ';
    buttonRegister.click();

    await tick();
    expect(errorMessage.innerHTML).toBe('El correo electrónico ingresado ya ha sido registrado');
  });
});
