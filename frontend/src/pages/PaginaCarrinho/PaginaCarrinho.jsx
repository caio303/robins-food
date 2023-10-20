import { useSelector } from "../../../node_modules/react-redux/es/exports";
import { ConteudoCarrinho } from "../../components/ConteudoCarrinho";
import { FooterCarrinho } from "../../components/FooterCarrinho";
import { HeaderCarrinho } from "../../components/HeaderCarrinho";

export const PaginaCarrinho = () => {
    const carrinho = useSelector(state => state.carrinhoReducers.carrinho)
    const restaurantes = useSelector(state => state.restauranteReducers.restaurantes)
    const restaurante = restaurantes.find(res=> res.id === carrinho.restauranteId)

    return ( 
        <main id="pagina-carrinho">
            <HeaderCarrinho restaurante={restaurante} />
            <ConteudoCarrinho carrinho={carrinho} />
            <FooterCarrinho listaItens={carrinho.itens} />
        </main>
    )
}