import React from "react";

import StartingSteps from "../../components/organisms/starting-steps/StartingSteps";
import { cardData } from "../../data/card-data";

import { GettingStartedWrapper } from "./GettingStartedPage.styles";

const GettingStartedPage: React.FC = () => {
    return (
        <GettingStartedWrapper data-testid="getting-started-page">
            <StartingSteps cardData={cardData} />
        </GettingStartedWrapper>
    );
};

export default GettingStartedPage;
