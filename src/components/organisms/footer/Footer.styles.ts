import styled from "styled-components";

export const FooterWrapper = styled.footer`
    display: flex;
    background-color: var(--color-grey-light);
    padding: var(--spacing-32) var(--spacing-64);
`;

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    gap: 20px;
`;

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: var(--spacing-10);
    width: 50%;
`;

export const InfoColumn = styled.div`
    display: flex;
    width: 100%;

    justify-content: space-between;
`;

export const GroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);
`;

interface FooterItemStylingProps {
    fontSize?: string;
    fontWeight?: number;
}

export const FooterItem = styled.p.withConfig({
    shouldForwardProp: (prop) => !["fontSize", "fontWeight"].includes(prop),
})<FooterItemStylingProps>`
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "unset")};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 500)};
`;
