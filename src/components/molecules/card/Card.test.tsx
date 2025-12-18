import { render, screen } from "@testing-library/react";

import { cardData } from "../../../data/card-data";
import type { CardType } from "../../../types/Card.types";

import Card from "./Card";

describe("Card", () => {
    it("renders correctly", () => {
        const card01Data: CardType = cardData[0]!;

        render(
            <Card
                id={card01Data.id}
                imageUrl={card01Data.imageUrl}
                alt={card01Data.alt}
                title={card01Data.title}
                description={card01Data.description}
            />,
        );

        const card = screen.getByTestId("card-1");
        const image = screen.getByRole("img");
        const pill = screen.getByTestId("pill");

        expect(card).toBeInTheDocument();

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("alt", "woman working on her computer at home desk");
        expect(image).toHaveStyle("borderRadius: var(--spacing-16)");
        expect(image).toHaveStyle("filter: opacity(0.9)");

        expect(pill).toBeInTheDocument();
        expect(pill).toHaveTextContent("1");
    });
});
