import React from "react";

import type { MenuItemType } from "../../../types/MenuItems.types";

import { MenuItemWrapper } from "./MenuItem.styles";

interface MenuItemProps {
    menuItem: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ menuItem }) => {
    return (
        <MenuItemWrapper data-testid="menu-item" to={menuItem.route}>
            {menuItem.title}
        </MenuItemWrapper>
    );
};

export default MenuItem;
