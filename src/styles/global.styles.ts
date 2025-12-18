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

    html {
        font-size: 16px;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: "Outfit", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5; //16px × 1.5 = 24px
        color: var(--color-dark);

        -webkit-font-smoothing: antialiased;
        color: var(--color-dark);
        background-color: var(--color-white);
        margin: 0;
        overflow: auto;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
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
        font-family: inherit;
        border: none;
        appearance: none;
        padding: 0;
        cursor: pointer;
        color: initial;

        font-size: 16px;
    }

    //scrollbar width
    ::-webkit-scrollbar {
        width: var(--spacing-8);
    }

    //scrollbar Track
    ::-webkit-scrollbar-track {
        background: var(--color-white);
    }

    //scrollbar Handle
    ::-webkit-scrollbar-thumb {
        background: var(--color-blue-light);
        border-radius: var(--spacing-8);
    }

    //scrollbar Handle on hover
    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-blue-medium);
    }

    ::selection {
        color: var(--color-white);
        background: var(--color-blue-medium);
    }
`;

export default GlobalStyles;
