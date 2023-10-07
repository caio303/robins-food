import { cafeteriaBase64, churrascariaBase64, padaria2Base64, pizzariaBase64 } from "./assets/images/base64exemplos"
import { ID_USUARIO_PADRAO_MVP } from "./constants"

/* 
    * pedidos um usuario
    * todos os restaurantes (sem itens)
    * info de um restaurante (com itens)
    * info de um usuario
*/

export const api = {
    restaurantes: {
        getRestaurante: (idRestaurante, incluirCatalogo) => {
            let restaurante = {
                id: idRestaurante,
                nome: 'Don Giovanni',
                imagem: pizzariaBase64,
                horarioAbertura: '06:00',
                horarioFechamento: '22:00',
                distancia: '1.6'
            }

            if (incluirCatalogo) 
                restaurante.catalogo = [
                    {
                        id: 12,
                        nome: 'Bolo',
                        valor: '24,90',
                        detalhes: [ 'Bolo de laranja' ]
                    },
                    {
                        id: 10,
                        nome: 'Redbull',
                        valor: '9,80',
                        detalhes: [ 'te da asas' ]
                    }
                ]

            return restaurante
        },

        // não inclui seus catálogos
        getTodosRestaurantes: () => {
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
        getInfoUsuario: (idUsuario = ID_USUARIO_PADRAO_MVP) => {
            return {
                id: idUsuario,
                nome: 'Oliver Queen',
                email: 'oliverqueen@gmail.com',
                telefone: '(83) 91234-5678',
                endereco: 'R. Qualquer, 123',
            }
        }
    },

    pedidos: {
        getPedidosDoUsuario: (idUsuario = ID_USUARIO_PADRAO_MVP) => {
            return [
                {
                    restaurante: 'Padaria Unipê',
                    enderecoEntrega: 'R. Qualquer, 123',
                    data: '14/09/2023',
                    valorTotal: '49,80',
                    itens: [ { id: 3, quantidade: 2 } ]
                }
            ]
        },

        getPedidosDoUsuarioNoRestaurante: (idUsuario = ID_USUARIO_PADRAO_MVP, idRestaurante) => '// TODO: V2 do app'
    }
}