import Cards from "../../components/Cards/Cards";
import Slider from "../../components/Slider";
import Titulo from "../../components/Titulo";

const PaginaInicial = () => {
  return (
    <>
      <Slider />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Titulo tamanho={50} cor="#3D9DD9" peso={500}>
          Bem vindo a nossa loja!
        </Titulo>
      </div>
      <Cards />
    </>
  );
};

export default PaginaInicial;
