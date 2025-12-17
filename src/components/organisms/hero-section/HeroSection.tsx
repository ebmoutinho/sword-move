import React from "react";

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
                <HeroRightContent />
            </RightColumn>
        </HeroSectionWrapper>
    );
};

export default HeroSection;
