import HeroSection from "./HeroSection";

import type { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Organisms/HeroSection",
    component: HeroSection,
} as Meta<typeof HeroSection>;

export const Default: StoryObj<typeof HeroSection> = {
    render: () => {
        return <HeroSection />;
    },
};
