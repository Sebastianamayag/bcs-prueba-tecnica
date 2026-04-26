import { render, screen } from "@testing-library/react";
import { SimulateCard } from "./SimulationCard";

const mockData = {
    tasaInteresMensual: 1.2,
    tasaInteresAnual: 14.4,
    beneficios: ["Sin cuota de manejo", "Transferencias gratis"],
    ofertaId: "ABC123",
};

describe("test <SimulateCard/> component ", () => {
    beforeEach(() =>
        render(<SimulateCard data={mockData} />)
    );

    it("render fields", () => {
        const title = screen.getByText("Oferta generada");
        const subtitle = screen.getByText("Cuenta Ahorros Digital");
        const simulation = screen.getByText("Simulación exitosa");
        const percentage = screen.getByText("1.2%");
        const otherPercentage = screen.getByText("14.4%");
        const offer = screen.getByText(/ID oferta: ABC123/);
        expect(title).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
        expect(simulation).toBeInTheDocument();
        expect(percentage).toBeInTheDocument();
        expect(otherPercentage).toBeInTheDocument();
        expect(offer).toBeInTheDocument();
    });

    it("check benefits", () => {
        mockData.beneficios.forEach((beneficio) => {
            const benefict = screen.getByText(beneficio);
            expect(benefict).toBeInTheDocument();
        });
    });

});

describe('test <SimulateCard/> component with data null', () => {
    beforeEach(() =>
        render(<SimulateCard data={null} />)
    );
    it("render not offer", () => {
        const title = screen.getByTestId("no_ofert");
        expect(title).toBeInTheDocument();
    });
});

