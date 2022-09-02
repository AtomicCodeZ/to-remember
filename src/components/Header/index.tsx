import { Container } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <div className="logo">
        <a href="/" className="logo__title">
          Animados
        </a>
      </div>

      <div className="navigation">
        <a href="/" className="navigation_link">
          Início
        </a>
        <a href="/lista" className="navigation_link">
          Lista
        </a>
        <a href="/generos" className="navigation_link">
          Gêneros
        </a>
        <a href="/novos-episodios" className="navigation_link">
          Novos Episódios
        </a>
      </div>

      <div className="search">
        <input type="search" placeholder="Buscar" className="search__input" />
      </div>
    </Container>
  );
};
