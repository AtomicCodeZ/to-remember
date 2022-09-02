import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("Renders logo correctly", () => {
    render(<Header />);

    const logo = screen.getByText("Animados");

    expect(logo).toBeInTheDocument();
  });

  it("Redirects to the main page when the logo is clicked", () => {
    render(<Header />);

    const logo = screen.getByText("Animados");

    expect(logo.getAttribute("href")).toEqual("/");
  });

  it("Renders navigation links correctly", () => {
    render(<Header />);

    const inicio = screen.getByText("Início");
    const lista = screen.getByText("Lista");
    const gêneros = screen.getByText("Gêneros");
    const novos = screen.getByText("Novos Episódios");

    expect(inicio).toBeInTheDocument();
    expect(lista).toBeInTheDocument();
    expect(gêneros).toBeInTheDocument();
    expect(novos).toBeInTheDocument();
  });

  it("Redirects the navigation links correctly", () => {
    render(<Header />);

    const inicio = screen.getByText("Início");
    const lista = screen.getByText("Lista");
    const gêneros = screen.getByText("Gêneros");
    const novos = screen.getByText("Novos Episódios");

    expect(inicio.getAttribute("href")).toEqual("/");
    expect(lista.getAttribute("href")).toEqual("/lista");
    expect(gêneros.getAttribute("href")).toEqual("/generos");
    expect(novos.getAttribute("href")).toEqual("/novos-episodios");
  });

  it("Renders search input correctly", () => {
    render(<Header />);

    const search = screen.getByPlaceholderText("Buscar");

    expect(search).toBeInTheDocument();
  });
});
