import { render, screen } from "@testing-library/react"
import { Input } from './Input';
import { ERROR_MESSAGES } from "@/shared/constants.ts/errorMessages";

const mockLabel = 'Primer Nombre';
const mockId = 'Primer Nombre'
const mockTestId = 'primer_nombre'

describe('Test <Input /> component with all fields', () => {
  beforeEach(()=> {
    render(<Input data-testId={mockTestId} hasError errorMessage={ERROR_MESSAGES.required} label={mockLabel} id={mockId} />)
  });
  it('render input & error message',()=> {
    const label = screen.getByText(/primer nombre/i);
    const input = screen.getByTestId(mockTestId);
    const error = screen.getByRole('alert');
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  })
})

describe('Test <Input /> component except error', () => {
  beforeEach(()=> {
    render(<Input data-testId={mockTestId} hasError={false} errorMessage='' label={mockLabel} id={mockId} />)
  })
  it('render input & not render error message',()=> {
    screen.debug(undefined, Infinity);
    const label = screen.getByText(/primer nombre/i);
    const input = screen.getByTestId(mockTestId);
    const error = screen.queryByRole('alert');
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(error).not.toBeInTheDocument();
  })
})
