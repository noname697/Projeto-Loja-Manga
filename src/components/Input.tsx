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
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, id, onChange }: InputProps) => {
  return <InputEstilizado type={type} id={id} onChange={onChange} />;
};

export default Input;
