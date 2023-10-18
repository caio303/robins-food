import { actionTypes } from "../constants";

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
    })
}