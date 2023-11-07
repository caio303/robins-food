import axios from "../node_modules/axios/index"
import { CONFIGURACOES_DEV, CONFIGURACOES_PRODUCAO } from "./constants"

const config = (() => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return CONFIGURACOES_DEV
        case 'production':
            return CONFIGURACOES_PRODUCAO
        default:
            return {}
    }
})()

const axiosDefaultConfig = {
    baseURL: config.baseURL
}

const http = {
    get: async (endpoint, customConfig = {}) => (
        await axios.get(endpoint, { ...axiosDefaultConfig, ...customConfig }).then(res => res.data)
    ),
    post: async (endpoint, requestBody = {}) => (
        await axios.post(config.baseURL + endpoint, { ...requestBody }).then(res => res.data)
    ),
}

export const api = {
    restaurantes: {
        getRestaurante: (restauranteId, incluirCatalogo) => (
            http.get(`/restaurantes/${restauranteId}`, { params: { incluirCatalogo } })
        ),
        getTodosRestaurantes: async () => (
            await http.get(`/restaurantes`)
        )
            /*
                {
                    id: 4,
                    nome: 'Tapiocabana',
                    imagem: cafeteriaBase64,
                    horarioAbertura: '16:00',
                    horarioFechamento: '23:00',
                    distancia: '3'
                },
                {
                    id: 3,
                    nome: 'Churrascaria',
                    imagem: churrascariaBase64,
                    horarioAbertura: '16:00',
                    horarioFechamento: '23:00',
                    distancia: '2.2'
                },
            ]
        },*/
    },

    usuarios: {
        getInfoUsuario: (idUsuario = config.idUsuarioPadraoMVP) => (
            http.get(`/usuarios/${idUsuario}`)
        )
    },

    pedidos: {
        fazerPedido: (carrinho, valorTotal, idUsuario = config.idUsuarioPadraoMVP) => {
            const requestBody = {
                clienteId: idUsuario,
                data: new Date().toJSON(),
                itens: carrinho.itens,
                restauranteId: carrinho.restaurante.id,
                valorTotal
            }
            return http.post('/pedidos', requestBody)
        },

        getPedidosDoUsuario: (idUsuario = config.idUsuarioPadraoMVP) => (
            http.get('/pedidos', { params: { clienteId: idUsuario }})
        ),

        getPedidosDoUsuarioNoRestaurante: (idUsuario = config.idUsuarioPadraoMVP, idRestaurante) => '// TODO: V2 do app'
    }
}