import React from "react";

import type { MenuItemType } from "../../../types/MenuItems.types";

import { MenuItemLink } from "./MenuItem.styles";

interface MenuItemProps {
    menuItem: MenuItemType;
    isSelected: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ menuItem, isSelected }) => {
    return (
        <MenuItemLink data-testid={`menu-item-${menuItem.title}`} to={menuItem.route} isSelected={isSelected}>
            {menuItem.title}
        </MenuItemLink>
    );
};

export default MenuItem;
