import './CardItem.scss'

export const CardItem = ({titulo, valor, subtitulos, onClick, title, key }) => {
    return (
        <div className={`card-item ${onClick ? 'clicavel' : ''}`} onClick={onClick} title={title}>
            <div className='card-item__titulo'>{titulo}</div>
            <div className="card-item__subtitulos">
                {subtitulos.map(subtitulo => ( <div key={key}>{subtitulo}</div> ) )}
            </div>
            <div className="card-item__valor">R$ {valor}</div>
        </div>
    )
}