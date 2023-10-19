import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import './App.scss'
import { MobileContainer } from './components/MobileContainer';
import { PaginaNavegacaoPadrao } from './pages/PaginaNavegacaoPadrao/PaginaNavegacaoPadrao';
import { PaginaCarrinho } from './pages/PaginaCarrinho/PaginaCarrinho';
import { useDispatch } from '../node_modules/react-redux/es/exports';
import { actions } from './actions/carrinho.actions';

export const App = () => {
  const dispatch = useDispatch()
  dispatch(actions.buscarCarrinhoDoLocalStorage())
  return (
    <MobileContainer>
      <Routes>
        <Route path='/carrinho' element={<PaginaCarrinho />}/>
        <Route path='/*' element={<PaginaNavegacaoPadrao />}/>
      </Routes>
    </MobileContainer>
  );
}
