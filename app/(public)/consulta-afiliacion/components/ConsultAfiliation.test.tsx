import { render, screen } from '@testing-library/react'
import { ConsultAfiliation } from './ConsultAfiliation'
import { useConsult } from '../hooks/useConsultat'
import { consult } from '../type/consult';

jest.mock('../hooks/useConsultat');

jest.mock('@/shared/components/Input/Input', () => ({
    Input: () => <input data-testid="input" />
}));

jest.mock('@/shared/components/Button/Button', () => ({
    Button: ({ children, onClick }: any) => <button onClick={onClick}>{children}</button>
}));

jest.mock('@/shared/components/Select/Select', () => ({
    Select: () => <select data-testid="select" />
}));

jest.mock('./Table', () => ({
    Table: () => <div data-testid="table" />
}));

jest.mock('next/link', () => {
    const MockLink = ({ children, href }: any) => <a href={href}>{children}</a>
    MockLink.displayName = 'MockLink'
    return MockLink
});


const mockUseConsult = {
    documentNumber: '',
    handleValidate: jest.fn(),
    onChange: jest.fn(),
    error: null,
    handleConsult: jest.fn(),
    data: null,
    setStatus: jest.fn(),
    status: '',
    handleFilter: jest.fn(),
    clearFilter: jest.fn(),
    filterData: null,
}

const mockData: consult[] = [
    {
        numero_afiliacion: '123',
        createdAt: '2026-04-26T10:00:00',
        nombre: 'Juan Pérez',
        estado: 'En curso',
        numero_documento: '1231546',
        updatedAt: '2026-04-26T10:20:00'
    },
    {
        numero_afiliacion: '456',
        createdAt: '2026-04-25T10:00:00',
        nombre: 'María Gómez',
        estado: 'Aprovada',
        numero_documento: '66554',
        updatedAt: '2026-04-25T11:00:00'
    },
]

describe('test <ConsultAfiliation/> component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (useConsult as jest.Mock).mockReturnValue(mockUseConsult);
        render(<ConsultAfiliation />);
    });
    it('render section', () => {
        const section = screen.getByTestId('consultant');
        const title = screen.getByText('Detalle de la solicitud');
        const subTitle = screen.getByText('Para consultar ingrese el número de cédula.');
        const search = screen.getByTestId('search');
        const input = screen.getByTestId('input');
        const btnSearch = screen.getByText('Buscar');
        expect(section).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(subTitle).toBeInTheDocument();
        expect(search).toBeInTheDocument()
        expect(input).toBeInTheDocument()
        expect(btnSearch).toBeInTheDocument()
    });


    it('not render filters', () => {
        const select = screen.queryByTestId('select');
        const table = screen.queryByTestId('table');
        expect(select).not.toBeInTheDocument();
        expect(table).not.toBeInTheDocument();
    });

});

describe('test <ConsultAfiliation/> component with data', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (useConsult as jest.Mock).mockReturnValue({
            ...mockUseConsult,
            data: mockData
        });
        render(<ConsultAfiliation />);
    });
    it('show select & table', () => {
        const select = screen.getByTestId('select');
        const table = screen.getByTestId('table');
        expect(select).toBeInTheDocument();
        expect(table).toBeInTheDocument();
    });

})
