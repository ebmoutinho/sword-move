import { render, screen } from "@testing-library/react";

import Pill from "./Pill";

describe("Pill", () => {
    it("renders correctly", () => {
        render(<Pill>Pill text</Pill>);

        const pill = screen.getByTestId("pill");

        expect(pill).toHaveStyle("backgroundColor: var(--color-blue-light)");
        expect(pill).toHaveStyle("color: var(--color-white)");
        expect(pill).toHaveStyle("padding: var(--spacing-4) var(--spacing-16)");
        expect(pill).toHaveStyle("borderRadius: var(--spacing-12)");
        expect(pill).toHaveStyle("fontSize: 1.5rem");
        expect(pill).toHaveStyle("fontWeight: 600");
        expect(pill).toHaveStyle("letterSpacing: normal");
        expect(pill).toHaveStyle("width: fit-content");

        expect(pill).toHaveTextContent("Pill text");

        expect(pill).toBeInTheDocument();
        expect(pill).toMatchSnapshot();
    });
});
