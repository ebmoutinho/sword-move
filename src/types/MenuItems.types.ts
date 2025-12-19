import type { ReactNode } from "react";

import type { RouteEnum } from "../enums/routes.enums";

export interface MenuItemType {
    title: string;
    route: RouteEnum;
    page: ReactNode;
}
