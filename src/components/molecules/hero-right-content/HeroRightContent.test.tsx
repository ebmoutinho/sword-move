import { render, screen } from "@testing-library/react";

import { heroRightContentData as words } from "../../../data/hero-right-content-data";

import HeroRightContent from "./HeroRightContent";

describe("HeroRightContent", () => {
    it("renders correctly", () => {
        render(<HeroRightContent heroRightContentData={words} />);

        const heroRightContent = screen.getByTestId("hero-right-content");

        expect(heroRightContent).toBeInTheDocument();
    });
});
