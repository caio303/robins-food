import { Link } from '../../node_modules/react-router-dom/dist/index';
import './CardRestaurante.scss';

export const CardRestaurante = ({restaurante}) => (
    <Link key={restaurante.id} className="card-restaurante" to={`/restaurante/${restaurante.id}`}>
        <img className="card-restaurante__imagem" alt={`Imagem de ${restaurante.nome}`} src={ restaurante.imagem } />
        <div className="card-restaurante__dados">
            <div className="card-restaurante__dados__nome">{ restaurante.nome }</div> 
            <div className="card-restaurante__dados__horarios">{ `${restaurante.horarioAbertura} às ${restaurante.horarioFechamento}` }</div> 
            <div className="card-restaurante__dados__distancia">{ restaurante.distancia + ' km' }</div> 
        </div>
    </Link>
)