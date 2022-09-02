import { FindByLetter } from "../../components/FilterByLetter";
import { Header } from "../../components/Header";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <FindByLetter />
    </Container>
  );
};

export default Home;
