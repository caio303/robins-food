import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import './App.scss'
import { MobileContainer } from './components/MobileContainer';
import { PaginaNavegacaoPadrao } from './pages/PaginaNavegacaoPadrao/PaginaNavegacaoPadrao';
import { PaginaCarrinho } from './pages/PaginaCarrinho/PaginaCarrinho';

export const App = () => {
  return (
    <MobileContainer>
      <Routes>
        <Route path='/carrinho' element={<PaginaCarrinho />}/>
        <Route path='/*' element={<PaginaNavegacaoPadrao />}/>
      </Routes>
    </MobileContainer>
  );
}
