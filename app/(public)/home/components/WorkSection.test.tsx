// WorksSection.test.tsx
import { render, screen } from '@testing-library/react';
import { WorksSection } from './WorksSection';
import { STEPS } from '../types/work.type';

jest.mock('lucide-react', () => ({
  FileText: (props: any) => <svg data-testid="icon" {...props} />,
  CheckCircle: (props: any) => <svg data-testid="icon" {...props} />,
  CheckCircle2: (props: any) => <svg data-testid="icon" {...props} />,
}));

describe('Test <WorksSection/> component', () => {
  beforeEach(() => {
    render(<WorksSection />);
  });

  it('render all fields', () => {
    const section = screen.getByTestId('requires');
    const title = screen.getByRole('heading', { level: 2 });
    const subTitle = screen.getByRole('heading', { level: 3 });
    const icons = screen.getAllByTestId('icon');
    expect(section).toBeInTheDocument();
    expect(title).toHaveTextContent('¿Como funciona?');
    expect(subTitle).toHaveTextContent('Asi de facil es obtener su cuenta corriente');
    expect(icons).toHaveLength(STEPS.length);
  });
});