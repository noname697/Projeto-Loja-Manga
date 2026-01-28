import { useContext } from "react";
import styled from "styled-components";
import { ContextLogin } from "../assets/contexts/ContextLogin.ts";

const InputEstilizado = styled.input`
  border: 1px solid ${(props) => props.theme.colors.secundaria};
  outline: none;
  width: 500px;
  padding: 10px;
  border-radius: 5px;
`;

interface InputProps {
  type: string;
  id: string;
}

const Input = ({ type, id }: InputProps) => {
  const context = useContext(ContextLogin);

  if (!context) return null;

  const value = id === "email" ? context.email : context.senha;
  const setter = id === "email" ? context.setEmail : context.setSenha;

  return (
    <InputEstilizado
      id={id}
      type={type}
      value={value}
      onChange={(e) => setter(e.target.value)}
      // onChange={() => console.log(id)}
    />
  );
};

export default Input;
