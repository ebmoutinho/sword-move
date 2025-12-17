import React from "react";

import { PillEnum, StartingStepsEnum } from "../../../enums/enums";
import { CustomizableSpan } from "../../../styles/shared.styles";
import type { CardType } from "../../../types/Card.types";

import Pill from "../../atoms/pill/Pill";

import CardBook from "../card-book/CardBook";

import { PillAndTitleWrapper, StartingStepsWrapper, Title } from "./StartingSteps.styles";

interface StartingStepsProps {
    cardData: CardType[];
}

const StartingSteps: React.FC<StartingStepsProps> = ({ cardData }) => {
    return (
        <StartingStepsWrapper data-testid="stating-steps">
            <PillAndTitleWrapper>
                <Pill>{PillEnum.Text}</Pill>

                <Title>
                    {StartingStepsEnum.Title01}
                    <CustomizableSpan color="var(--color-blue-light)">
                        {StartingStepsEnum.Title02}
                    </CustomizableSpan>
                </Title>
            </PillAndTitleWrapper>

            <CardBook cardData={cardData} />
        </StartingStepsWrapper>
    );
};

export default StartingSteps;
