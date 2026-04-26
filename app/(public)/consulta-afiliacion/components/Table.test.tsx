import { render, screen } from '@testing-library/react'
import { Table } from './Table'
import { consult } from '../type/consult'

jest.mock('next/link', () => {
    const MockLink = ({ children, href }: { children: React.ReactNode, href: string }) => <a href={href}>{children}</a>
    MockLink.displayName = 'MockLink'
    return MockLink
})

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

describe('test <Table /> component', () => {

    it('message when data is empty', () => {
        render(<Table data={[]} />)
        const title = screen.getByText('No se encontraron resultados');
        expect(title).toBeInTheDocument();
    });

    it('render data', () => {
        render(<Table data={mockData} />)
        const secion = screen.getByTestId('data-search');
        const title = screen.getByText('Resultados');
        expect(screen.getByTestId('data-search')).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });
})