import { menuItems } from "../../../enums/menu-items.enums";
import type { MenuItemType } from "../../../types/MenuItems.types";

import MenuItem from "./MenuItem";

import type { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Atoms/MenuItem",
    component: MenuItem,
    argTypes: {
        menuItem: {
            table: {
                disable: true,
            },
        },
        isSelected: {
            control: { type: "boolean" },
            description: "Toggles selected menu item",
        },
    },
} as Meta<typeof MenuItem>;

export const Default: StoryObj<typeof MenuItem> = {
    args: { isSelected: false },
    render: (args) => {
        const menuItem01: MenuItemType = menuItems[0]!;

        return <MenuItem menuItem={menuItem01} isSelected={args.isSelected} />;
    },
};
