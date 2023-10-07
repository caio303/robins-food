import { useEffect, useState } from "react";
import { api } from "../api";

export const ConteudoPedidos = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        setPedidos(api.usuarios.getTodosPedidosDoUsuario())
    },[])

    return pedidos.map(pedido => (
        <div>
            { pedido.restaurante } - <sub>{ pedido.enderecoEntrega } - { pedido.data }</sub> - {pedido.valorTotal }
        </div>
    ))
}