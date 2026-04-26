import { render, screen, fireEvent } from '@testing-library/react'
import { Select } from './Select'

const mockOptions = [
  { label: 'Activo', value: 'activo' },
]

const mockOnChange = jest.fn()

describe('test <Select/ >', () => {
  beforeEach(() => {
    render(<Select options={mockOptions} placeHolder="Filtrar por estado" onChange={mockOnChange} value="activo" />);
  })

  it('render options', () => {
    const option = screen.getByText('Activo');
    expect(option).toBeInTheDocument();
  });

  it('render placeholder', () => {
    const placeHolder = screen.getByText('Filtrar por estado');
    expect(placeHolder).toBeInTheDocument();
  });

})