import type { ReactNode } from "react";

import { ButtonWrapper } from "./Button.styles";

export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <ButtonWrapper data-testid="button" onClick={onClick}>
            {children}
        </ButtonWrapper>
    );
};

export default Button;
