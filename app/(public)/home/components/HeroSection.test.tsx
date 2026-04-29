/* eslint-disable */
import { render, screen } from "@testing-library/react";
import { HeroSection } from "./HeroSection";

jest.mock("next/link", () => {
  return ({ children, href, ...props }: any) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

describe("HeroSection", () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  it("render all components", () => {
    const section = screen.getByTestId("hero_section");
    const title = screen.getByText("Credito de Libre Inversión");
    const subTitle = screen.getByText(
      /Solicita tu credito de Libre inversión de forma rápida y sencilla/i,
    );
    const img = screen.getByAltText("persona");
    const link = screen.getByTestId("afiliacion");
    expect(section).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it("Check link", () => {
    const link = screen.getByTestId("afiliacion");
    expect(link).toHaveAttribute("href", "/afiliacion");
  });
});
