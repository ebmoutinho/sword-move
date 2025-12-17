import React from "react";

import Pill from "../../atoms/pill/Pill";

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

                <StyledPill
                    color="var(--color-white)"
                    backgroundColor="var(--color-blue-light)"
                    fontSize="var(--spacing-24)"
                    padding="var(--spacing-4) var(--spacing-16)"
                    borderRadius="var(--spacing-12)"
                    fontWeight="600"
                >
                    {id}
                </StyledPill>
            </LineSeparatorAndPillWrapper>

            <TextWrapper>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </TextWrapper>
        </CardWrapper>
    );
};

export default Card;
