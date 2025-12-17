import Pill from "./Pill";

import type { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Atoms/Pill",
    component: Pill,
    argTypes: {
        children: {
            control: { type: "text" },
            description: "Pill content",
        },
        color: {
            control: { type: "color" },
            description: "Text color of the Pill",
        },
        backgroundColor: {
            control: { type: "color" },
            description: "Pill background color",
        },
        fontSize: {
            control: { type: "text" },
            description: "Pill font size",
        },
        padding: {
            control: { type: "text" },
            description: "Pill padding",
        },
        borderRadius: {
            control: { type: "text" },
            description: "Pill border radius",
        },
        letterSpacing: {
            control: { type: "text" },
            description: "Pill letter spacing",
        },
        fontWeight: {
            control: { type: "text" },
            description: "Pill font weight",
        },
    },
} as Meta<typeof Pill>;

export const NumberPill: StoryObj<typeof Pill> = {
    args: {
        children: "1",
        color: "var(--color-white)",
        backgroundColor: "var(--color-blue-light)",
        fontSize: "var(--spacing-24)",
        padding: "var(--spacing-4) var(--spacing-16)",
        borderRadius: "var(--spacing-12)",
        fontWeight: "600",
        letterSpacing: "unset",
    },
    render: (args) => {
        return <Pill {...args}>{args.children}</Pill>;
    },
};

export const TextPill: StoryObj<typeof Pill> = {
    args: {
        children: "HOW IT WORKS",
        color: "var(--color-black)",
        backgroundColor: "var(--color-grey-light)",
        fontSize: "var(--spacing-12)",
        padding: "var(--spacing-4) var(--spacing-20)",
        borderRadius: "var(--spacing-16)",
        fontWeight: "400",
        letterSpacing: "0.0625rem",
    },
    render: (args) => {
        return <Pill {...args}>{args.children}</Pill>;
    },
};
