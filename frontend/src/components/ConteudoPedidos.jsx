import { useEffect, useState } from "react";
import { api } from "../api";
import { CardItem } from "./CardItem";
import './ConteudoPedidos.scss'
import { getValorEmReais } from "../utils";

export const ConteudoPedidos = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        api.pedidos.getPedidosDoUsuario().then(pedidos => setPedidos(pedidos))
    },[])

    return (
        <main id="conteudo-pedidos">
            <div id="conteudo-pedidos__container">
                <h2>Seus pedidos</h2>
                <div id="conteudo-pedidos__container__lista-pedidos">
                    {pedidos.map(pedido => (
                        <CardItem
                            titulo={pedido.nomeRestaurante}
                            valor={getValorEmReais(pedido.valorTotal)}
                            subtitulos={[ pedido.enderecoEntrega, pedido.data ]}
                            key={pedido.id} />
                    ))}
                </div>
            </div>
        </main>
    )
}