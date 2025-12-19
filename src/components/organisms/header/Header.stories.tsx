import Header from "./Header";

import type { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Organisms/Header",
    component: Header,
} as Meta<typeof Header>;

export const Default: StoryObj<typeof Header> = {
    render: () => {
        return <Header />;
    },
};
