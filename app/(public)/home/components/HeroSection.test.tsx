import { render, screen } from '@testing-library/react'
import { HeroSection } from './HeroSection'

jest.mock('next/link', () => {
  return ({ children, href, ...props }: any) => {
    return <a href={href} {...props}>{children}</a>
  }
})

describe('HeroSection', () => {
  beforeEach(() => {
    render(<HeroSection />)
  })

  it('render all components', () => {
    const section = screen.getByTestId('hero_section');
    const title = screen.getByText('Cuenta Ahorros Digital');
    const subTitle = screen.getByText(/Abre tu cuenta de ahorros/i);
    const img = screen.getByAltText('persona');
    const link = screen.getByTestId('consulta_afiliacion');
    expect(section).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  })

  it('Check link', () => {
    const link = screen.getByTestId('consulta_afiliacion');
    expect(link).toHaveAttribute('href', '/consulta-afiliacion');
  })


})