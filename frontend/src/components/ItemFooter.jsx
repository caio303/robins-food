import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index"
import { Link } from "../../node_modules/react-router-dom/dist/index"
import './ItemFooter.scss'

export const ItemFooter = ({icon, text, uri}) => {
    return (
        <Link to={uri} className={`item-footer ${text.toLowerCase()}`}>
            <div className='item-footer__icon-container'>
                <FontAwesomeIcon icon={icon}/>
            </div>
            <span>{text}</span>
        </Link>
    )
}