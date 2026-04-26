import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

const mockOnResume = jest.fn();
const mockOnAbandon = jest.fn();


describe('test <Modal /> component', () => {

    beforeEach(() => {
        jest.clearAllMocks();
        render(<Modal isOpen={true} onResume={mockOnResume} onAbandon={mockOnAbandon} />);
    });

    it('render fields', () => {
        const title = screen.getByText('Parece que tienes una afiliación en proceso');
        const subtitle = screen.getByText('Por favor selecciona la opción que más te convenza');
        const btnAbandon = screen.getByText('Abandonar afiliación');
        const btnResume = screen.getByText('Retomar afiliación');
        expect(title).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
        expect(btnAbandon).toBeInTheDocument();
        expect(btnResume).toBeInTheDocument();
    });
    it('check on resume fn exec', () => {
        const btnResume = screen.getByText('Retomar afiliación');
        fireEvent.click(btnResume);
        expect(mockOnResume).toHaveBeenCalled();
    });

    it('show text area & hidde btn resume', () => {
        const btnAbandon = screen.getByText('Abandonar afiliación');
        const btnResume = screen.queryByText('Retomar afiliación');
        fireEvent.click(btnAbandon);
        const textArea = screen.getByPlaceholderText('Escribe aquí...');
        expect(textArea).toBeInTheDocument();
        expect(btnResume).not.toBeInTheDocument();
    });


    it('check on abandon fn exec', () => {
        const btnAbandon = screen.getByText('Abandonar afiliación');
        fireEvent.click(btnAbandon);
        const textArea = screen.getByPlaceholderText('Escribe aquí...');
        fireEvent.change(textArea, { target: { value: 'No me interesa' } });
        fireEvent.click(btnAbandon);
        expect(mockOnAbandon).toHaveBeenCalledWith('No me interesa');
    });

});

describe('test <Modal /> component with isOpen false', () => {

    beforeEach(() =>
        render(<Modal isOpen={false} onResume={mockOnResume} onAbandon={mockOnAbandon} />)
    );

    it('not render', () => {
        const title = screen.queryByText('Parece que tienes una afiliación en proceso');
        expect(title).not.toBeInTheDocument();
    });
})
