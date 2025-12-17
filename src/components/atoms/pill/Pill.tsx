import React, { type ReactNode } from "react";

import { PillWrapper } from "./Pill.styles";

interface PillProps {
    children: ReactNode;
    color?: string;
    backgroundColor?: string;
    fontSize?: string;
    fontWeight?: string;
    padding?: string;
    letterSpacing?: string;
    borderRadius?: string;
}

const Pill: React.FC<PillProps> = ({
    children,
    color,
    backgroundColor,
    padding,
    borderRadius,
    fontSize,
    fontWeight,
    letterSpacing,
    ...remainingProps
}) => {
    return (
        <PillWrapper
            data-testid="pill"
            color={color}
            backgroundColor={backgroundColor}
            padding={padding}
            borderRadius={borderRadius}
            fontSize={fontSize}
            fontWeight={fontWeight}
            letterSpacing={letterSpacing}
            {...remainingProps}
        >
            {children}
        </PillWrapper>
    );
};

export default Pill;
