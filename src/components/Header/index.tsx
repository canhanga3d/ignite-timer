import { Scroll, Timer } from '@phosphor-icons/react';
import { HeaderContainer } from './styles';
import logo from './../../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo do ignite timer" />

      <nav>
        <NavLink
          to="/"
          title="timer"
          aria-label="Link para ir para a pagina principal"
        >
          <Timer
            size={24}
            aria-label="ícone de temporizador"
            alt="ícone de temporizador"
          />
        </NavLink>
        <NavLink
          to="/history"
          title="histórico"
          aria-label="link para ir para a pagina de histórico"
        >
          <Scroll
            size={24}
            aria-label="ícone de scroll"
            alt="ícone de scroll"
          />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
