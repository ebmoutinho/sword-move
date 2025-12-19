import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SwordIcon from "../../../assets/icons/SwordIcon";
import { menuItems } from "../../../enums/menu-items.enums";
import { RouteEnum } from "../../../enums/routes.enums";
import type { MenuItemType } from "../../../types/MenuItems.types";

import MenuItem from "../../atoms/menu-item/MenuItem";

import { HeaderWrapper, IconWrapper, MenuItemsWrapper } from "./Header.styles";

const Header: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleIconClick = () => {
        void navigate(RouteEnum.Home);
    };

    return (
        <HeaderWrapper data-testid="header">
            <IconWrapper onClick={handleIconClick}>
                <SwordIcon width={100} />
            </IconWrapper>

            <MenuItemsWrapper>
                {menuItems.map((item: MenuItemType, index: number) => {
                    return (
                        <MenuItem
                            key={`${item.title}-${index}`}
                            menuItem={item}
                            isSelected={location.pathname === (item.route as string)}
                        />
                    );
                })}
            </MenuItemsWrapper>
        </HeaderWrapper>
    );
};

export default Header;
