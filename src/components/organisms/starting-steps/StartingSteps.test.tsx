import { render, screen } from "@testing-library/react";

import { cardData } from "../../../data/card-data";

import StartingSteps from "./StartingSteps";

describe("StartingSteps", () => {
    it("renders correctly", () => {
        render(<StartingSteps cardData={cardData} />);

        const startingSteps = screen.getByTestId("starting-steps");
        const pills = screen.getAllByTestId("pill");

        expect(startingSteps).toBeInTheDocument();

        expect(pills[0]).toBeInTheDocument();
        expect(pills[0]).toHaveTextContent("HOW IT WORKS");

        const cardPills = pills.slice(1);

        cardPills.forEach((pill: HTMLElement, index: number) => {
            expect(pill).toHaveTextContent(String(index + 1));
        });
    });
});
