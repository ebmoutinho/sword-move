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
                <Pill
                    color="var(--color-black)"
                    backgroundColor="var(--color-grey-light)"
                    fontSize="0.75rem"
                    padding="var(--spacing-4) var(--spacing-20)"
                    borderRadius="var(--spacing-16)"
                    fontWeight="400"
                    letterSpacing="0.0625rem"
                >
                    {PillEnum.Text}
                </Pill>

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
