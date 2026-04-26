import { render, screen } from '@testing-library/react';
import { InputForm } from './InputForm';
import { useForm } from 'react-hook-form';

jest.mock('@/shared/components/Input/Input', () => ({
    Input: ({ label, hasError, errorMessage }: any) => (
        <div>
            <label>{label}</label>
            {hasError && <span>{errorMessage}</span>}
            <input data-testid="input" />
        </div>
    )
}));

const Wrapper = ({ name }: { name: any }) => {
    const { control } = useForm();
    return (
        <InputForm
            control={control}
            name={name}
            label="Número de documento"
            id="input-test"
        />
    );
};

describe('test <InputForm/> component', () => {
    beforeEach(() =>
        render(<Wrapper name="numero_documento" />)
    );
    it('render component', () => {
        const label = screen.getByText('Número de documento');
        const input = screen.getByTestId('input');
        expect(label).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })
    it('not render error when is a valid info', () => {
        const error = screen.queryByRole('alert');
        expect(error).not.toBeInTheDocument();
    })
})