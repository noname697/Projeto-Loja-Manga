import { useContext } from "react";
import styled from "styled-components";
import { ContextLogin } from "../assets/contexts/ContextLogin";

const HeaderEstilizado = styled.header`
  background-color: ${(props) => props.theme.colors.primaria};
  height: 75px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0 20px;
`;

const ListaEstilizada = styled.ul`
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
  li {
    color: ${(props) => props.theme.colors.branco};
    cursor: pointer;
  }
`;

const ContaEstilizada = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid white;
  }
`;

const Header = () => {
  const { user } = useContext(ContextLogin);

  // if (!user) return null;

  return (
    <HeaderEstilizado>
      <div />
      <ListaEstilizada>
        <li>Home</li>
        <li>Favoritos</li>
        <li>Coleções</li>
        <li>Categorias</li>
      </ListaEstilizada>
      <ContaEstilizada>
        {user ? (
          user.foto ? (
            <img
              src={user.foto}
              alt={user.nome}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          ) : (
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#ccc",
                borderRadius: "50%",
              }}
            />
          )
        ) : (
          <li style={{ listStyle: "none", color: "white", cursor: "pointer" }}>
            Entrar
          </li>
        )}
      </ContaEstilizada>
    </HeaderEstilizado>
  );
};

export default Header;
