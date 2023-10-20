import { getValorEmReais } from "../utils"

export const FooterCarrinho = ({ listaItens }) => {
    
    const calcularValorTotal = () => {
        const listaCompleta = []
        listaItens.forEach((item, index) => listaCompleta[index] = item.valor * item.quantidade)
        return getValorEmReais(listaCompleta)
    }
    
    return (
        <footer id="footer-carrinho">
            Valor total: R$ {calcularValorTotal()}
        </footer>
    )
}