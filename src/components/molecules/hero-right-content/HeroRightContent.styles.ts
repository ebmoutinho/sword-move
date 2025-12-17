import styled from "styled-components";

export const HeroRightContentWrapper = styled.div`
    display: flex;
`;

export const Image = styled.img`
    min-width: 50vw; //se não tiver o min, vai abaixo de 50vw!
    max-height: 100vh;
    object-fit: cover;
    filter: opacity(0.9);
`;
