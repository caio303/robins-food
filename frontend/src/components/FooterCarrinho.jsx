import { api } from "../api"
import { getValorEmReais } from "../utils"
import './FooterCarrinho.scss'

export const FooterCarrinho = ({ carrinho, taxaEntrega }) => {
    
    const calcularValorTotal = () => {
        const valorTotal = carrinho.itens.reduce((acum, curr) => acum + (curr.valor * curr.quantidade), 0)
        return valorTotal + taxaEntrega
    }

    const fazerPedido = () => {
        api.pedidos.fazerPedido(carrinho, calcularValorTotal())
    }
    
    return (
        <footer id="footer-carrinho">
            <p>Valor total: R$ {getValorEmReais(calcularValorTotal())}</p>
            <button id="confirmar-pedido" onClick={fazerPedido}>
                CONFIRMAR PEDIDO
            </button>
        </footer>
    )
}