import { useEffect, useState } from "react"
import { CardItem } from "./CardItem"
import { Link, useParams } from "../../node_modules/react-router-dom/dist/index"
import { api } from "../api"
import './ConteudoRestaurante.scss'
import { useDispatch, useSelector } from "../../node_modules/react-redux/es/exports"
import { actions as carrinhoActions } from "../actions/carrinho.actions"
import { actions as restauranteActions } from "../actions/restaurante.actions"
import { getValorEmReais } from "../utils"

export const ConteudoRestaurante = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [restaurante, setRestaurante] = useState({ nome: 'Carregando...', catalogo: [], imagem: '', horarioAbertura: '...', horarioFechamento: '...', distancia: '0' })
    const dispatch = useDispatch()
    const idRestauranteCarrinho = useSelector(state => state.carrinhoReducers.carrinho.restaurante ? state.carrinhoReducers.carrinho.restaurante.id : undefined)
    const restaurantesCarregados = useSelector(state => state.restauranteReducers.restaurantes)
    const { idRestaurante } = useParams()
    const idRestauranteParam = parseInt(idRestaurante.replaceAll(/\D/g,''))

    useEffect(() => {
        setIsLoading(true)
        api.restaurantes.getRestaurante(idRestauranteParam, true)
            .then(restaurante => setRestaurante(restaurante))
            .finally(() => setIsLoading(false))
    },[ idRestauranteParam ])

    const adicionarItemAoCarrinho = ({ item, restaurante }) => {
        if (idRestauranteCarrinho && item.restauranteId !== idRestauranteCarrinho)
            dispatch(carrinhoActions.limparCarrinho())

        if (restaurantesCarregados.indexOf(res => res.id === idRestauranteParam) === -1)
            dispatch(restauranteActions.salvarRestaurantesCarregados([ ...restaurantesCarregados, restaurante ]))

        dispatch(carrinhoActions.aditionarItem({ item, restaurante }))
    }

    return (
        <main id="conteudo-restaurante">
            {isLoading 
                ? <div>Carregando...</div>
                : restaurante ? (
                    <>
                        <div id="conteudo-restaurante__painel">
                            <img id="conteudo-restaurante__painel__img" src={restaurante.imagem} alt={`Imagem do restaurante ${restaurante.nome}`}/>
                            <h2 id="conteudo-restaurante__painel__titulo">{restaurante.nome }</h2>
                        </div>
                        <div id="conteudo-restaurante__catalogo">
                            {restaurante.catalogo && ( restaurante.catalogo.length === 0 ? (
                                <div>Nenhum item no catálogo :/</div>
                            ) : restaurante.catalogo.map(item => (
                                <CardItem
                                    titulo={item.nome} 
                                    valor={getValorEmReais(item.valor)}
                                    subtitulos={item.detalhes}
                                    onClick={() => adicionarItemAoCarrinho({item, restaurante})}
                                    title={'Adicionar ao carrinho'}
                                    key={item.id} />
                            )))}
                        </div>
                    </>
                ) : (
                    <div id="item-nao-encontrado">
                        <div>Restaurante não encontrado :/</div>
                        <Link to={'/inicio'} id="voltar-inicio">Voltar ao início!</Link>
                    </div>
                )}
        </main>
    )
}