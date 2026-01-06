import styled from "styled-components";
import Input from "./Input";

const DivEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

interface DivInputProps {
  text: string;
  type: string;
  name: string;
}

const DivInput = ({ text, type, name }: DivInputProps) => {
  return (
    <DivEstilizada>
      <label htmlFor={name}>{text}</label>
      <Input type={type} name={name} />
    </DivEstilizada>
  );
};

export default DivInput;
