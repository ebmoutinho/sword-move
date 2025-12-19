import styled from "styled-components";

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    height: var(--header-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--spacing-64);
    width: 100%;
    background-color: var(--color-white);
    z-index: 2;
`;

export const IconWrapper = styled.div`
    display: flex;
    cursor: pointer;
`;

export const MenuItemsWrapper = styled.nav`
    display: flex;
    gap: var(--spacing-56);
`;
