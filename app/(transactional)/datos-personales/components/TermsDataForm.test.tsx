import { render, screen } from '@testing-library/react';
import { TermsDataForm } from './TermsDataForm';

jest.mock('./CheckBox', () => ({
  CheckBoxForm: ({ id }: { id: string }) => <input data-testid={id} />
}));

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    control: {}
  })
}));


describe('test <TermsDataForm/> component', () => {
    beforeEach(() =>
        render(<TermsDataForm />)
    );

    it('render all fields', () => {
        const title = screen.getByTestId('terminos_condiciones');
        const terms = screen.getByTestId('terminos');
        expect(title).toBeInTheDocument();
        expect(terms).toBeInTheDocument();
    });
});


