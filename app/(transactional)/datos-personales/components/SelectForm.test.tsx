import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { SelectForm } from './SelectForm';
import { DOCUMENT_TYPE_OPTIONS } from '../../constants/data';


const Wrapper = ({ name }: { name: any }) => {
    const { control } = useForm();
    return (
        <SelectForm
            control={control}
            name={name}
            label="Tipo de documento"
            id="tipo_doc"
            options={DOCUMENT_TYPE_OPTIONS}
        />
    );
};

describe('test <SelectForm/> component', () => {
    beforeEach(() =>
        render(<Wrapper name="tipo_doc" />)
    );
    it('render component', () => {
        const label = screen.getByTestId('tipo');
        const input = screen.getByRole('combobox')
        expect(label).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })
    it('not render error when is a valid info', () => {
        const error = screen.queryByRole('alert');
        expect(error).not.toBeInTheDocument();
    })
})