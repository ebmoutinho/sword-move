import React from "react";

import type { CardType } from "../../../types/Card.types";

import Card from "../../molecules/card/Card";

import { CardBookWrapper } from "./CardBook.styles";

interface CardBookProps {
    cardData: CardType[];
}

const CardBook: React.FC<CardBookProps> = ({ cardData }) => {
    return (
        <CardBookWrapper data-testid="card-book">
            {cardData.map((card: CardType, index) => {
                return (
                    <Card
                        key={`${card.id}-${index}`}
                        id={card.id}
                        image={card.imageUrl}
                        title={card.title}
                        description={card.description}
                    />
                );
            })}
        </CardBookWrapper>
    );
};

export default CardBook;
