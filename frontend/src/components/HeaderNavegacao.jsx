import React from "react"
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// @ts-ignore
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { Logo } from "./Logo"
import './HeaderNavegacao.scss'
import { Link } from "../../node_modules/react-router-dom/dist/index"
import { useSelector } from "../../node_modules/react-redux/es/exports"

export const HeaderNavegacao = () => {
    const itensNoCarrinho = useSelector(state => state.carrinhoReducers.carrinho.itens)
    const countItensNoCarrinho = ( itensNoCarrinho && itensNoCarrinho.reduce((acc, crr)=> acc + crr.quantidade, 0) ) || 0
    
    return (
        <header id="header-navegacao">
            <Logo />
            <Link to={'/carrinho'}>
                <div className={countItensNoCarrinho > 0 ? 'badge' : ''} title={`${countItensNoCarrinho}`}>
                    <FontAwesomeIcon
                        id="header-navegacao__carrinho"
                        icon={faBasketShopping} />
                </div>
            </Link>
        </header>
    )
}
