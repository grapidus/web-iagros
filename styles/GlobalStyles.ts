import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0 !important;
    padding: 0 !important;
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden; /* Prevenimos scroll horizontal a nivel global */
  }
  
  #__next {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p, ul, ol, li {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    list-style: none;
  }
`;

export default GlobalStyles;
