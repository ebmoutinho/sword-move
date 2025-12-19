import { Link } from "react-router-dom";

import styled from "styled-components";

interface MenuItemWrapperStylingProps {
    isSelected: boolean;
}

export const MenuItemWrapper = styled(Link).withConfig({
    shouldForwardProp: (prop) => !["isSelected"].includes(prop),
})<MenuItemWrapperStylingProps>`
    font-weight: 600;

    color: ${({ isSelected }) => (isSelected ? "var(--color-blue-light)" : "var(--color-dark)")};

    &:hover {
        color: var(--color-blue-medium);
    }

    &:active {
        color: var(--color-blue-dark);
    }
`;
