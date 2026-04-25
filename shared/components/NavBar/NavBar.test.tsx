/* eslint-disable */

import { render, screen, fireEvent } from '@testing-library/react'
import { NavBar } from './NavBar'

jest.mock('next/image', () => (props: any) => {
  return <img {...props} />
})

jest.mock('next/link', () => {
  return ({ children, href, ...props }: any) => {
    return <a href={href} {...props}>{children}</a>
  }
})

describe('Test <NavBar/> Component', () => {
    beforeEach(() => {
        render(<NavBar />)
    })
  it('renders logo and desktop link', () => {
    const logo = screen.getByAltText(/logo/i)
    const link = screen.getByTestId('consulta_afiliacion_link')
    expect(logo).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })

  it('opens mobile menu', () => {
    const button = screen.getByRole('button')
    fireEvent.click(button)
    const mobileLink = screen.getByTestId('hamburguer_menu')
    expect(mobileLink).toBeInTheDocument()
  })

  it('closes mobile menu ', () => {
    const button = screen.getByRole('button')
    fireEvent.click(button)
    const closeButton = screen.getByText(/cerrar/i)
    fireEvent.click(closeButton)
    expect(closeButton).not.toBeVisible()
  })

  it('check home link', () => {
    const home = screen.getByTestId('home_link')
    expect(home).toHaveAttribute('href', '/home')
  })
   it('check afiliation link', () => {
    const afiliation = screen.getByTestId('consulta_afiliacion_mobile_link')
     expect(afiliation).toHaveAttribute('href', '/consulta-afiliacion')
  })
})