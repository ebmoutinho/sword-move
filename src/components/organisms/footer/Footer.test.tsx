import { render, screen } from "@testing-library/react";

import { FooterEnum } from "../../../enums/footer.enums";

import Footer from "./Footer";

describe("Footer", () => {
    it("renders correctly", () => {
        render(<Footer />);

        const footer = screen.getByTestId("footer");
        const icon = screen.getByTestId("sword-icon");

        expect(footer).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    });

    it("has the correct email link", () => {
        render(<Footer />);

        const emailLink = screen.getByRole("link", { name: FooterEnum.Email });

        expect(emailLink).toHaveAttribute("href", `mailto:${FooterEnum.Email}`);
    });
});
