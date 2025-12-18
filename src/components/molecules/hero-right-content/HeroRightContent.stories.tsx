import { heroRightContentData } from "../../../data/hero-right-content-data";

import HeroRightContent from "./HeroRightContent";

import type { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Molecules/HeroRightContent",
    component: HeroRightContent,
    argTypes: {
        heroRightContentData: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<typeof HeroRightContent>;

export const Default: StoryObj<typeof HeroRightContent> = {
    render: () => {
        return <HeroRightContent heroRightContentData={heroRightContentData} />;
    },
};
