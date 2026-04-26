import { render, screen } from '@testing-library/react';
import { PersonCard } from './PersonCard';


const mockData = {
    tipo_de_documento: 'CC',
    numero_documento: '123456789',
    primer_nombre: 'Juan',
    segundo_nombre: 'Carlos',
    primer_apellido: 'Pérez',
    segundo_apellido: 'Gómez',
    cargo: 'Ingeniero',
    ingresos: '5000000',
    egresos: '2000000',
    patrimonio: '10000000',
};

describe('test <PersonCard /> component', () => {

    beforeEach(() =>
        render(<PersonCard data={mockData} />)
    );

    it('render data', () => {
        const title = screen.getByText('Datos personales');
        const subtitle1 = screen.getByText('Datos Basicos');
        const subtitle2 = screen.getByText('Datos financieros');
        const documentType = screen.getByText('CC');
        const documentNumber = screen.getByText('123456789');
        const name = screen.getByText('Juan');
        const lastName = screen.getByText('Pérez');
        const ingresos = screen.getByText('$5.000.000');
        const egresos = screen.getByText('$2.000.000');
        const patrimonio = screen.getByText('$10.000.000');
        expect(title).toBeInTheDocument();
        expect(subtitle1).toBeInTheDocument();
        expect(subtitle2).toBeInTheDocument();
        expect(documentType).toBeInTheDocument();
        expect(documentNumber).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
        expect(ingresos).toBeInTheDocument();
        expect(egresos).toBeInTheDocument();
        expect(patrimonio).toBeInTheDocument();
    });
});