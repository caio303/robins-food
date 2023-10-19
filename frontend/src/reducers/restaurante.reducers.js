import { actionTypes } from "../actions/restaurante.actions";

const INITIAL_STATE = {
    restaurantes: []
}

export const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SALVAR_RESTAURANTES_CARREGADOS:
            return salvarRestaurantesNaStore(state, action.payload)
        default:
            return state;
    }
}

const salvarRestaurantesNaStore = (state, restaurantes) => ({ ...state, restaurantes })