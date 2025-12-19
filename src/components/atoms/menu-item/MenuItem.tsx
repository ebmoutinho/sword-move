import React from "react";

import type { MenuItemType } from "../../../types/MenuItems.types";

import { MenuItemWrapper } from "./MenuItem.styles";

interface MenuItemProps {
    menuItem: MenuItemType;
    isSelected: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ menuItem, isSelected }) => {
    return (
        <MenuItemWrapper data-testid="menu-item" to={menuItem.route} isSelected={isSelected}>
            {menuItem.title}
        </MenuItemWrapper>
    );
};

export default MenuItem;
