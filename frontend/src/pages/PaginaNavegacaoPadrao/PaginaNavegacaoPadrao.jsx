import { Navigate, Route, Routes } from "../../../node_modules/react-router-dom/dist/index";
import { FooterNavegacao } from "../../components/FooterNavegacao";
import { HeaderNavegacao } from "../../components/HeaderNavegacao";
import { ConteudoAjustes } from "../../components/ConteudoAjustes";
import { ConteudoInicio } from "../../components/ConteudoInicio";
import { ConteudoPedidos } from "../../components/ConteudoPedidos";
import { ConteudoRestaurante } from "../../components/ConteudoRestaurante";
import { ConteudoPerfil } from "../../components/ConteudoPerfil";
import './PaginaNavegacaoPadrao.scss'

export const PaginaNavegacaoPadrao = () => (
    <div id="nav-padrao">
        <HeaderNavegacao />
        <Routes>
            <Route path='/inicio' element={<ConteudoInicio />}/>
            <Route path='/pedidos' element={<ConteudoPedidos />}/>
            <Route path='/ajustes' element={<ConteudoAjustes />}/>
            <Route path='/perfil' element={<ConteudoPerfil />}/>
            <Route path='/restaurante'>
                <Route path=':idRestaurante' element={<ConteudoRestaurante />}/>
                <Route path='' element={<Navigate to='/inicio' />}/>
            </Route>
            <Route path='/*' element={<Navigate to='/inicio' />}/>
        </Routes>
        <FooterNavegacao />
    </div>
)