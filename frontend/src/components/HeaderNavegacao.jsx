import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { Logo } from "./Logo"
import './HeaderNavegacao.scss'

export const HeaderNavegacao = () => (
        <header id="header-navegacao">
            <Logo />
            <FontAwesomeIcon
                id="header-navegacao__carrinho"
                icon={faBasketShopping} />
        </header>
    )
