import { useDispatch } from "../../node_modules/react-redux/es/exports"
import { getValorEmReais } from "../utils"
import { actions as carrinhoActions } from "../actions/carrinho.actions"
import { Link, useNavigate } from "../../node_modules/react-router-dom/dist/index"
import './ConteudoCarrinho.scss'

export const ConteudoCarrinho = ({ itensCarrinho, idRestaurante }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const removerItemDoCarrinho = (itemId) => dispatch(carrinhoActions.removerItem(itemId))
    const limparCarrinho = () => {
        navigate(`/restaurante/${idRestaurante}`)
        dispatch(carrinhoActions.limparCarrinho())
    }

    return (
        <main id="conteudo-carrinho">
            <div id="conteudo-carrinho__titulo">
                <span>ITENS ADICIONADOS</span>
                <span id="conteudo-carrinho__titulo__limpar-carrinho" onClick={limparCarrinho}>Limpar carrinho</span>
            </div>
             {itensCarrinho.length < 1 
                ? <div className="item-nao-encontrado">
                      <div>Nenhum item adicionado...</div>
                      <Link to={'inicio'} id="voltar-inicio">Vá às compras!</Link>    
                  </div>
                : itensCarrinho.map(item => (
                    <div onClick={() => removerItemDoCarrinho(item.id)} key={item.id}>
                            {item.quantidade} x {item.nome} R$ {getValorEmReais(item.valor * item.quantidade)}
                    </div> 
             ))}
        </main>
    )
}