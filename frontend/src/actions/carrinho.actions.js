import { actionTypes } from "../constants";

export const actions = {
    aditionarItem: item => ({
        type: actionTypes.ADICIONAR_ITEM,
        payload: item
    }),
    removerItem: item => ({
        type: actionTypes.REMOVER_ITEM,
        payload: item
    }),
    limparCarrinho: () => ({
        type: actionTypes.LIMPAR_CARRINHO
    })
}