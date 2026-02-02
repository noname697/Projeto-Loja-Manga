import { Link } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5rem;
`;

const DivEstilizada = styled.div`
  text-align: center;
  h1 {
    font-size: 30rem;
    margin-top: 50px;
  }
  h2 {
    font-size: 3rem;
  }
`;

const BotaoEstlizado = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: ${(props) => props.theme.colors.background};
    border: none;
    padding: 20px 40px;
    border-radius: 30px;
    transition: 0.3s ease;
    font-size: 1.5rem;
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.primaria};
      color: #fff;
    }
  }
`;

const Page404 = () => {
  return (
    <Container>
      <DivEstilizada>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
      </DivEstilizada>
      <BotaoEstlizado>
        <Link to="/">
          <button>Voltar para o ínicio</button>
        </Link>
      </BotaoEstlizado>
    </Container>
  );
};

export default Page404;
