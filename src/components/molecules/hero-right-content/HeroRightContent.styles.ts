import styled from "styled-components";

export const HeroRightContentWrapper = styled.div`
    display: flex;
`;

export const Image = styled.img`
    min-width: 50vw;
    max-height: 100vh;
    object-fit: cover;
    filter: opacity(0.9);
`;

export const WordsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: var(--spacing-12) var(--spacing-36);
    position: absolute;
`;

export const Word = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    color: var(--color-white);
`;
