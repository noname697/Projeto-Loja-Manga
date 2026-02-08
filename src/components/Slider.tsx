import { useCallback, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 100%;
  max-height: 800px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

const SliderContent = styled.div<{ $indexAtivo: number }>`
  display: flex;
  transition: transform 0.5 ease-in-out;
  transform: ${({ $indexAtivo }) => `translateX(-${$indexAtivo * 100}%)`};
`;

const SlideImage = styled.img`
  min-width: 100%;
  height: 400px;
  object-fit: cover;
`;

const IndicadoresContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Dot = styled.button<{ $ativo: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${({ $ativo }) =>
    $ativo
      ? (props) => props.theme.colors.primaria
      : (props) => props.theme.colors.secundaria};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #666;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.colors.branco};
  border: none;
  margin: 0 50px;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const imagens = [
  "https://img.freepik.com/psd-premium/modelo-de-banner-do-youtube-para-livraria-online_23-2149043278.jpg?semt=ais_hybrid&w=740&q=80",
  "https://mondru.com/wp-content/uploads/2018/10/Banner-Livro-Slide-1-scaled.jpg",
  "https://editorabatistaregular.com.br/wp-content/uploads/2021/04/livro-banner-c.jpg",
];

const Slider = () => {
  const [ativo, setAtivo] = useState(0);

  const proximoSlide = useCallback(() => {
    setAtivo((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  }, []);

  const slideAnterior = () => {
    setAtivo((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      proximoSlide();
    }, 3000);
    return () => clearInterval(intervalo);
  }, [proximoSlide, ativo]);

  return (
    <SliderContainer>
      <SliderContent $indexAtivo={ativo}>
        {imagens.map((url, index) => (
          <SlideImage key={index} src={url} alt={`Slide ${index}`}></SlideImage>
        ))}
      </SliderContent>

      <NavButton style={{ left: 0 }} onClick={slideAnterior}>
        {" "}
        <FaArrowLeft size={30} />{" "}
      </NavButton>
      <NavButton style={{ right: 0 }} onClick={proximoSlide}>
        {" "}
        <FaArrowRight size={30} />{" "}
      </NavButton>

      <IndicadoresContainer>
        {imagens.map((_, index) => (
          <Dot
            key={index}
            $ativo={index === ativo}
            onClick={() => setAtivo(index)}
          />
        ))}
      </IndicadoresContainer>
    </SliderContainer>
  );
};

export default Slider;
