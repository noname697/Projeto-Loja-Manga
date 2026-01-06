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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DivInput = ({ text, type, id, onChange }: DivInputProps) => {
  return (
    <DivEstilizada>
      <label htmlFor={id}>{text}</label>
      <Input type={type} id={id} onChange={onChange} />
    </DivEstilizada>
  );
};

export default DivInput;
