import { render, screen } from '@testing-library/react';
import { BasicDataForm } from './BasicDataForm';

jest.mock('./InputForm', () => ({
  InputForm: ({ id }: { id: string }) => <input data-testid={id} />
}));

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    control: {}
  })
}));


describe('test <BasicDataForm/> component', () => {
    beforeEach(() =>
        render(<BasicDataForm />)
    );

    it('render all fields', () => {
        const title = screen.getByTestId('datos_basicos');
        const documentNumber = screen.getByTestId('num_doc');
        const tipeDocument = screen.getByTestId('tipo');
        const firstName =screen.getByTestId('primer_nombre');
        const LastName= screen.getByTestId('segundo_nombre');
        const firstSurname = screen.getByTestId('primer_apellido');
        const lastSurname = screen.getByTestId('segundo_apellido');
        expect(title).toBeInTheDocument();
        expect(documentNumber).toBeInTheDocument();
        expect(tipeDocument).toBeInTheDocument();
        expect(firstName).toBeInTheDocument();
        expect(LastName).toBeInTheDocument();
        expect(firstSurname).toBeInTheDocument();
        expect(lastSurname).toBeInTheDocument();
    });
});


