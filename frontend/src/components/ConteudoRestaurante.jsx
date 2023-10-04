import { useState } from "react"
import { pizzariaBase64 } from "../assets/images/base64exemplos"
import './ConteudoInicio.scss'
import { CardPedido } from "./CardPedido"
import { useParams } from "../../node_modules/react-router-dom/dist/index"

export const ConteudoRestaurante = () => {
    const { idRestaurante } = useParams()
    
    // useEffect pra popular o restaurante com a API
    // eslint-disable-next-line
    const [restaurante, setRestaurante] = useState({
            id: 1,
            nome: 'Don Giovanni',
            imagem: pizzariaBase64,
            horarioAbertura: '06:00',
            horarioFechamento: '22:00',
            distancia: '1.6',
            itens: [
                {
                    id: 12,
                    nome: 'Bolo',
                    valor: '24,90',
                    detalhes: [ 'Bolo de laranja', '04/11/2004' ]
                }
            ]
        })

    return (
        <main id="conteudo-inicio">
            <div id="conteudo-inicio__barra-pesquisa">---------------------- R{idRestaurante} ----------------------</div>
            <div id="conteudo-inicio__lista-restaurantes">
                {restaurante.itens.map(item => {
                    return <CardPedido pedido={item} key={item.id} />
                })}
            </div>
        </main>
    )
}