import Slider from "../../components/Slider"
import Titulo from "../../components/Titulo"

const PaginaInicial = () => {
    return (
        <>
            <Slider />
            <Titulo tamanho={50} cor="#3D9DD9" peso={500}>Bem vindo a nossa loja!</Titulo>
            { /*<Cards />*/}
        </>
    )
}

export default PaginaInicial