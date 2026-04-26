import { render, screen } from '@testing-library/react';
import { FinancialDataForm } from './FinancialDataForm';

jest.mock('./InputForm', () => ({
  InputForm: ({ id }: { id: string }) => <input data-testid={id} />
}));

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    control: {}
  })
}));


describe('test <FinancialDataForm/> component', () => {
    beforeEach(() =>
        render(<FinancialDataForm />)
    );

    it('render all fields', () => {
        const title = screen.getByTestId('datos_financieros');
        const cargo = screen.getByTestId('cargo');
        const ingresos = screen.getByTestId('ingresos');
        const egresos =screen.getByTestId('egresos');
        const patrimonio= screen.getByTestId('patrimonio');
        expect(title).toBeInTheDocument();
        expect(cargo).toBeInTheDocument();
        expect(ingresos).toBeInTheDocument();
        expect(egresos).toBeInTheDocument();
        expect(patrimonio).toBeInTheDocument();
    });
});


