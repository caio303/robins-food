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
        api.restaurantes.getTodosRestaurantes().then(rest => {
            console.log(rest)   
            dispatch(actions.salvarRestaurantesCarregados(rest))
        })
        // eslint-disable-next-line
    }, [])

    useEffect(()=>{}, [ restaurantes ])

    return (
        <main id="conteudo-inicio">
            <div id="conteudo-inicio__lista-restaurantes">
                {restaurantes.length < 1 
                    ? <div>Nenhum restaurante encontrado, tente mais tarde!</div>
                    : restaurantes.map(restaurante => (<CardRestaurante restaurante={restaurante} key={restaurante.id} />) ) 
                }
            </div>
        </main>
    )
}