import styled from "styled-components";

interface PillWrapperStylingProps {
    color?: string;
    backgroundColor?: string;
    fontSize?: string;
    fontWeight?: string;
    padding?: string;
    borderRadius?: string;
    letterSpacing?: string;
}

export const PillWrapper = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        !["backgroundColor", "fontSize", "borderRadius", "letterSpacing", "fontWeight"].includes(
            prop,
        ),
})<PillWrapperStylingProps>`
    display: flex;
    justify-content: center;
    color: ${({ color }) => (color ? color : "var(--color-black)")};
    background-color: ${({ backgroundColor }) =>
        backgroundColor ? backgroundColor : "var(--color-grey-light)"};
    padding: ${({ padding }) => (padding ? padding : "var(--spacing-4) var(--spacing-20)")};
    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "var(--spacing-16)")};
    width: fit-content;
    min-width: 3ch; //min-width based on character width
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.75rem")}; //12px
    letter-spacing: ${({ letterSpacing }) => (letterSpacing ? letterSpacing : "unset")}; //1px
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
`;
