import { combineReducers } from 'redux';
import { reducers as carrinhoReducers } from "./carrinho.reducer";
import { reducers as restauranteReducers } from './restaurante.reducers';

export const reducers = combineReducers({ carrinhoReducers, restauranteReducers })