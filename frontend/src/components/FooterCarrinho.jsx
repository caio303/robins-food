import { getValorEmReais } from "../utils"
import './FooterCarrinho.scss'

export const FooterCarrinho = ({ listaItens }) => {
    
    const calcularValorTotal = () => {
        const listaCompleta = []
        listaItens.forEach((item, index) => listaCompleta[index] = item.valor * item.quantidade)
        return getValorEmReais(listaCompleta)
    }
    
    return (
        <footer id="footer-carrinho">
            <p>Valor total: R$ {calcularValorTotal()}</p>
            <button id="confirmar-pedido">
                CONFIRMAR PEDIDO
            </button>
        </footer>
    )
}