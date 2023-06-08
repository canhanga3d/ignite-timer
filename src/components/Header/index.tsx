import { Scroll, Timer } from '@phosphor-icons/react';
import { HeaderContainer } from '../style';
import logo from './../../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo do ignite timer" />
      <img src="" alt="" srcSet="" />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
