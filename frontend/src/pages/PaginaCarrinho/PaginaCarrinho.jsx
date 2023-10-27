import { useSelector } from "../../../node_modules/react-redux/es/exports";
import { Navigate } from "../../../node_modules/react-router-dom/dist/index";
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

    return (
        <div id="pagina-carrinho">
            <HeaderCarrinho restaurante={restaurante} taxaEntrega={taxaEntrega} />
            <ConteudoCarrinho carrinho={carrinho} />
            <FooterCarrinho carrinho={carrinho} taxaEntrega={taxaEntrega} />
        </div>
    )
}