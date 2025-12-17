import React from "react";

import { CardWrapper, Image, Description, Title } from "./Card.styles";

interface CardProps {
    image: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
    return (
        <CardWrapper data-testid="card">
            <Image src={image} />
            <Title>{title}</Title>
            <Description>{description}</Description>
        </CardWrapper>
    );
};

export default Card;
