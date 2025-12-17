import React from "react";

import {
    CardWrapper,
    Image,
    Description,
    Title,
    TextWrapper,
    LineSeparator,
    LineSeparatorAndPillWrapper,
    StyledPill,
} from "./Card.styles";

interface CardProps {
    id: number;
    image: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ id, image, title, description }) => {
    return (
        <CardWrapper data-testid="card">
            <Image src={image} />

            <LineSeparatorAndPillWrapper data-test="LineSeparatorAndPillWrapper">
                <LineSeparator data-test="LineSeparator" />

                <StyledPill>{id}</StyledPill>
            </LineSeparatorAndPillWrapper>

            <TextWrapper>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </TextWrapper>
        </CardWrapper>
    );
};

export default Card;
