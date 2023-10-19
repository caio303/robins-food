import { useEffect } from "react"
import { CardRestaurante } from "./CardRestaurante"
import './ConteudoInicio.scss'
import { api } from "../api"
import { useSelector } from "react-redux"
import { useDispatch } from "../../node_modules/react-redux/es/exports"
import { actions } from "../actions/restaurante.actions"

export const ConteudoInicio = () => {
    const dispatch = useDispatch()
    const restaurantes = useSelector(state => state.restauranteReducers.restaurantes)
    
    useEffect(() => {
        dispatch(
            actions.salvarRestaurantesCarregados( api.restaurantes.getTodosRestaurantes() )
        )// eslint-disable-next-line
    }, [])

    return (
        <main id="conteudo-inicio">
            <div id="conteudo-inicio__lista-restaurantes">
                {restaurantes.map(restaurante => {
                    return <CardRestaurante restaurante={restaurante} key={restaurante.id} />
                })}
            </div>
        </main>
    )
}