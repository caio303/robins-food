import { useDispatch, useSelector } from "../../node_modules/react-redux/es/exports"
import { useNavigate } from "../../node_modules/react-router-dom/dist/index"
import { getValorEmReais } from "../utils"
import { actions as carrinhoActions } from "../actions/carrinho.actions"

export const ConteudoCarrinho = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const carrinho = useSelector(state => state.carrinhoReducers.carrinho)
    const restaurantes = useSelector(state => state.restauranteReducers.restaurantes)
    const restaurante = restaurantes.find(res=> res.id === carrinho.restauranteId)

    const removerItemDoCarrinho = (itemId) => dispatch(carrinhoActions.removerItem(itemId))

    const calcularValorTotal = () => {
        const listaCompleta = []
        carrinho.itens.forEach((item, index) => listaCompleta[index] = item.valor * item.quantidade)
        return getValorEmReais(listaCompleta)
    }

    return (
        <>
            <div onClick={() => navigate(-1)}>Voltar</div>
            <div>CARRINHO</div>
            <div>{restaurante && restaurante.nome}</div>
             {carrinho.itens.map(item => (
                <div onClick={() => removerItemDoCarrinho(item.id)} key={item.id}>
                        {item.quantidade} x {item.nome} R$ {getValorEmReais(item.valor * item.quantidade)}
                </div> 
             ))}
             Valor total: R$ {calcularValorTotal()}
        </>
    )
}