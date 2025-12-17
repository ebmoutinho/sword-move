import { cardData } from "../../../data/card-data";

import StartingSteps from "./StartingSteps";

import type { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Organisms/StartingSteps",
    component: StartingSteps,
    argTypes: {
        cardData: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<typeof StartingSteps>;

export const Default: StoryObj<typeof StartingSteps> = {
    render: () => {
        return <StartingSteps cardData={cardData} />;
    },
};
