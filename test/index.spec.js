// importamos la funcion que vamos a testear
import { validatePassword } from '../components/register.js';

describe('validatePassword', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
