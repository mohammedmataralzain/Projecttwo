import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  font-size: 62.5%;
}

body {
    background-color: aliceblue;
    overflow-x: hidden;
}

div,
h1,
h2,
h3,
h4, 
h5,
h6,
header,
i,
img,
label,
li,
nav,
p,
small,
span,
ul,
input {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent; 
}

body::-webkit-scrollbar {
width: 1.7rem;
}

body::-webkit-scrollbar-track {
 background-color: transparent;
}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
  border: 5px solid transparent;
  border-radius: 9px;
  background-clip: content-box;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

`;

export default GlobalStyle;
