import { injectGlobal } from 'styled-components';

// tslint:disable-next-line no-unused-expression
injectGlobal`
  @font-face {
    font-family: "swiss721bt";
    src: url(${require('./fonts/233CC5_0_0.eot')});
    src: url(${require('./fonts/233CC5_0_0.eot?#iefix')}) format("embedded-opentype"),
         url(${require('./fonts/233CC5_0_0.woff')}) format("woff"),
         url(${require('./fonts/233CC5_0_0.ttf')}) format("truetype");
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "swiss721bt";
    src: url(${require('./fonts/233CC5_1_0.eot')});
    src: url(${require('./fonts/233CC5_1_0.eot?#iefix')}) format("embedded-opentype"),
         url(${require('./fonts/233CC5_1_0.woff')}) format("woff"),
         url(${require('./fonts/233CC5_1_0.ttf')}) format("truetype");
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: "swiss721bt";
    src: url(${require('./fonts/233CC5_2_0.eot')});
    src: url(${require('./fonts/233CC5_2_0.eot?#iefix')}) format("embedded-opentype"),
         url(${require('./fonts/233CC5_2_0.woff')}) format("woff"),
         url(${require('./fonts/233CC5_2_0.ttf')}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: "glyphicons";
    src: url(${require('./fonts/glyphicons-halflings-regular.eot')});
    src: url(${require('./fonts/glyphicons-halflings-regular.eot?#iefix')}) format("embedded-opentype"),
         url(${require('./fonts/glyphicons-halflings-regular.woff')}) format("woff"),
         url(${require('./fonts/glyphicons-halflings-regular.ttf')}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: "fontawesome";
    src: url(${require('./fonts/fa-solid-900.eot')});
    src: url(${require('./fonts/fa-solid-900.eot?#iefix')}) format("embedded-opentype"), 
         url(${require('./fonts/fa-solid-900.woff')}) format("woff"), 
         url(${require('./fonts/fa-solid-900.ttf')}) format("truetype"); 
    font-style: normal;
    font-weight: 900;
  }

  @font-face {
    font-family: "fontawesome";
    src: url(${require('./fonts/fa-regular-400.eot')});
    src: url(${require('./fonts/fa-regular-400.eot?#iefix')}) format("embedded-opentype"), 
         url(${require('./fonts/fa-regular-400.woff')}) format("woff"), 
         url(${require('./fonts/fa-regular-400.ttf')}) format("truetype"); 
    font-style: normal;
    font-weight: 400;
  }
  
  @font-face {
    font-family: "fontawesome";
    src: url(${require('./fonts/fa-brands-400.eot')});
    src: url(${require('./fonts/fa-brands-400.eot?#iefix')}) format("embedded-opentype"), 
         url(${require('./fonts/fa-brands-400.woff')}) format("woff"), 
         url(${require('./fonts/fa-brands-400.ttf')}) format("truetype"); 
    font-style: normal;
    font-weight: normal;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: "swiss721bt", 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 15px;
	  font-size: 1.5rem;
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
  }

  /* Headings */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
      font-family: inherit;
      font-weight: normal;
      line-height: 1.1em;
      color: inherit;
  }
  
  h1 {
      font-size: 28px;
      font-size: 2.8rem;
      font-weight: 100;
  }
  
  h2 {
      font-size: 21px;
      font-size: 2.1rem;
      font-weight: 100;
  }
  
  h3 {
      font-size: 16px;
      font-size: 1.6rem;
  }
  
  h4 {
      font-size: 13px;
      font-size: 1.3rem;
    font-weight: bold;
  }
  
  h5 {
      font-size: 12px;
      font-size: 1.2rem;
      font-weight: bold;
  }
  
  h6 {
      font-size: 11px;
      font-size: 1.1rem;
      font-weight: bold;
  }
`;