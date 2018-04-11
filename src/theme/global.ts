import { injectGlobal } from 'styled-components';

// tslint:disable-next-line no-unused-expression
injectGlobal`
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: Helvetica, Arial, sans-serif;
	  font-size: 1.5rem;
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
  }
`;