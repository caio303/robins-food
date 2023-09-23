import { faGear, faHouse, faTicket, faUser } from '../../node_modules/@fortawesome/free-solid-svg-icons/index'
import { ItemFooter } from './ItemFooter'
import './FooterNavegacao.scss'

export const FooterNavegacao = () => (
    <footer id="footer-navegacao">
        <ItemFooter icon={faHouse} text={'Inicio'} uri={'/inicio'}/>
        <ItemFooter icon={faTicket} text={'Pedidos'} uri={'/pedidos'}/>
        <ItemFooter icon={faGear} text={'Ajustes'} uri={'/ajustes'}/>
        <ItemFooter icon={faUser} text={'Perfil'} uri={'/perfil'}/>
    </footer>
)