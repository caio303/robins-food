import { useEffect, useState } from "react"
import './ConteudoInicio.scss'
import { CardItem } from "./CardItem"
import { useParams } from "../../node_modules/react-router-dom/dist/index"
import { api } from "../api"

export const ConteudoRestaurante = () => {
    const [restaurante, setRestaurante] = useState({})
    const { idRestaurante } = useParams()

    useEffect(()=> {
        setRestaurante(api.restaurantes.getRestaurante(idRestaurante, true))
    },[ idRestaurante ])

    return (
        <main id="conteudo-inicio">
            <div id="conteudo-inicio__barra-pesquisa">---------------------- R{idRestaurante} ----------------------</div>
            <div id="conteudo-inicio__lista-restaurantes">
                {restaurante.catalogo && restaurante.catalogo.map(item =>
                    <CardItem
                        titulo={item.nome} 
                        valor={item.valor}
                        subtitulos={item.detalhes}
                        key={item.id} />
                )}
            </div>
        </main>
    )
}