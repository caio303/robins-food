import { actionTypes } from "../actions/carrinho.actions";

const INITIAL_STATE = {
    carrinho: {
        restauranteId: undefined,
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
            return { ...INITIAL_STATE }
        default:
            return state;
    }
}

const adicionarItem = (state, item) => {
    const carrinho = JSON.parse(JSON.stringify(state.carrinho))
    
    const itemNoCarrinho = carrinho.itens.find(i => i.id === item.id)
    const quantidade = ( itemNoCarrinho && ++itemNoCarrinho.quantidade ) || 1

    const novoItem = { ...item, quantidade }

    return { ...state, carrinho: { restauranteId: item.restauranteId, itens: [ ...carrinho.itens.filter(i => i.id !== item.id), novoItem]} }
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

    return { ...state, carrinho: { ...carrinho, itens: [ ...novaLista ] } }
}





