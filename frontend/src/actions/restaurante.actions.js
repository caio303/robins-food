export const actionTypes = {
    SALVAR_RESTAURANTES_CARREGADOS: 'SALVAR_RESTAURANTES_CARREGADOS'
}

export const actions = {
    salvarRestaurantesCarregados: (restaurantes) => ( {
        type: actionTypes.SALVAR_RESTAURANTES_CARREGADOS,
        payload: restaurantes
    })
}