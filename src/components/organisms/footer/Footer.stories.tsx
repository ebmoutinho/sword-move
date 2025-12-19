import Footer from "./Footer";

import type { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Organisms/Footer",
    component: Footer,
} as Meta<typeof Footer>;

export const Default: StoryObj<typeof Footer> = {
    render: () => {
        return <Footer />;
    },
};
