import { actionTypes } from "../constants";

const INITIAL_STATE = {
    carrinho: {
        restauranteId: -1,
        itens: [
            { id: -1, nome: 'Nome Item 1', quantidade: 1 },
            { id: -2, nome: 'Nome Item 2', quantidade: 1 },
            { id: -3, nome: 'Nome Item 3', quantidade: 1 },
        ]
    }
}

export const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) { // TODO
        case actionTypes.ADICIONAR_ITEM_CARRINHO:
            return adicionarItem(state, action.payload)
        case actionTypes.REMOVER_ITEM_CARRINHO:
            return { }
        case actionTypes.LIMPAR_CARRINHO:
            return { }
        default:
            return state;
    }
}

const adicionarItem = (state, payloadNovoItem) => {
    const carrinho = state.carrinho
    const itemExistenteNoCarrinho = carrinho.itens.find(i => i.id === payloadNovoItem.id)
    const quantidade = ++itemExistenteNoCarrinho.quantidade || 1
    const novoItem = {
        id: payloadNovoItem.id,
        nome: payloadNovoItem.nome,
        quantidade
    }
    return { ...state, carrinho: { ...carrinho, itens: [ ...carrinho.itens.filter(i=>i.id!== payloadNovoItem.id), novoItem]} }
}






