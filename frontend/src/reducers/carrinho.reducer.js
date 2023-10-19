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
            return { }
        default:
            return state;
    }
}

const adicionarItem = (state, item) => {
    // TODO: restauranteId
    const carrinho = JSON.parse(JSON.stringify(state.carrinho))
    
    const itemNoCarrinho = carrinho.itens.find(i => i.id === item.id)
    const quantidade = ( itemNoCarrinho && ++itemNoCarrinho.quantidade ) || 1

    const novoItem = {
        id: item.id,
        nome: item.nome,
        valor: item.valor,
        quantidade
    }

    return { ...state, carrinho: { ...carrinho, itens: [ ...carrinho.itens.filter(i => i.id !== item.id), novoItem]} }
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





