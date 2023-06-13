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
          title="Link para ir para a pagina principal"
          aria-label="Link para ir até a pagina principal"
        >
          <Timer
            size={24}
            aria-label="ícone de temporizador"
            alt="ícone de temporizador"
          />
        </NavLink>
        <NavLink
          to="/history"
          title="link para ir até a pagina de histórico"
          aria-label="link para ir até a pagina de histórico"
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
