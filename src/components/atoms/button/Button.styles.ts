import styled from "styled-components";

export const ButtonWrapper = styled.button`
    background-color: var(--color-blue-light);
    color: var(--color-white);
    padding: var(--spacing-12) var(--spacing-32);
    border-radius: var(--spacing-16);

    &:hover {
        background-color: var(--color-blue-medium);
    }

    &:active {
        background-color: var(--color-blue-dark);
    }
`;
