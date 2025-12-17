import { cardData } from "../../../data/card-data";

import CardBook from "./CardBook";

import type { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Organisms/CardBook",
    component: CardBook,
    argTypes: {
        cardData: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<typeof CardBook>;

export const Default: StoryObj<typeof CardBook> = {
    args: {},
    render: () => {
        return <CardBook cardData={cardData} />;
    },
};
