import styled from "styled-components";

import HeroLeftContent from "./HeroLeftContent";

import type { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Molecules/HeroLeftContent",
    component: HeroLeftContent,
} as Meta<typeof HeroLeftContent>;

const HeroLeftContentWrapper = styled.div`
    background-color: var(--color-grey-light);
`;

export const Default: StoryObj<typeof HeroLeftContent> = {
    render: () => {
        return (
            <HeroLeftContentWrapper>
                <HeroLeftContent />
            </HeroLeftContentWrapper>
        );
    },
};
