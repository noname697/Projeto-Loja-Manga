import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../services/axios";
import type Manga from "../../Interfaces/Manga";

const CardsContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;



const Cards = () => {
    const [mangas, setMangas] = useState([]);

    useEffect(() => {
        const fetchMangas = async () => {
            try{
                const listaMangas = await api.get("/produtos", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("@App:token")}`
                    }
                })
                setMangas(listaMangas.data)
            } catch (error){
                console.error("Erro: ", error)
            }
        }
        fetchMangas()
    }, [])
    

  return (
    <CardsContainer>
      {mangas.map((manga: Manga) => (
        <div key={manga.id}>{manga.nome}</div>
        // Cards.map
      ))}
    </CardsContainer>
  );
};

export default Cards;
