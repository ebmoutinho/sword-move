import { render, screen } from "@testing-library/react";

import HeroLeftContent from "./HeroLeftContent";

describe("HeroLeftContent", () => {
    it("renders correctly", () => {
        render(<HeroLeftContent />);

        const heroLeftContent = screen.getByTestId("hero-left-content");
        const moveSpan = screen.getByTestId("animated-span");
        const button = screen.getByTestId("button");

        expect(heroLeftContent).toBeInTheDocument();
        expect(moveSpan).toBeInTheDocument();
        expect(button).toBeInTheDocument();

        expect(moveSpan).toHaveStyle("color: var(--color-blue-light)");
    });

    it("renders animated span with hover animation'", () => {
        render(<HeroLeftContent />);

        const moveWithAnimation = screen.getByTestId("animated-span");

        expect(moveWithAnimation).toHaveStyleRule(
            "animation",
            expect.stringContaining("1.5s infinite ease-in-out") as string,
            {
                modifier: ":hover",
            },
        );
    });
});
