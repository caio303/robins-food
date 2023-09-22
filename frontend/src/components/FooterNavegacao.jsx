import { Link } from '../../node_modules/react-router-dom/dist/index'
import './FooterNavegacao.scss'

export const FooterNavegacao = () => (
    <footer id="footer-navegacao">
        <Link to='/inicio'>Inicio</Link>
        <Link to='/pedidos'>Pedidos</Link>
        <Link to='/ajustes'>Ajustes</Link>
        <Link to='/perfil'>Perfil</Link>
    </footer>
)