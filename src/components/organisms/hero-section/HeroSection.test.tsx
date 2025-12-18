import { render, screen } from "@testing-library/react";

import HeroSection from "./HeroSection";

describe("HeroSection", () => {
    it("renders correctly", () => {
        render(<HeroSection />);

        const heroSection = screen.getByTestId("hero-section");
        const heroLeftContent = screen.getByTestId("hero-left-content");
        const heroRightContent = screen.getByTestId("hero-right-content");

        expect(heroSection).toBeInTheDocument();
        expect(heroSection).toHaveStyle("height: 100vh");

        expect(heroLeftContent).toBeInTheDocument();
        expect(heroRightContent).toBeInTheDocument();
    });
});
