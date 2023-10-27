import { faArrowLeftLong } from "../../node_modules/@fortawesome/free-solid-svg-icons/index"
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index"
import { useNavigate } from "../../node_modules/react-router-dom/dist/index"
import { getValorEmReais } from "../utils"
import './HeaderCarrinho.scss'

export const HeaderCarrinho = ({ restaurante, taxaEntrega }) => {
    const navigate = useNavigate()
    return (
        <header id="header-carrinho">
            {restaurante && (
                <>
                    <div id="header-carrinho__voltar" onClick={() => navigate(-1)}> <FontAwesomeIcon icon={faArrowLeftLong}/> </div>
                    <img id="header-carrinho__img-restaurante" src={restaurante.imagem} alt={`Imagem de ${restaurante.nome}`}/>
                    <div id="header-carrinho__nome-restaurante">Carrinho - {restaurante.nome}</div>
                    <div id="header-carrinho__dados">
                        <div id="header-carrinho__dados__horario-funcionamento">{restaurante.horarioAbertura} às {restaurante.horarioFechamento}</div>
                        <div id="header-carrinho__dados__taxa-entrega"><span>R$ {getValorEmReais(taxaEntrega)}</span><span>Taxa de entrega</span></div>
                    </div>
                </>
            )}
        </header>
    )
}