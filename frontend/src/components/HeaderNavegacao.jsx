import React from "react"
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// @ts-ignore
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { Logo } from "./Logo"
import './HeaderNavegacao.scss'
import { Link } from "../../node_modules/react-router-dom/dist/index"

export const HeaderNavegacao = () => (
    <header id="header-navegacao">
        <Logo />
        <Link to={'/carrinho'}>
            <FontAwesomeIcon
                id="header-navegacao__carrinho"
                icon={faBasketShopping} />
        </Link>
    </header>
)
