import { useState } from "react"
import { CardRestaurante } from "./CardRestaurante"
import { churrascariaBase64, padariaBase64, pizzariaBase64 } from "../assets/images/base64exemplos"
import './ConteudoInicio.scss'

export const ConteudoInicio = () => {
    // useEffect pra popular restaurantes com a API
    // eslint-disable-next-line
    const [restaurantes, setRestaurantes] = useState([
        {
            id: 1,
            nome: 'Don Giovanni',
            imagem: pizzariaBase64,
            horarioAbertura: '06:00',
            horarioFechamento: '22:00',
            distancia: '1.6'
        },
        {
            id: 2,
            nome: 'Padaria do Zé',
            imagem: padariaBase64,
            horarioAbertura: '08:00',
            horarioFechamento: '19:00',
            distancia: '1.1'
        },
        {
            id: 3,
            nome: 'Churrascaria',
            imagem: churrascariaBase64,
            horarioAbertura: '16:00',
            horarioFechamento: '23:00',
            distancia: '2.2'
        },
        {
            id: 4,
            nome: 'Tapiocabana',
            imagem: pizzariaBase64,
            horarioAbertura: '16:00',
            horarioFechamento: '23:00',
            distancia: '3'
        }
    ])

    return (
        <main id="conteudo-inicio">
            <div id="conteudo-inicio__barra-pesquisa">---------------------- Search ----------------------</div>
            <div id="conteudo-inicio__lista-restaurantes">
                {restaurantes.map(restaurante => {
                    return <CardRestaurante restaurante={restaurante} />
                })}
            </div>
        </main>
    )
}