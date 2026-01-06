import styled from "styled-components";
import DivInput from "../components/DivInput";
import Button from "../components/Button";
import { useState } from "react";

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
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, senha);
  };

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
          <DivInput
            text="Email"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <DivInput
            text="Senha"
            type="password"
            id="senha"
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button onClick={(e: React.FormEvent) => submitForm(e)}>
            Entrar
          </Button>
        </FormularioEstilizado>
      </DivEstilizada>
    </Container>
  );
}

export default App;
