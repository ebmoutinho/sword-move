import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

describe("Button", () => {
    it("renders correctly", () => {
        render(<Button>Button text</Button>);

        const button = screen.getByTestId("button");

        expect(button).toHaveStyle("color: var(--color-white)");
        expect(button).toHaveStyle("backgroundColor: var(--color-blue-light)");
        expect(button).toHaveStyle("padding: var(--spacing-16) var(--spacing-36)");
        expect(button).toHaveStyle("borderRadius: var(--spacing-16)");
        expect(button).toHaveStyle("width: fit-content");
        expect(button).toHaveStyle("cursor: pointer");

        expect(button).toHaveTextContent("Button text");

        expect(button).toBeInTheDocument();
        expect(button).toMatchSnapshot();
    });

    it("calls callback function on click", async () => {
        const user = userEvent.setup();
        const mockOnClick = jest.fn();

        render(<Button onClick={mockOnClick}>Button text</Button>);

        const button = screen.getByTestId("button");

        await user.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(button).toMatchSnapshot();
    });
});

describe("Button renders with styles according to state", () => {
    it("renders hover styles", () => {
        render(<Button>Button text</Button>);

        const button = screen.getByTestId("button");

        expect(button).toHaveStyleRule("background-color", "var(--color-blue-medium)", {
            modifier: ":hover",
        });

        expect(button).toMatchSnapshot();
    });

    it("renders active styles", () => {
        render(<Button>Button text</Button>);

        const button = screen.getByTestId("button");

        expect(button).toHaveStyleRule("background-color", "var(--color-blue-dark)", {
            modifier: ":active",
        });

        expect(button).toMatchSnapshot();
    });

    it("renders focus styles", () => {
        render(<Button>Button text</Button>);

        const button = screen.getByTestId("button");

        expect(button).toHaveStyleRule(
            "outline",
            "var(--spacing-2) solid var(--color-blue-medium)",
            {
                modifier: ":focus-visible",
            },
        );

        expect(button).toMatchSnapshot();
    });
});
