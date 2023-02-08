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
  // let contenedor;
  // let formulario;
  let inputForEmail;
  let inPutForPassword;
  // let password2;
  let succcessMessage;
  let buttonRegister;

  // se llama el DOM virtual
  beforeEach(() => {
    document.body.appendChild(Register()); // creo un body virtual donde va a ir el resultado de ejecutar la funcion de mi componente Register, que me retorna mi contenedor

    // contenedor = document.getElementById("viewconteiner");
    // formulario = document.getElementById("form");
    inputForEmail = document.getElementById('inputEmail');
    inPutForPassword = document.getElementById('inputPassword');
    // password2 = document.getElementById("inputPassword2");
    succcessMessage = document.getElementById('succcessMessage');
    buttonRegister = document.getElementById('registar');
  });
  // se hace un mock de implementación única al register declarado en firebase.js respetando sus parámetro, se hace implementacion del mock por test
  it('espero que mi boton register me regis', async () => {
    register.mockImplementationOnce((email, password) => Promise.resolve({ user: { userCredential: 12345, email, password } }));

    // global.alert = jest.fn();
    // valores de los inputs
    inputForEmail.value = 'mariana@gmail.com';
    inPutForPassword.value = '123456';
    // eslint-disable-next-line no-undef
    buttonRegister.click();
    await tick();
    expect(succcessMessage.innerHTML).toBe('Registro exitoso');
    // expect(global.alert).toHaveBeenCalledTimes(1);
  });
});

it('en caso de vacio se muestra error', () => {
  // emailInput.value = null;
  // botonRegistro.click();
  // tick();
  // expect(errorMensaje.value).toBe("llena el campo")

});
// });
