import { getValorEmReais } from "../utils"
import './FooterCarrinho.scss'

export const FooterCarrinho = ({ valorTotal, confirmarPedido }) => {    
    return (
        <footer id="footer-carrinho">
            <p>Valor total: R$ {getValorEmReais(valorTotal)}</p>
            <button id="confirmar-pedido" onClick={confirmarPedido}>
                CONFIRMAR PEDIDO
            </button>
        </footer>
    )
}