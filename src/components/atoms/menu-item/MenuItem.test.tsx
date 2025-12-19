import { MemoryRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";

import { menuItems } from "../../../enums/menu-items.enums";
import type { MenuItemType } from "../../../types/MenuItems.types";

import MenuItem from "./MenuItem";

describe("MenuItem", () => {
    it("renders correctly", () => {
        const menuItem01: MenuItemType = menuItems[0]!;

        render(
            <MemoryRouter>
                <MenuItem menuItem={menuItem01} isSelected={false} />
            </MemoryRouter>,
        );

        const menuItem = screen.getByTestId("menu-item-HOME");

        expect(menuItem).toBeInTheDocument();
        expect(menuItem).toHaveStyle("color: var(--color-dark)");

        expect(menuItem).toMatchSnapshot();
    });

    it("renders styles when it's the selected menu item", () => {
        const menuItem01: MenuItemType = menuItems[0]!;

        render(
            <MemoryRouter>
                <MenuItem menuItem={menuItem01} isSelected={true} />
            </MemoryRouter>,
        );

        const menuItem = screen.getByTestId("menu-item-HOME");

        expect(menuItem).toHaveStyle("color: var(--color-blue-light)");

        expect(menuItem).toMatchSnapshot();
    });

    it("renders links to its corresponding routes", () => {
        const menuItem01: MenuItemType = menuItems[0]!;
        const menuItem02: MenuItemType = menuItems[1]!;

        const { rerender } = render(
            <MemoryRouter>
                <MenuItem menuItem={menuItem01} isSelected={false} />
            </MemoryRouter>,
        );

        let link = screen.getByRole("link");

        expect(link).toHaveAttribute("href", menuItem01.route);

        rerender(
            <MemoryRouter>
                <MenuItem menuItem={menuItem02} isSelected={false} />
            </MemoryRouter>,
        );

        link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", menuItem02.route);
    });
});
