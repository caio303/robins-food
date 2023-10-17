import { actionTypes } from "../constants";

const INITIAL_STATE = {
    
}

export const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) { // TODO
        case actionTypes.ADICIONAR_ITEM:
            return { }
        case actionTypes.REMOVER_ITEM:
            return { }
        case actionTypes.LIMPAR_CARRINHO:
            return { }
        default:
            return state;
    }
}