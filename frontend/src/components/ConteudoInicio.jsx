import { useEffect, useState } from "react"
import { CardRestaurante } from "./CardRestaurante"
import './ConteudoInicio.scss'
import { api } from "../api"
import { useSelector } from "react-redux"
import { useDispatch } from "../../node_modules/react-redux/es/exports"
import { actions } from "../actions/restaurante.actions"

export const ConteudoInicio = () => {
    const [ isLoading, setIsLoading ] = useState(false)
    const dispatch = useDispatch()
    const restaurantes = useSelector(state => state.restauranteReducers.restaurantes)
    
    useEffect(() => {
        setIsLoading(true)
        api.restaurantes.getTodosRestaurantes().then(rest => {
            dispatch(actions.salvarRestaurantesCarregados(rest))
        }).finally(() => setIsLoading(false))
        // eslint-disable-next-line
    }, [])

    const mostrarConteudo = () => (
        restaurantes.length < 1
            ? <div>Nenhum restaurante encontrado, tente mais tarde!</div>
            : restaurantes.map(restaurante => (<CardRestaurante restaurante={restaurante} key={restaurante.id} />) )
    )

    return (
        <main id="conteudo-inicio">
            <div id="conteudo-inicio__lista-restaurantes">
                {isLoading ? <div>Carregando...</div> : mostrarConteudo()}
            </div>
        </main>
    )
}