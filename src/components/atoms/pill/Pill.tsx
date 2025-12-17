import React, { type ReactNode } from "react";

import { PillWrapper } from "./Pill.styles";

interface PillProps {
    children: ReactNode;
}

const Pill: React.FC<PillProps> = ({ children }) => {
    return <PillWrapper data-testid="pill">{children}</PillWrapper>;
};

export default Pill;
