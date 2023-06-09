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
      color: ${(props) => props.theme['gray-100']};
      width: 4.8rem;
      height: 4.8rem;
      padding: 1rem;
      border-bottom: 3px solid transparent;
      border-top: 3px solid transparent;
      transition: color 0.5s ease-in-out, border 0.5s ease-in-out;
      &:focus {
        box-shadow: 0 0 0 0 transparent;
      }

      &:hover {
        border-top: 3px solid ${(props) => props.theme['green-500']};
      }
      &.active {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }
      &:hover,
      &.active {
        color: ${(props) => props.theme['green-500']};
        transition: color 0.5s ease-in-out, border 0.5s ease-in-out;
      }

      &.active:hover {
        border-bottom: 3px solid transparent;
      }
    }
  }
`;
