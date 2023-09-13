import React from "react"
import { Logo } from "./Logo"
import './HeaderNavegacao.scss'

export const HeaderNavegacao = () => (
        <header id="header-navegacao">
            <Logo />
            <i id="header-navegacao__carrinho">C</i>
        </header>
    )
