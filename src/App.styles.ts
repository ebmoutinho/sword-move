import styled from "styled-components";

export const AppWrapper = styled.main`
    overflow-x: hidden;
    position: relative;
`;

export const HeroSectionWrapper = styled.section`
    display: flex;
    margin-top: var(--header-height);
`;

export const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: var(--spacing-64);
    height: calc(100vh - var(--header-height));
    margin-top: var(--header-height);
`;
