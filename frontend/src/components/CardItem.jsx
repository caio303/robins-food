export const CardItem = ({titulo, valor, subtitulos}) => {
    return <div>{titulo} <sub>{subtitulos.map(st=>st)}</sub> R$ {valor}</div>
}