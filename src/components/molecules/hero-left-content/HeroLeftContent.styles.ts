import styled from "styled-components";

export const HeroLeftContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-32);
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 3.75rem;
    font-weight: 900;
    line-height: 1.2;
`;

export const Description = styled.p`
    line-height: 1.8;
`;

export const BottomMessage = styled.p`
    font-weight: 600;
`;
