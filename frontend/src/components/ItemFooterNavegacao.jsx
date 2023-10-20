import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index"
import { Link } from "../../node_modules/react-router-dom/dist/index"
import './ItemFooterNavegacao.scss'

export const ItemFooterNavegacao = ({icon, text, uri}) => {
    return (
        <Link to={uri} className={`item-footer-navegacao ${text.toLowerCase()}`}>
            <div className='item-footer-navegacao__icon-container'>
                <FontAwesomeIcon icon={icon}/>
            </div>
            <span>{text}</span>
        </Link>
    )
}