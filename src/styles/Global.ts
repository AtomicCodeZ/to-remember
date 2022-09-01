import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --blue: #DA2535;
  --dark-200: #515151;
  --white: #F9F9F9;
  --dark: #0B1421;
  --grey: #F9F9F9;
}

@media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  button {
    border: 0;
    background: none;
    
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  html {
    -webkit-font-smoothing: antialized;
  }

  body {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Rubik", sans-serif;
  }
`;
