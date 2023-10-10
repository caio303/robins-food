import { useEffect, useState } from "react";
import { api } from "../api";
import { CardItem } from "./CardItem";
import './ConteudoPedidos.scss'

export const ConteudoPedidos = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        setPedidos(api.pedidos.getPedidosDoUsuario())
    },[])

    return (
        <main id="conteudo-pedidos">
            <div id="container-pedidos">
                <h2>Seus pedidos</h2>
                <div id="conteudo-pedidos__lista-pedidos">
                    {pedidos.map(pedido => (
                        <CardItem
                            titulo={pedido.restaurante}
                            valor={pedido.valorTotal}
                            subtitulos={[ pedido.enderecoEntrega, pedido.data ]}
                            key={pedido.id} />
                    ))}
                </div>
            </div>
        </main>
    )
}