import robinsLogo from '../assets/images/robins-logo.svg'
import './Logo.scss'

export const Logo = () => {
    return (
        <div id='robins-food-logo'>
            <img alt="Logo Robin's Food" src={robinsLogo}/>
        </div>
    )
}