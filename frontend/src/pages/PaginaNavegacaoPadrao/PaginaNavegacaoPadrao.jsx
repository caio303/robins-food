import { Navigate, Route, Routes } from "../../../node_modules/react-router-dom/dist/index";
import { HeaderNavegacao } from "../../components/HeaderNavegacao";
import { ConteudoAjustes } from "./ConteudoAjustes";
import { ConteudoInicio } from "./ConteudoInicio";
import { ConteudoPedidos } from "./ConteudoPedidos";
import { ConteudoPerfil } from "./ConteudoPerfil";

export const PaginaNavegacaoPadrao = () => (
    <>
        <HeaderNavegacao />
        <Routes>
            <Route path='/inicio' element={<ConteudoInicio />}/>
            <Route path='/pedidos' element={<ConteudoPedidos />}/>
            <Route path='/ajustes' element={<ConteudoAjustes />}/>
            <Route path='/perfil' element={<ConteudoPerfil />}/>
            <Route path='/*' element={<Navigate to='/inicio' />}/>
        </Routes>
    </>
)