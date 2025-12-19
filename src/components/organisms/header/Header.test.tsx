import { MemoryRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";

import { menuItems } from "../../../enums/menu-items.enums";
import type { MenuItemType } from "../../../types/MenuItems.types";

import Header from "./Header";

describe("Header", () => {
    it("renders correctly", () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>,
        );

        const header = screen.getByTestId("header");
        const icon = screen.getByTestId("sword-icon");

        menuItems.forEach((item: MenuItemType) => {
            const link = screen.getByTestId(`menu-item-${item.title}`);

            expect(link).toBeInTheDocument();
        });

        expect(header).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    });
});
