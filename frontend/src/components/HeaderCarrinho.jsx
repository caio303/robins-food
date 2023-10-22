import { useNavigate } from "../../node_modules/react-router-dom/dist/index"
import './HeaderCarrinho.scss'

export const HeaderCarrinho = ({ restaurante }) => {
    const navigate = useNavigate()
    return (
        <header id="header-carrinho">
            {restaurante && (
                <>
                    <div onClick={() => navigate(-1)}>Voltar</div>
                    <div id="header-carrinho__nome-restaurante">{restaurante.nome}</div>
                    <img id="header-carrinho__img-restaurante" src={restaurante.imagem} alt={`Imagem de ${restaurante.nome}`}/>
                </>
            )}
        </header>
    )
}