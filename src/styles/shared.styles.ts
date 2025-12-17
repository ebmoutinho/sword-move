import styled from "styled-components";

interface CustomizableSpanStylingProps {
    fontWeight?: number;
    color?: string;
}

export const CustomizableSpan = styled.span<CustomizableSpanStylingProps>`
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "inherit")};
    color: ${({ color }) => (color ? color : "inherit")};
`;
