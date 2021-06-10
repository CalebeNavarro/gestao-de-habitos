import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --background-primary: #A8CCE7;
        --background-second: #3F3D56;
        --color-primary: #6C63FF;
        --color-second: #2F2E41;
        --background-gray: #E5E5E5;
        --white: #f5f5f5;
        --black: #0C0D0B;
        --color-placeholder:#4e5555;
        --font-home: "Baloo Tamma 2", "cursive";
    }

    body {
        font-family: "Roboto", sans-serif;
        background-color: var(--background-primary);
        color: var(--black);
        font-size: 16px;
        -webkit-font-smoothing: antialiased !important;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: "PT Serif", serif;
        font-weight: 700;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        border: none;
    }
`;

export default GlobalStyle;
