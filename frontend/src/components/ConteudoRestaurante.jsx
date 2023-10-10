import { useEffect, useState } from "react"
import { CardItem } from "./CardItem"
import { Link, useParams } from "../../node_modules/react-router-dom/dist/index"
import { api } from "../api"
import './ConteudoRestaurante.scss'

export const ConteudoRestaurante = () => {
    const [restaurante, setRestaurante] = useState({ nome: 'loading' })
    let { idRestaurante } = useParams()
    idRestaurante = idRestaurante.replaceAll(/\D/g,'')

    useEffect(()=> {
        setRestaurante(api.restaurantes.getRestaurante(idRestaurante, true))
    },[ idRestaurante ])

    return (
        <main id="conteudo-restaurante">
            { restaurante ? (
                <>
                    <div id="conteudo-restaurante__painel">
                        <h2>{restaurante.nome }</h2>    
                    </div>
                    <div id="conteudo-restaurante__catalogo">
                        {restaurante.catalogo && restaurante.catalogo.map(item =>
                            <CardItem
                                titulo={item.nome} 
                                valor={item.valor}
                                subtitulos={item.detalhes}
                                key={item.id} />
                        )}
                    </div>
                </>
            ) : (
                <div id="conteudo-restaurante__nao-encontrado">
                    <div>Restaurante não encontrado :/</div>
                    <Link to={'/inicio'} id="voltar-inicio">Voltar ao início!</Link>
                </div>
            )}
        </main>
    )
}