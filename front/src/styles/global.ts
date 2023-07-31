import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus{
  outline: 0;
}

body{
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body, input, button{
    font-size: 0.875rem; // 14px
    font-family: 'Montserrat', sans-serif;

    ::placeholder{
      font-size: 1rem; //16px
    }
}

a{
    text-decoration: none;
}
ul{
    list-style: none;
}

button{
    border: none;
    background: transparent;
    cursor: pointer;
}

h1,h2,h3,h4,h5,h6,span,p{
    margin: 0;
    padding: 0;
}
`;
