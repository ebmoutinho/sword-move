import styled from "styled-components";

import { cardData } from "../../../data/card-data";
import type { CardType } from "../../../types/Card.types";

import Card from "./Card";

import type { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Molecules/Card",
    component: Card,
    argTypes: {
        id: {
            table: {
                disable: true,
            },
        },
        image: {
            table: {
                disable: true,
            },
        },
        title: {
            table: {
                disable: true,
            },
        },
        description: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<typeof Card>;

const CardWrapper = styled.div`
    width: 30%;
`;

export const Default: StoryObj<typeof Card> = {
    render: () => {
        const card01Data: CardType = cardData[0]!;

        return (
            <CardWrapper>
                <Card
                    id={card01Data.id}
                    image={card01Data.imageUrl}
                    title={card01Data.title}
                    description={card01Data.description}
                />
            </CardWrapper>
        );
    },
};
