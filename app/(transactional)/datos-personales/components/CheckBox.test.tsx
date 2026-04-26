import { render, screen } from '@testing-library/react'
import { CheckBoxForm } from './CheckBox'
import { useForm, FormProvider } from 'react-hook-form'

jest.mock('@/shared/components/Input/Input', () => ({
    Input: ({ label, hasError, errorMessage, type, id }: any) => (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} data-testid={id} />
            {hasError && <span role="alert">{errorMessage}</span>}
        </div>
    )
}));

const Wrapper = ({ name }: { name: any }) => {
    const methods = useForm()
    return (
        <FormProvider {...methods}>
            <CheckBoxForm
                control={methods.control}
                name={name}
                label="Acepto términos"
                id="terminos"
            />
        </FormProvider>
    )
}

describe('test <CheckBoxForm /> component', () => {
    beforeEach(() =>
        render(<Wrapper name="terminos" />)
    );

    it('render checkbox', () => {
        const terms = screen.getByTestId('terminos');
        expect(terms).toBeInTheDocument();
    });

    it('no show error', () => {
        const error = screen.queryByRole('alert');
        expect(error).not.toBeInTheDocument();
    });

})