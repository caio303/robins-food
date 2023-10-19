export const actionTypes = {
    ADICIONAR_ITEM_CARRINHO: 'ADICIONAR_ITEM_CARRINHO',
    REMOVER_ITEM_CARRINHO: 'REMOVER_ITEM_CARRINHO',
    LIMPAR_CARRINHO: 'LIMPAR_CARRINHO',
    BUSCAR_LOCAL_STORAGE_CARRINHO: 'BUSCAR_LOCAL_STORAGE_CARRINHO'
}

export const actions = {
    aditionarItem: item => ({
        type: actionTypes.ADICIONAR_ITEM_CARRINHO,
        payload: item
    }),
    removerItem: itemId => ({
        type: actionTypes.REMOVER_ITEM_CARRINHO,
        payload: itemId
    }),
    limparCarrinho: () => ({
        type: actionTypes.LIMPAR_CARRINHO
    }),
    buscarCarrinhoDoLocalStorage: () => ({
        type: actionTypes.BUSCAR_LOCAL_STORAGE_CARRINHO
    })
}