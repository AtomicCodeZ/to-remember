import { Container } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <div className="logo">
        <a href="/" className="logo__title">
          Animados
        </a>
      </div>

      <div className="link-group">
        <div className="navigation">
          <a href="/" className="navigation__link">
            Início
          </a>
          <a href="/lista" className="navigation__link">
            Lista
          </a>
          <a href="/generos" className="navigation__link">
            Gêneros
          </a>
          <a href="/novos-episodios" className="navigation__link">
            Novos Episódios
          </a>
        </div>

        <div className="search">
          <input type="search" placeholder="Buscar" className="search__input" />
        </div>
      </div>
    </Container>
  );
};
