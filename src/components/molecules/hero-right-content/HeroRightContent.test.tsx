import { act, render, screen } from "@testing-library/react";

import { words } from "../../../data/hero-right-content-data";

import HeroRightContent from "./HeroRightContent";

describe("HeroRightContent", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("renders correctly", () => {
        render(<HeroRightContent heroRightContentData={words} />);

        const heroRightContent = screen.getByTestId("hero-right-content");
        const image = screen.getByRole("img");

        expect(heroRightContent).toBeInTheDocument();
        expect(image).toBeInTheDocument();

        words.forEach((word: string) => {
            const wordElement = screen.getByText(word);

            expect(wordElement).toBeInTheDocument();
            expect(wordElement).toHaveTextContent(word);
            expect(wordElement).toHaveStyle("fontSize: 4rem");
            expect(wordElement).toHaveStyle("fontWeight: 700");
            expect(wordElement).toHaveStyle("color: var(--color-white)");
        });
    });

    it("renders animation with styles", () => {
        render(<HeroRightContent heroRightContentData={words} />);

        const word01 = screen.getByText("CAREER");
        const word02 = screen.getByText("FUTURE SELF");

        expect(word01).toHaveStyle("opacity: 1");
        expect(word02).toHaveStyle("opacity: 0.3");

        act(() => {
            jest.advanceTimersByTime(1500);
        });

        expect(word01).toHaveStyle("opacity: 0.3");
        expect(word02).toHaveStyle("opacity: 1");
    });
});
