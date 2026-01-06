import styled from "styled-components";
import DivInput from "../components/DivInput";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  padding: 20px;
  gap: 20px;
`;

const FormularioEstilizado = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

function App() {
  return (
    <Container>
      <DivEstilizada>
        <h1
          style={{
            borderBottom: "2px solid #000",
            fontSize: "24px",
            paddingBottom: "5px",
            display: "inline-block",
          }}
        >
          Login
        </h1>
        <FormularioEstilizado>
          <DivInput text="Email" type="email" name="email" />
          <DivInput text="Senha" type="password" name="senha" />
        </FormularioEstilizado>
      </DivEstilizada>
    </Container>
  );
}

export default App;
