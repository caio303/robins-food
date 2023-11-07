import { actionTypes } from "../actions/carrinho.actions";
import { KEY_CARRINHO_LOCAL_STORAGE } from "../constants";

const INITIAL_STATE = {
    carrinho: {
        restaurante: {
            id: 0,
            nome: '',
            imagem: '',
            horarioAbertura: '00:00',
            horarioFechamento: '00:00',
            distancia: '00'
        },
        itens: []
    }
}

export const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) { // TODO
        case actionTypes.ADICIONAR_ITEM_CARRINHO:
            return adicionarItem(state, action.payload)
        case actionTypes.REMOVER_ITEM_CARRINHO:
            return removerItem(state, action.payload)
        case actionTypes.LIMPAR_CARRINHO:
            return limparCarrinho()
        case actionTypes.BUSCAR_LOCAL_STORAGE_CARRINHO:
            return buscarDoLocalStorage()
        default:
            return state;
    }
}

const adicionarItem = (state, { item, restaurante }) => {
    const carrinho = JSON.parse(JSON.stringify(state.carrinho))
    
    const itemNoCarrinho = carrinho.itens.find(i => i.id === item.id)
    const quantidade = ( itemNoCarrinho && ++itemNoCarrinho.quantidade ) || 1

    const novoItem = { ...item, quantidade }

    const novoStateCarrinho = { ...state, carrinho: { restaurante: (restaurante || carrinho.restaurante), itens: [ ...carrinho.itens.filter(i => i.id !== item.id), novoItem]} }
    return atualizarLocalStorageERetornar(novoStateCarrinho)
}

const removerItem = (state, itemId) => {
    const carrinho = JSON.parse(JSON.stringify(state.carrinho))
    const novaLista = []

    carrinho.itens.forEach(item => {
        if (item.id === itemId) {
            const novaQtd = --item.quantidade

            if (novaQtd === 0) return
            
            return novaLista.push({ ...item, quantidade: novaQtd})
        }
        return novaLista.push(item)
    })

    const novoStateCarrinho = (
        novaLista.length > 0 
            ? { ...state, carrinho: { ...carrinho, itens: [ ...novaLista ] } }
            : INITIAL_STATE
        )

    return atualizarLocalStorageERetornar(novoStateCarrinho)
}

const limparCarrinho = () => {
    localStorage.removeItem(KEY_CARRINHO_LOCAL_STORAGE)
    return { ...INITIAL_STATE }
}

const buscarDoLocalStorage = () => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem(KEY_CARRINHO_LOCAL_STORAGE))

    return !!carrinhoSalvo ? carrinhoSalvo : INITIAL_STATE
}

const atualizarLocalStorageERetornar = (carrinho) => {
    localStorage.setItem(KEY_CARRINHO_LOCAL_STORAGE, JSON.stringify(carrinho))
    return carrinho
}