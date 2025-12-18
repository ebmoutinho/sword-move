import type { MenuItemType } from "../types/MenuItems.types";

import { RouteEnum } from "./routes.enums";

export const menuItems: MenuItemType[] = [
    {
        title: "HOME",
        route: RouteEnum.Home,
    },
    {
        title: "GETTING STARTED",
        route: RouteEnum.GettingStarted,
    },
];
