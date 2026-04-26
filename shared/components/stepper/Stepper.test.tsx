import { render, screen } from '@testing-library/react';
import { Stepper } from './Stepper';

jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode, href: string }) => <a href={href}>{children}</a>
  MockLink.displayName = 'MockLink'
  return MockLink
})

describe('test <Stepper /> component', () => {
  beforeEach(() =>{
    render(<Stepper latsStepComppleted={0} />);
  })
  it('render all steps', () => {
    const first = screen.getByText('Inicio');
    const second = screen.getByText('Información personal');
    const third = screen.getByText('Verificación');
    expect(first).toBeInTheDocument();
    expect(second).toBeInTheDocument();
    expect(third).toBeInTheDocument();
  })

  it('shows stepper id', () => {
    const first = screen.getByText('1');
    const second = screen.getByText('2');
    const third = screen.getByText('3');
    expect(first).toBeInTheDocument();
    expect(second).toBeInTheDocument();
    expect(third).toBeInTheDocument();
  })

  it('not render links', () => {
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

});


describe('test <Stepper /> component whith steps completed', () => { 
  beforeEach(()=> {
    render(<Stepper latsStepComppleted={3} />);
  });
   it('not show id ', () => {
    const first = screen.queryByText('1');
    const second = screen.queryByText('2');
    const third = screen.queryByText('3');
    expect(first).not.toBeInTheDocument()
    expect(second).not.toBeInTheDocument()
    expect(third).not.toBeInTheDocument()
  });
    it('check render links', () => {
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3)
  })
});
