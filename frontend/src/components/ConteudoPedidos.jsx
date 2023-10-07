import { useEffect, useState } from "react";
import { api } from "../api";
import { CardItem } from "./CardItem";

export const ConteudoPedidos = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        setPedidos(api.pedidos.getPedidosDoUsuario())
    },[])

    return pedidos.map(pedido => (
        <CardItem 
            titulo={pedido.restaurante} 
            valor={pedido.valorTotal} 
            subtitulos={[ pedido.enderecoEntrega, pedido.data ]} />
    ))
}