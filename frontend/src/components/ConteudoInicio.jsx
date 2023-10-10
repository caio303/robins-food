import { useEffect, useState } from "react"
import { CardRestaurante } from "./CardRestaurante"
import './ConteudoInicio.scss'
import { api } from "../api"

export const ConteudoInicio = () => {
    const [restaurantes, setRestaurantes] = useState([])
    
    useEffect(() => {
        setRestaurantes(api.restaurantes.getTodosRestaurantes())
    }, [])

    return (
        <main id="conteudo-inicio">
            <div id="conteudo-inicio__lista-restaurantes">
                {restaurantes.map(restaurante => {
                    return <CardRestaurante restaurante={restaurante} />
                })}
            </div>
        </main>
    )
}