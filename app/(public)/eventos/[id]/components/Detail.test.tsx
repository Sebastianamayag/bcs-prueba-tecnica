import { render, screen } from '@testing-library/react'
import { Detail } from './'
import { detail } from '../type'

const mockProps: detail = {
  numero_afiliacion: 'AF-123456',
  nombre: 'Juan Pérez',
  estado: 'En curso',
  createdAt: '2026-04-24T10:00:00',
  numero_documento: '123564',
  updatedAt: '2026-04-24T10:50:00'
}

describe('test <Detail/> component', () => { 
    beforeEach(()=>{
        render(<Detail {...mockProps} />)
    });

    it('render all components ', () => {
        const section = screen.getByTestId('detail');
        const title = screen.getByText('Detalle de la solicitud');
        const subtitle = screen.getByText(/AF-123456/i);
        const name = screen.getByText('Juan Pérez');
        const status = screen.getByText('En curso');
        const createdAt = screen.getByText('2026-04-24T10:00:00');
        expect(section).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        expect(status).toBeInTheDocument();
        expect(createdAt).toBeInTheDocument();
    });
});
