import styled from "styled-components";

const InputEstilizado = styled.input`
  border: 1px solid ${(props) => props.theme.colors.secundaria};
  outline: none;
  width: 500px;
  padding: 10px;
  border-radius: 5px;
`;

interface InputProps {
  type: string;
  name: string;
}

const Input = ({ type, name }: InputProps) => {
  return <InputEstilizado type={type} name={name} />;
};

export default Input;
