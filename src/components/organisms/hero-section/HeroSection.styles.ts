import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    height: calc(100% - var(--header-height));
`;

export const LeftColumn = styled.div`
    display: flex;
    width: 50%;
    background-color: var(--color-grey-light);
    height: 100%;
    padding-inline: var(--spacing-64);
`;

export const RightColumn = styled.div`
    display: flex;
    width: 50%;
`;
