import { useDispatch } from "../../node_modules/react-redux/es/exports"
import { getValorEmReais } from "../utils"
import { actions as carrinhoActions } from "../actions/carrinho.actions"

export const ConteudoCarrinho = ({ carrinho }) => {
    const dispatch = useDispatch()
    const removerItemDoCarrinho = (itemId) => dispatch(carrinhoActions.removerItem(itemId))

    return (
        <main id="conteudo-carrinho">
             {carrinho.itens.map(item => (
                <div onClick={() => removerItemDoCarrinho(item.id)} key={item.id}>
                        {item.quantidade} x {item.nome} R$ {getValorEmReais(item.valor * item.quantidade)}
                </div> 
             ))}
        </main>
    )
}