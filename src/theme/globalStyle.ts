import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0px;
  }
`;

export default GlobalStyle;
