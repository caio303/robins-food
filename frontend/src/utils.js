export const getCpfComMascara = (cpf) => {
    const regex = /(\d{3})(\d{3})(\d{3})(\d{2})/
    const replace = '$1.$2.$3-$4'
    return cpf.replace(regex, replace)
}

export const getTelefoneComMascara = (telefone) => {
    const regex = /(\d{2})(\d{5})(\d{4})/
    const replace = '($1) $2-$3'
    return telefone.replace(regex, replace)
}