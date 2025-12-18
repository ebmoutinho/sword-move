import React from "react";

import { words } from "../../../data/hero-right-content-data";

import HeroLeftContent from "../../molecules/hero-left-content/HeroLeftContent";
import HeroRightContent from "../../molecules/hero-right-content/HeroRightContent";

import { HeroSectionWrapper, LeftColumn, RightColumn } from "./HeroSection.styles";

const HeroSection: React.FC = () => {
    return (
        <HeroSectionWrapper data-testid="hero-section">
            <LeftColumn data-test="LeftColumn">
                <HeroLeftContent />
            </LeftColumn>

            <RightColumn data-test="RightColumn">
                <HeroRightContent heroRightContentData={words} />
            </RightColumn>
        </HeroSectionWrapper>
    );
};

export default HeroSection;
