import GettingStartedPage from "../pages/getting-started/GettingStartedPage";
import HomePage from "../pages/home/HomePage";
import type { MenuItemType } from "../types/MenuItems.types";

import { RouteEnum } from "./routes.enums";

export const menuItems: MenuItemType[] = [
    {
        title: "HOME",
        route: RouteEnum.Home,
        page: <HomePage />,
    },
    {
        title: "GETTING STARTED",
        route: RouteEnum.GettingStarted,
        page: <GettingStartedPage />,
    },
];
