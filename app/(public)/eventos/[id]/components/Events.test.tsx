import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Events } from "./Events"
import { event } from "../type"

const mockEventos: event[] = [
    {
        type: 'CREADO',
        date: '2026-04-24T10:00:00',
        description: 'Solicitud creada',
        id: "0005"
    },
    {
        type: 'ACTUALIZADO',
        date: '2026-04-24T10:05:00',
        description: 'Datos actualizados',
        id: "00080"
    },
    {
        type: 'SIMULADO',
        date: '2026-04-24T10:06:00',
        description: 'Simulación de oferta realizada',
        id: "000100"
    },
    {
        type: 'RECHAZADO',
        date: '2026-04-24T10:07:00',
        description: 'Solicitud rechazada',
        id: "000101"
    }
]

describe("test <Events /> component with events", () => {
    beforeEach(() => {
        render(<Events eventos={mockEventos} />)
    });

    it("render title", () => {
        const title = screen.getByText("Eventos de la solicitud");
        expect(title).toBeInTheDocument();
    });

    it("check all events table", () => {
        const types = screen.getAllByTestId('event-table-type');
        expect(types).toHaveLength(mockEventos.length);
    });

    it("check all events div", () => {
        const types = screen.getAllByTestId('event-type');
        expect(types).toHaveLength(mockEventos.length);
    });

})

describe('test <Events /> component withouth events', () => {
    beforeEach(() => {
        render(<Events eventos={[]} />)
    });
    it("render title", () => {
        const title = screen.getByText("Eventos de la solicitud");
        expect(title).toBeInTheDocument();
    });
    it('render empty state', () => {
        const empty = screen.getByText(/aún no hay eventos registrados para esta solicitud\./i);
        expect(empty).toBeInTheDocument();
    });
})
