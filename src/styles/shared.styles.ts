import styled, { css, keyframes } from "styled-components";

interface CustomizableSpanStylingProps {
    fontWeight?: number;
    color?: string;
    animate?: boolean;
}

export const CustomizableSpan = styled.span.withConfig({
    shouldForwardProp: (prop) => !["fontWeight", "animate"].includes(prop),
})<CustomizableSpanStylingProps>`
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "inherit")};
    color: ${({ color }) => (color ? color : "inherit")};

    ${({ animate }) =>
        animate &&
        css`
            cursor: pointer;
            display: inline-block;
            transition: all 300ms ease-in-out;

            &:hover {
                transform: scale(1.05);
            }
        `}
`;
