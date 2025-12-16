import { createGlobalStyle } from "styled-components";

import colorsStyles from "./colors.styles";
import spacingStyles from "./spacing.styles";

const GlobalStyles = createGlobalStyle`
    :root {
        ${colorsStyles};
        ${spacingStyles};
    }

    #root {
        width: 100%;
        height: 100%;
    }

    * {
        box-sizing: border-box;
        font-family: "Outfit", sans-serif;
    }

    body {
        -webkit-font-smoothing: antialiased;
        color: black;
        background-color: white;
        margin: 0;
        overflow: auto;
    }

    *:focus-visible {
        outline: 2px solid var(--color-blue-medium);
        outline-offset: 2px;
        border-radius: var(--spacing-20);
        z-index: var(--layers-1);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        color: inherit;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ol,
    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    button {
        border: none;
        appearance: none;
        padding: 0;
        cursor: pointer;
        color: initial;

        /* for keyboard navigation */
        &:focus-visible {
            /* outline: none; */
        }

        font-size: 16px;
    }

    
`;

export default GlobalStyles;
