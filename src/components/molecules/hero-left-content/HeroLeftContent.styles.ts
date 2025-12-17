import styled from "styled-components";

export const HeroLeftContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-32);
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 60px;
    font-weight: 900;
    line-height: 1.2;
`;

export const Description = styled.p`
    line-height: 1.8;
`;

export const BottomMessage = styled.p`
    font-weight: 600;
`;

interface CustomizableSpanStylingProps {
    fontWeight?: number;
    color?: string;
}

export const CustomizableSpan = styled.span<CustomizableSpanStylingProps>`
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "inherit")};
    color: ${({ color }) => (color ? color : "inherit")};
`;
