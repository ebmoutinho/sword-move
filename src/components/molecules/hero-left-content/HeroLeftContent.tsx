import React from "react";
import { useNavigate } from "react-router-dom";

import { HeroLeftContentEnum } from "../../../enums/enums";
import { RouteEnum } from "../../../enums/routes.enums";
import { CustomizableSpan } from "../../../styles/shared.styles";

import Button from "../../atoms/button/Button";

import {
    BottomMessage,
    Description,
    HeroLeftContentWrapper,
    Title,
} from "./HeroLeftContent.styles";

const HeroLeftContent: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        void navigate(RouteEnum.GettingStarted);
    };

    return (
        <HeroLeftContentWrapper data-testid="hero-left-content">
            <Title>
                {HeroLeftContentEnum.Title01}
                <CustomizableSpan
                    data-testid="animated-span"
                    animate
                    color="var(--color-blue-light)"
                >
                    {HeroLeftContentEnum.Title02}
                </CustomizableSpan>
            </Title>

            <Description>
                <CustomizableSpan fontWeight={600}>
                    {HeroLeftContentEnum.DescriptionName}
                </CustomizableSpan>
                {HeroLeftContentEnum.Description}
            </Description>

            <Button onClick={handleButtonClick}>{HeroLeftContentEnum.Button}</Button>

            <BottomMessage>{HeroLeftContentEnum.BottomMessage}</BottomMessage>
        </HeroLeftContentWrapper>
    );
};

export default HeroLeftContent;
