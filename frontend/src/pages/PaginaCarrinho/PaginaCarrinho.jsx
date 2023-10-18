import { useDispatch } from "../../../node_modules/react-redux/es/exports";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { useSelector } from "react-redux";
import { actions } from "../../actions/carrinho.actions";

export const PaginaCarrinho = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const carrinho = useSelector(state => state.carrinhoReducers.carrinho)

    const removerItemDoCarrinho = (itemId) => dispatch(actions.removerItem(itemId))

    return (
        <>
            <div onClick={() => navigate(-1)}>Voltar</div>
            <div>CARRINHO</div>
            <div>{carrinho.restauranteId}</div>
             {carrinho.itens.map(item => (
                <div onClick={() => removerItemDoCarrinho(item.id)} key={item.id}>
                        {item.id} {item.nome} {item.quantidade}
                </div> 
             ))} 
        </>
    )
}