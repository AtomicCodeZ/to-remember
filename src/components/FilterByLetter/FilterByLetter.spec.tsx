import { render, screen } from "@testing-library/react";
import { FindByLetter } from ".";

describe("FilterByLetter", () => {
  it("Should render the filter by letter", () => {
    render(<FindByLetter />);

    const todos = screen.getByText("Todos");

    expect(todos).toBeInTheDocument();
  });
});
