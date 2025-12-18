import React from "react";

import StartingSteps from "../../components/organisms/starting-steps/StartingSteps";
import { cardData } from "../../data/card-data";

const GettingStartedPage: React.FC = () => {
    return (
        <div data-testid="getting-started-page">
            <StartingSteps cardData={cardData} />
        </div>
    );
};

export default GettingStartedPage;
