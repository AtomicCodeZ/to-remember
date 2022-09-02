import { Container } from "./styles";

const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");

export const FindByLetter: React.FC = () => {
  return (
    <Container>
      <a href="/" className="filter-link filter-link--active">
        Todos
      </a>

      {alphabet.map((letter: string) => (
        <a href={letter} className="filter-link" key={letter}>
          {letter.toLocaleUpperCase()}
        </a>
      ))}
    </Container>
  );
};
