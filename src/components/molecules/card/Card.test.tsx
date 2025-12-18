import { render, screen } from "@testing-library/react";

import Card from "./Card";

describe("Card", () => {
    it("renders correctly", () => {
        render(
            <Card
                id={1}
                imageUrl={"url"}
                alt={"alt text"}
                title={"Card title"}
                description={"Card description"}
            />,
        );

        const card = screen.getByTestId("card");
        const image = screen.getByRole("img");
        const pill = screen.getByTestId("pill");

        expect(card).toBeInTheDocument();

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("alt", "alt text");
        expect(image).toHaveStyle("borderRadius: var(--spacing-16)");
        expect(image).toHaveStyle("filter: opacity(0.9)");

        expect(pill).toBeInTheDocument();
        expect(pill).toHaveTextContent("1");
    });
});
