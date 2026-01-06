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
  id: string;
}

const DivInput = ({ text, type, id }: DivInputProps) => {
  return (
    <DivEstilizada>
      <label htmlFor={id}>{text}</label>
      <Input type={type} id={id} />
    </DivEstilizada>
  );
};

export default DivInput;
