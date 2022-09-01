import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("Renders correctly", () => {
    render(<Header />);

    const logo = screen.getByText("Animados");

    expect(logo).toBeInTheDocument();
  });
});
