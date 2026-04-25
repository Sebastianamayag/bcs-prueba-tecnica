// RequiresSection.test.tsx
import { render, screen } from '@testing-library/react';
import { RequiresSection } from './RequiresSection';
import { REQUIREMENTS } from '../data/requirement';

jest.mock('lucide-react', () => ({
  CheckCircle: (props: any) => (
    <svg data-testid="check-circle-icon" {...props}/>
  ),
  ClipboardList: (props: any) => (
    <svg data-testid="clipboard-list-icon" {...props} />
  ),
}));


describe('Test <RequiresSection /> component', () => {
    beforeEach(() => {
        render(<RequiresSection />);
    });

    it('debe renderizar la sección con el data-testid correcto', () => {
        const section = screen.getByTestId('requires');
        const CTA = screen.getByText('Lo que necesita para abrir su CTA');
        const items = screen.getAllByRole('listitem');
        const icons = screen.getAllByTestId('check-circle-icon');
        const clipboard = screen.getByTestId('clipboard-list-icon')
        expect(section).toBeInTheDocument();
        expect(CTA).toBeInTheDocument();
        expect(items).toHaveLength(REQUIREMENTS.length);
        expect(icons).toHaveLength(REQUIREMENTS.length);
        expect(clipboard).toBeInTheDocument();
    });

});