import './CardRestaurante.scss';

export const CardRestaurante = ({restaurante}) => (
    <div key={restaurante.id} className="card-restaurante">
        <img className="card-restaurante__imagem" alt={`Imagem de ${restaurante.nome}`} src={ restaurante.imagem } />
        <div className="card-restaurante__dados">
            <div className="card-restaurante__nome">{ restaurante.nome }</div> 
            <div className="card-restaurante__horarioAbertura">{ restaurante.horarioAbertura }</div> 
            <div className="card-restaurante__horarioFechamento">{ restaurante.horarioFechamento }</div> 
            <div className="card-restaurante__distancia">{ restaurante.distancia }</div> 
        </div>
    </div>
)