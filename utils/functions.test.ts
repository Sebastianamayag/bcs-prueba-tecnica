import { Capitalize, MinCharacthers } from './functions'

describe('test Capitalize fn', () => {
  it('valid response', () => {
    expect(Capitalize('CREADO')).toBe('Creado');
    expect(Capitalize('ACTUALIZADO')).toBe('Actualizado');
    expect(Capitalize('nuevo')).toBe('Nuevo');
    expect(Capitalize('')).toBe('');
  })
});

describe('test MinCharacthers fn', () => {
  it('validate message error', () => {
    expect(MinCharacthers(3)).toBe('Minino 3 caracteres')
    expect(MinCharacthers(8)).toBe('Minino 8 caracteres')
  })
});


