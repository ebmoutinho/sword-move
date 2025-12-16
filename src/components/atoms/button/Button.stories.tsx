import Button from "./Button";

import type { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
        children: {
            control: {
                type: "text",
            },
            description: "Button text",
        },
    },
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
    args: {
        children: "Button text",
    },
    render: (args) => {
        return <Button onClick={() => alert("Button clicked!")}>{args.children}</Button>;
    },
};
