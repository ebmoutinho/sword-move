import styled from "styled-components";

export const ButtonWrapper = styled.button`
    background-color: var(--color-blue-light);
    color: var(--color-white);
    padding: var(--spacing-16) var(--spacing-36);
    border-radius: var(--spacing-16);
    width: fit-content;

    &:hover {
        background-color: var(--color-blue-medium);
    }

    &:active {
        background-color: var(--color-blue-dark);
    }
`;
