import { faGear, faHouse, faTicket, faUser } from '../../node_modules/@fortawesome/free-solid-svg-icons/index'
import { ItemFooterNavegacao } from './ItemFooterNavegacao'
import './FooterNavegacao.scss'

const opcoesFooterNavegacao = [
    {
        icon: faHouse,
        text: 'Inicio',
        uri: '/inicio'
    },
    {
        icon: faTicket,
        text: 'Pedidos',
        uri: '/pedidos'
    },
    {
        icon: faGear,
        text: 'Ajustes',
        uri: '/ajustes'
    },
    {
        icon: faUser,
        text: 'Perfil',
        uri: '/perfil'
    },
]

export const FooterNavegacao = () => (
    <footer id="footer-navegacao">
        {opcoesFooterNavegacao.map(({icon, text, uri}) => <ItemFooterNavegacao icon={icon} text={text} uri={uri}/> )}
    </footer>
)