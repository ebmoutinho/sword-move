import React from "react";

import momAndBabyPhoto from "../../../assets/photos/mom-and-baby.jpg";

import { HeroRightContentWrapper, Image } from "./HeroRightContent.styles";

const HeroRightContent: React.FC = () => {
    return (
        <HeroRightContentWrapper>
            <Image src={momAndBabyPhoto} />
        </HeroRightContentWrapper>
    );
};

export default HeroRightContent;
