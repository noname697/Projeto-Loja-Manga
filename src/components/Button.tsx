import styled from "styled-components";

const BotaoEstilizado = styled.button`
  background: ${(props) => props.theme.colors.primaria};
  border: 1px solid #fff;
  padding: 5px 50px;
  border-radius: 5px;
  color: white;
  letter-spacing: 1px;
  font-size: 24px;
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.FormEvent) => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <BotaoEstilizado onClick={onClick}>{children}</BotaoEstilizado>;
};

export default Button;
