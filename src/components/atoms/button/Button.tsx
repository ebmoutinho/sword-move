import type { ReactNode } from "react";

import { ButtonWrapper } from "./Button.styles";

interface ButtonProps {
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return <ButtonWrapper data-testid="button">{children}</ButtonWrapper>;
};

export default Button;
