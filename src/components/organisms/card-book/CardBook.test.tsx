import { render, screen, within } from "@testing-library/react";

import { cardData } from "../../../data/card-data";
import type { CardType } from "../../../types/Card.types";

import CardBook from "./CardBook";

describe("CardBook", () => {
    it("renders correctly", () => {
        render(<CardBook cardData={cardData} />);

        const cardBook = screen.getByTestId("card-book");

        expect(cardBook).toBeInTheDocument();

        cardData.forEach((_: CardType, index: number) => {
            const cardElement = screen.getByTestId(`card-${index + 1}`);
            const pill = within(cardElement).getByTestId("pill");

            expect(cardElement).toBeInTheDocument();
            expect(pill).toHaveTextContent(String(index + 1));
        });
    });
});
