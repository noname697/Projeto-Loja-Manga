import { useContext } from "react";
import styled from "styled-components";
import { ContextLogin } from "../assets/contexts/ContextLogin";

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
  const ctx = useContext(ContextLogin);
  return (
    <InputEstilizado
      type={type}
      id={id}
      onChange={
        id === "email"
          ? (e) => ctx?.setEmail(e.target.value)
          : (e) => ctx?.setSenha(e.target.value)
      }
    />
  );
};

export default Input;
