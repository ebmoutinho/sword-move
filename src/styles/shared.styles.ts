import styled, { css, keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

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

            &:hover {
                animation: ${pulse} 1.5s infinite ease-in-out;
            }
        `}
`;
