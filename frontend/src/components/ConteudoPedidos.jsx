import { useEffect, useState } from "react";
import { api } from "../api";
import { CardItem } from "./CardItem";
import './ConteudoPedidos.scss'
import { getDataFormatada, getValorEmReais } from "../utils";
import { Link } from "react-router-dom";

export const ConteudoPedidos = () => {
    const [pedidos, setPedidos] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        api.pedidos.getPedidosDoUsuario()
            .then(pedidos => setPedidos(pedidos))
            .finally(() => setIsLoading(false))
    },[])

    const mostrarConteudo = () => (
        pedidos.length < 1 
            ? (
                <div className="item-nao-encontrado">
                    <div>Nenhum pedido feito...</div>
                    <Link to={'inicio'} id="voltar-inicio">Vá às compras!</Link>    
                </div>
            )
            : pedidos.map(pedido => (
                <CardItem
                    titulo={pedido.nomeRestaurante}
                    valor={getValorEmReais(pedido.valorTotal)}
                    subtitulos={[ pedido.enderecoEntrega, getDataFormatada(pedido.data) ]}
                    key={pedido.id} />
            ))
    )

    return (
        <main id="conteudo-pedidos">
            <div id="conteudo-pedidos__container">
                <h2>Seus pedidos</h2>
                <div id="conteudo-pedidos__container__lista-pedidos">
                    {isLoading ? <div>Carregando...</div> : mostrarConteudo()}
                </div>
            </div>
        </main>
    )
}