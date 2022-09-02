import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --blue: #00A3FF;
  --dark-200: #151B26;
  --white: #FFFFFF;
  --dark: #06090F;
  --grey: #BFBFBF;
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
