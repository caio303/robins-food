import './CardItem.scss'

export const CardItem = ({titulo, valor, subtitulos}) => {
    return (
        <div className='card-item'>
            <div className='card-item__titulo'>{titulo}</div>
            <div className="card-item__subtitulos">
                {subtitulos.map(subtitulo => ( <div key={subtitulo}>{subtitulo}</div> ))}
            </div>
            <div className="card-item__valor">R$ {valor}</div>
        </div>
    )
}