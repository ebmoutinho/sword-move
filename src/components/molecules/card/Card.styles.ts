import styled from "styled-components";

import Pill from "../../atoms/pill/Pill";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 46px;
`;

export const Image = styled.img`
    width: 100%;
    border-radius: var(--spacing-16);
    filter: opacity(0.9);
`;

export const LineSeparatorAndPillWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const StyledPill = styled(Pill)`
    position: absolute;
    top: calc(-1 * var(--spacing-20));
`;

export const LineSeparator = styled.div`
    width: calc(100% + var(--spacing-128));
    height: var(--spacing-2);
    background-color: var(--color-grey-light);
    transform: translateX(calc(-1 * var(--spacing-64)));
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-8);
`;

export const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
`;
