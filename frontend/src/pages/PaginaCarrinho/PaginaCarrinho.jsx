import { useDispatch, useSelector } from "../../../node_modules/react-redux/es/exports";
import { Navigate, useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { api } from "../../api";
import { ConteudoCarrinho } from "../../components/ConteudoCarrinho";
import { FooterCarrinho } from "../../components/FooterCarrinho";
import { HeaderCarrinho } from "../../components/HeaderCarrinho";
import { actions as carrinhoActions } from "../../actions/carrinho.actions";
import './PaginaCarrinho.scss'

export const PaginaCarrinho = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const carrinho = useSelector(state => state.carrinhoReducers.carrinho)
    const restaurante = carrinho.restaurante
    const itensCarrinho = carrinho.itens

    const taxaEntrega = 2

    if (itensCarrinho.length < 1)
        return <Navigate to={'/inicio'}/>

    
    const limparCarrinho = () => {
        navigate(`/restaurante/${carrinho.restaurante.id}`)
        dispatch(carrinhoActions.limparCarrinho())
    }

    const valorCarrinho = carrinho.itens.reduce((acum, curr) => acum + (curr.valor * curr.quantidade), 0)
    const valorTotal =  valorCarrinho + taxaEntrega

    const confirmarPedido = () => {
        api.pedidos.fazerPedido(carrinho, valorTotal)
        .then(res => {
            console.log(res)
            navigate(`/pedidos`)
            dispatch(carrinhoActions.limparCarrinho())
        }).catch(err => {
            alert('Ocorreu algum erro... Volte ao início e tente novamente')
            console.error(err)
        })
    }

    return (
        <div id="pagina-carrinho">
            <HeaderCarrinho restaurante={restaurante} taxaEntrega={taxaEntrega} />
            <ConteudoCarrinho itensCarrinho={carrinho.itens} limparCarrinho={limparCarrinho} />
            <FooterCarrinho valorTotal={valorTotal} confirmarPedido={confirmarPedido} />
        </div>
    )
}