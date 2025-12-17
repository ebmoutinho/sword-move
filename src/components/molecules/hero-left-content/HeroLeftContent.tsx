import React from "react";

import { HeroLeftContentEnum } from "../../../enums/enums";

import Button from "../../atoms/button/Button";

import {
    CustomizableSpan,
    BottomMessage,
    Description,
    HeroLeftContentWrapper,
    Title,
} from "./HeroLeftContent.styles";

const HeroLeftContent: React.FC = () => {
    return (
        <HeroLeftContentWrapper data-testid="hero-left-content">
            <Title>
                {HeroLeftContentEnum.Title01}
                <CustomizableSpan color="var(--color-blue-light)">
                    {HeroLeftContentEnum.Title02}
                </CustomizableSpan>
            </Title>

            <Description>
                <CustomizableSpan fontWeight={600}>
                    {HeroLeftContentEnum.DescriptionName}
                </CustomizableSpan>
                {HeroLeftContentEnum.Description}
            </Description>

            <Button>{HeroLeftContentEnum.Button}</Button>

            <BottomMessage>{HeroLeftContentEnum.BottomMessage}</BottomMessage>
        </HeroLeftContentWrapper>
    );
};

export default HeroLeftContent;
