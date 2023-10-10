import { useEffect, useState } from "react"
import { CardItem } from "./CardItem"
import { useParams } from "../../node_modules/react-router-dom/dist/index"
import { api } from "../api"
import './ConteudoRestaurante.scss'

export const ConteudoRestaurante = () => {
    const [restaurante, setRestaurante] = useState({ nome: 'loading' })
    let { idRestaurante } = useParams()
    idRestaurante = idRestaurante.replaceAll(/\D/g,'')

    useEffect(()=> {
        setRestaurante(api.restaurantes.getRestaurante(idRestaurante, true))
        console.log(restaurante)
    },[ idRestaurante ])

    return (
        <main id="conteudo-restaurante">
            <div id="conteudo-restaurante__painel">
                <h2>{ restaurante && restaurante.nome }</h2>    
            </div>
            <div id="conteudo-restaurante__catalogo">
                { restaurante && restaurante.catalogo && restaurante.catalogo.map(item =>
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