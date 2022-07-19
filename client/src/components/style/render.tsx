import property from 'lodash/property';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body,
  div#root {
    min-height: 100vh;
  }

  html {
    background-color: #fbfcfc;
    opacity: 1;
  }

  body {
    font-family: ${property('theme.typography.main')};
  }

  nav {
    h4 {
      display: none;
    }
  }

  pre {
    font-size: 0.75rem;
  }
`;
