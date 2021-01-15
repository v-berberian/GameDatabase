import {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body > * {
    font-family: 'Fira Code', monospace;
}
a,
a:active,
a:focus {
    text-decoration: none;
    outline: none;
    color: black
}
`

export default GlobalStyles;