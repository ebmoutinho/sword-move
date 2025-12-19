import styled from "styled-components";

export const HeaderWrapper = styled.header`
    height: var(--header-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--spacing-64);
`;

export const IconWrapper = styled.div`
    display: flex;
    cursor: pointer;
`;

export const MenuItemsWrapper = styled.nav`
    display: flex;
    gap: var(--spacing-56);
`;
