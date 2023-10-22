import { useSelector } from "../../../node_modules/react-redux/es/exports";
import { ConteudoCarrinho } from "../../components/ConteudoCarrinho";
import { FooterCarrinho } from "../../components/FooterCarrinho";
import { HeaderCarrinho } from "../../components/HeaderCarrinho";

export const PaginaCarrinho = () => {
    const carrinho = useSelector(state => state.carrinhoReducers.carrinho)
    const restaurante = carrinho.restaurante

    return (
        <div id="pagina-carrinho">
            <HeaderCarrinho restaurante={restaurante} />
            <ConteudoCarrinho carrinho={carrinho} />
            <FooterCarrinho listaItens={carrinho.itens} />
        </div>
    )
}