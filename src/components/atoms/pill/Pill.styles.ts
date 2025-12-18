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
    color: ${({ color }) => (color ? color : "var(--color-white)")};
    background-color: ${({ backgroundColor }) =>
        backgroundColor ? backgroundColor : "var(--color-blue-light)"};
    padding: ${({ padding }) => (padding ? padding : "var(--spacing-4) var(--spacing-16)")};
    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "var(--spacing-12)")};
    width: fit-content;
    min-width: 3ch; //min-width based on character width
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.5rem")};
    letter-spacing: ${({ letterSpacing }) => (letterSpacing ? letterSpacing : "normal")};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
`;
