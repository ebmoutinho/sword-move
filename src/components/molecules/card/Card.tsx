import React from "react";

import {
    CardWrapper,
    Image,
    Title,
    TextWrapper,
    LineSeparator,
    LineSeparatorAndPillWrapper,
    StyledPill,
} from "./Card.styles";

interface CardProps {
    id: number;
    imageUrl: string;
    alt: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ id, imageUrl, alt, title, description }) => {
    return (
        <CardWrapper data-testid={`card-${id}`}>
            <Image src={imageUrl} alt={alt} loading="lazy" />

            <LineSeparatorAndPillWrapper>
                <LineSeparator />

                <StyledPill>{id}</StyledPill>
            </LineSeparatorAndPillWrapper>

            <TextWrapper>
                <Title>{title}</Title>
                <p>{description}</p>
            </TextWrapper>
        </CardWrapper>
    );
};

export default Card;
