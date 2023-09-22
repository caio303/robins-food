import React from "react"
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// @ts-ignore
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { Logo } from "./Logo"
import './HeaderNavegacao.scss'
import { useNavigate } from "../../node_modules/react-router-dom/dist/index"

export const HeaderNavegacao = () => {
    const navigate = useNavigate()
    const navigateToCarrinho = () => navigate('carrinho')
    return (
        <header id="header-navegacao">
            <Logo />
            <FontAwesomeIcon
                id="header-navegacao__carrinho"
                icon={faBasketShopping} 
                onClick={navigateToCarrinho}/>
        </header>
    )
}