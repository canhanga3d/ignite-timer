import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Roboto:wght@400;700&display=swap');
  *, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  :root{
  font-size: 62.5%;
}
:focus{
  outline:0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
}


body{
  background-color: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};

}
body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
}
`;
