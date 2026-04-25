import { Capitalize } from './functions'

describe('test Capitalize fn', () => {
  it('valid response', () => {
    expect(Capitalize('CREADO')).toBe('Creado');
    expect(Capitalize('ACTUALIZADO')).toBe('Actualizado');
    expect(Capitalize('nuevo')).toBe('Nuevo');
    expect(Capitalize('')).toBe('');
  })
})