import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

describe("Button", () => {
    it("renders correctly", () => {
        render(<Button>Button text</Button>);

        const button = screen.getByTestId("button");

        expect(button).toBeInTheDocument();
    });

    it("calls callback function on click", async () => {
        const user = userEvent.setup();
        const mockOnClick = jest.fn();

        render(<Button onClick={mockOnClick}>Button text</Button>);

        const button = screen.getByTestId("button");

        await user.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
