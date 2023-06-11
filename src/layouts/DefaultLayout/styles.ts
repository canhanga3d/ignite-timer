import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: min(95%, 118.4rem);
  height: calc(100vh - 6rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 600px) {
    height: calc(100vh - 16rem);
    margin: 8rem auto;
  }
  @media screen and (min-height: 280px) and (max-height: 455px) {
    height: calc(100vh + 20rem);
    margin: 5rem auto;
  }

  @media screen and (min-height: 456px) and (max-height: 680px) {
    height: calc(100vh + 3rem);
    margin: 5rem auto;
  }
`;
