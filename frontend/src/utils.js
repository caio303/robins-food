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

export const getCepComMascara = (cep) => {
    const regex = /(\d{5})(\d{3})/
    const replace = '$1-$2'
    return cep.replace(regex, replace)
}

export const getValorEmReais = (valor) => {
    if (Array.isArray(valor))
        if (valor.length === 0)
            valor = 0
        else
            valor = valor.reduce((accum,curr) => accum + curr,0)
        
    return `${valor.toFixed(2)}`.replace('.',',')
}

export const getDataFormatada = (strData) => {
    const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}).*/
    const replace = '$3/$2/$1 $4:$5'
    return strData.replace(regex,replace)
}