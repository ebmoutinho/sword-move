import { MemoryRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";

import HeroSection from "./HeroSection";

describe("HeroSection", () => {
    it("renders correctly", () => {
        render(
            <MemoryRouter>
                <HeroSection />
            </MemoryRouter>,
        );

        const heroSection = screen.getByTestId("hero-section");
        const heroLeftContent = screen.getByTestId("hero-left-content");
        const heroRightContent = screen.getByTestId("hero-right-content");

        expect(heroSection).toBeInTheDocument();
        expect(heroSection).toHaveStyle("height: calc(100vh - var(--header-height)");

        expect(heroLeftContent).toBeInTheDocument();
        expect(heroRightContent).toBeInTheDocument();
    });
});
