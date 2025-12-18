import styled from "styled-components";

export const ButtonWrapper = styled.button`
    background-color: var(--color-blue-light);
    color: var(--color-white);
    padding: var(--spacing-16) var(--spacing-36);
    border-radius: var(--spacing-16);
    width: fit-content;
    cursor: pointer;

    &:hover {
        background-color: var(--color-blue-medium);
    }

    &:active {
        background-color: var(--color-blue-dark);
    }

    &:focus-visible {
        outline: var(--spacing-2) solid var(--color-blue-medium);
        outline-offset: var(--spacing-2);
        border-radius: var(--spacing-20);
        z-index: var(--layers-1);
    }
`;
