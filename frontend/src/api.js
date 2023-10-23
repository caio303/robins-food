import { cafeteriaBase64, churrascariaBase64, padaria2Base64, pizzariaBase64 } from "./assets/images/base64exemplos"
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

export const api = {
    restaurantes: {
        getRestaurante: (restauranteId, incluirCatalogo) => {
            console.log(config.urlBackend)
            let restaurante = api.restaurantes.getTodosRestaurantes().find(restaurante => restaurante.id === parseInt(restauranteId))
            restauranteId = parseInt(restauranteId)
            if (!!incluirCatalogo && restaurante) 
                restaurante.catalogo = [
                    {
                        id: 12,
                        restauranteId,
                        nome: 'Bolo',
                        valor: 24.90,
                        detalhes: [ 'Bolo de laranja' ]
                    },
                    {
                        id: 10,
                        restauranteId,
                        nome: 'Redbull',
                        valor: 9.8,
                        detalhes: [ 'te da asas' ]
                    }
                ]


            return restaurante
        },

        getTodosRestaurantes: () => {
            console.log(config.urlBackend)
            return [
                {
                    id: 1,
                    nome: 'Padaria do Zé',
                    imagem: padaria2Base64,
                    horarioAbertura: '06:00',
                    horarioFechamento: '22:00',
                    distancia: '1.6'
                },
                {
                    id: 2,
                    nome: 'Don Giovanni',
                    imagem: pizzariaBase64,
                    horarioAbertura: '08:00',
                    horarioFechamento: '19:00',
                    distancia: '1.1'
                },
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
        },
    },

    usuarios: {
        getInfoUsuario: (idUsuario = config.idUsuarioPadraoMVP) => {
            return {
                id: idUsuario,
                nome: 'Oliver Queen',
                cpf: '12365432100',
                cep: '58052-999',
                email: 'oliverqueen@gmail.com',
                telefone: '83912345678',
                endereco: 'R. Qualquer, 123',
            }
        }
    },

    pedidos: {
        getPedidosDoUsuario: (idUsuario = config.idUsuarioPadraoMVP) => {
            return [
                {
                    id: 1,
                    restaurante: 'Padaria Unipê',
                    enderecoEntrega: 'R. Qualquer, 123',
                    data: '14/09/2023',
                    valorTotal: 49.8,
                    itens: [ { id: 3, quantidade: 2 } ]
                },
                {
                    id: 2,
                    restaurante: 'Tapiocabana',
                    enderecoEntrega: 'R. Qualquer, 123',
                    data: '14/09/2023',
                    valorTotal: 19.8,
                    itens: [ { id: 3, quantidade: 2 } ]
                },
                {
                    id: 3,
                    restaurante: 'Tapiocabana',
                    enderecoEntrega: 'R. Qualquer, 123',
                    data: '14/09/2023',
                    valorTotal: 19.80,
                    itens: [ { id: 3, quantidade: 2 } ]
                },
                {
                    id: 4,
                    restaurante: 'Tapiocabana',
                    enderecoEntrega: 'R. Qualquer, 123',
                    data: '14/09/2023',
                    valorTotal: 19.80,
                    itens: [ { id: 3, quantidade: 2 } ]
                },
                {
                    id: 5,
                    restaurante: 'Tapiocabana',
                    enderecoEntrega: 'R. Qualquer, 123',
                    data: '14/09/2023',
                    valorTotal: 19.80,
                    itens: [ { id: 3, quantidade: 2 } ]
                },
                {
                    id: 6,
                    restaurante: 'Tapiocabana',
                    enderecoEntrega: 'R. Qualquer, 123',
                    data: '14/09/2023',
                    valorTotal: 34.80,
                    itens: [ { id: 3, quantidade: 2 } ]
                },
                {
                    id: 7,
                    restaurante: 'Tapiocabana',
                    enderecoEntrega: 'R. Qualquer, 123',
                    data: '14/09/2023',
                    valorTotal: 69.80,
                    itens: [ { id: 3, quantidade: 2 } ]
                },
                {
                    id: 8,
                    restaurante: 'Tapiocabana',
                    enderecoEntrega: 'R. Qualquer, 123',
                    data: '14/09/2023',
                    valorTotal: 19.8,
                    itens: [ { id: 3, quantidade: 2 } ]
                }
            ]
        },

        getPedidosDoUsuarioNoRestaurante: (idUsuario = config.idUsuarioPadraoMVP, idRestaurante) => '// TODO: V2 do app'
    }
}