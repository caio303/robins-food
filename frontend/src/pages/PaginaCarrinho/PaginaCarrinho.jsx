import { useDispatch } from "../../../node_modules/react-redux/es/exports";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { useSelector } from "react-redux";
import { actions } from "../../actions/carrinho.actions";
import { getValorEmReais } from "../../utils";

export const PaginaCarrinho = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const carrinho = useSelector(state => state.carrinhoReducers.carrinho)

    const removerItemDoCarrinho = (itemId) => dispatch(actions.removerItem(itemId))

    const calcularValorTotal = () => {
        const listaCompleta = []
        carrinho.itens.forEach((item, index) => listaCompleta[index] = item.valor * item.quantidade)
        return getValorEmReais(listaCompleta)
    }

    return (
        <>
            <a onClick={() => navigate(-1)}>Voltar</a>
            <div>CARRINHO</div>
            <div>{carrinho.restauranteId}</div>
             {carrinho.itens.map(item => (
                <div onClick={() => removerItemDoCarrinho(item.id)} key={item.id}>
                        {item.quantidade} x {item.nome} R$ {getValorEmReais(item.valor * item.quantidade)}
                </div> 
             ))}
             Valor total: R$ {calcularValorTotal()}
        </>
    )
}