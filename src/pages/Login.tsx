import styled from "styled-components";
import DivInput from "../components/DivInput";
import Button from "../components/Button";
import { useContext } from "react";
import { ContextLogin } from "../assets/contexts/ContextLogin";
import { useNavigate } from "react-router";

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

function Login() {
  const { signIn } = useContext(ContextLogin);
  const navigate = useNavigate();

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn();
      navigate("/teste");
    } catch (erro) {
      alert({ manesagem: "Erro ao efetuar login.", erro: erro });
    }
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
            <DivInput text="Email" type="email" id="email" />
            <DivInput text="Senha" type="password" id="senha" />
            <Button onClick={(e: React.FormEvent) => submitForm(e)}>
              Entrar
            </Button>
          </FormularioEstilizado>
        </DivEstilizada>
      </Container>
  );
}

export default Login;
