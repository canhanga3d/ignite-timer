import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    display: flex;
    align-items: center;

    gap: 0.8rem;

    a {
      padding: 1rem;
      color: ${(props) => props.theme['gray-100']};

      width: 4.8rem;
      height: 4.8rem;

      border-bottom: 3px solid transparent;
      border-top: 3px solid transparent;
      outline: none;
      transition: color 0.5s ease-in-out, border 0.5s ease-in-out;

      &:hover {
        color: ${(props) => props.theme['green-500']};
        border-top: 3px solid ${(props) => props.theme['green-500']};
      }
      &.active {
        color: ${(props) => props.theme['green-500']};
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }
      &.active:hover {
        border-bottom: 3px solid transparent;
      }
      &:focus {
        display: none;
      }
    }
  }
`;
