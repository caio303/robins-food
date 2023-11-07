import { useSelector } from "../../../node_modules/react-redux/es/exports";
import { Navigate } from "../../../node_modules/react-router-dom/dist/index";
import { api } from "../../api";
import { ConteudoCarrinho } from "../../components/ConteudoCarrinho";
import { FooterCarrinho } from "../../components/FooterCarrinho";
import { HeaderCarrinho } from "../../components/HeaderCarrinho";
import './PaginaCarrinho.scss'

export const PaginaCarrinho = () => {
    const carrinho = useSelector(state => state.carrinhoReducers.carrinho)
    const restaurante = carrinho.restaurante
    const itensCarrinho = carrinho.itens

    const taxaEntrega = 2

    if (itensCarrinho.length < 1)
        return <Navigate to={'/inicio'}/>

    const valorCarrinho = carrinho.itens.reduce((acum, curr) => acum + (curr.valor * curr.quantidade), 0)
    const valorTotal =  valorCarrinho + taxaEntrega
    
    const confirmarPedido = () => {
        api.pedidos.fazerPedido(carrinho, valorTotal)
    }

    return (
        <div id="pagina-carrinho">
            <HeaderCarrinho restaurante={restaurante} taxaEntrega={taxaEntrega} />
            <ConteudoCarrinho itensCarrinho={carrinho.itens} idRestaurante={carrinho.restaurante.id} />
            <FooterCarrinho valorTotal={valorTotal} confirmarPedido={confirmarPedido} />
        </div>
    )
}