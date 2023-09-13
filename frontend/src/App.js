import './App.scss'
import { HeaderNavegacao } from './components/HeaderNavegacao';
import { MobileContainer } from './components/MobileContainer';

export const App = () => {
  return (
    <MobileContainer>
      <HeaderNavegacao />
    </MobileContainer>
  );
}
